import express from "express"
import { DataTypes, Sequelize, Op } from "sequelize"
import cors from "cors"

import { fileURLToPath } from "url"
import path from "path"

import dbInitialization from "./dbInit.js"

import parseArray from "./parseArray.js"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const db = new Sequelize({
    dialect: "sqlite",
    storage: path.join(__dirname, "db.sqlite")
})

// This fixes the CORS error. This allows only request from the set origin to communicate with the server
const corsOptions = {
    origin: "http://localhost:3000" // The link of your project when run locally
}
const app = express()
app.use(express.json())
app.use(cors(corsOptions))

async function initDB() {
    const models = {}

    await db.authenticate()
    
    models.Area = db.define('area', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        }, 
        name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true
        }
    })
    models.Project = db.define('project', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        title: { 
            type: DataTypes.STRING,
            allowNull: false
        }, 
        shortDescription: {
            type: DataTypes.STRING,
            allowNull: false
        },
        longDescription: {
            type: DataTypes.STRING,
            allowNull: true
        },
        supervisor: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        areas: {
            type: DataTypes.STRING,
            allowNull: true
        }, 
        featured: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    })

    models.Employee = db.define('employee', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        }, 
        name: { 
            type: DataTypes.STRING,
            allowNull: false
        }, 
        title: { 
            type: DataTypes.STRING,
            allowNull: false
        }, 
        bio: {
            type: DataTypes.STRING,
            allowNull: true
        },
        photo: {
            type: DataTypes.STRING,
            allowNull: true
        },
    })

    await db.sync({ force: true })

    await dbInitialization(models)

    return models
}

async function initServer() {
    const models = await initDB()

    /// Fetches all employees
    app.get('/employees', async(req, res) => {
        const data = await models.Employee.findAll();
        res.status(200).json(data)
    })
    /// Fetches employee with id
    app.get('/employees/:id', async(req, res) => {
        const data = await models.Employee.findOne({
            where: {
                id: req.params.id
            }
        })
        if (data) {
            res.status(200).json(data)
        }
        else {
            res.sendStatus(404)
        }
    })

    /// Fetches supervisor of a project by project ID 
    app.get('/supervisor/:id', async(req, res) => {
        const projectId = req.params.id;
        const project = await models.Project.findByPk(projectId)
        const employeeId = project.supervisor
        const employee = await models.Employee.findByPk(employeeId)
        res.status(200).json(employee)
    })

    /// Fetches all featured projects 
    app.get('/featuredprojects', async(req, res) => {
        const data = await models.Project.findAll({
            where: {
                featured: true
            }
        })
        data.forEach(project => {
            project.areas = parseArray(project.areas)
        })
        res.status(200).json(data)
    })

    /// Fetches all projects 
    app.get('/projects', async(req, res) => {
        const data = await models.Project.findAll();
        data.forEach(project => {
            project.areas = parseArray(project.areas)
        })
        res.status(200).json(data)
    })
    /// Fetches project by projectId 
    app.get('/project/:id', async(req, res) => {
        const data = await models.Project.findOne({
            where: {
                id: req.params.id
            }
        });
        if (data) {
            data.areas = parseArray(data.areas)
            res.status(200).json(data)
        }
        else {
            res.sendStatus(404)
        }
    })
    /// Fetches all projects who has employeeId as their supervisor 
    app.get('/projects/supervisor=:employeeId', async(req, res) => {
        const supervisorId = req.params.employeeId
        const data = await models.Project.findAll({
            where: {
                supervisor: supervisorId
            }
        }); 
        if (data) {
            data.forEach(project => {
                project.areas = parseArray(project.areas)
            })
           res.status(200).json(data)
        }
        else {
            res.sendStatus(404)
        }
    })

    /// Fetches all projects that are tagget with the areaId
    app.get('/projects/area=:areaId', async (req, res) => {
        const areaId = req.params.areaId
        try {
            const area = await models.Area.findByPk(areaId)
            const data = await models.Project.findAll({
            where: {
                areas: {
                    [Op.substring]: area.name,
                    },
                }
            });
            data.forEach(project => {
                project.areas = parseArray(project.areas)
            })
            res.status(200).json(data);
    } catch (error) {
      console.error('Error fetching projects:', error);
      res.status(500).json({ error: 'Failed to fetch projects' });
    }
  });

    /// Fetches all areas
    app.get('/areas', async(req, res) => {
        const data = await models.Area.findAll();
        res.status(200).json(data)
    })

    
    app.get('/areas/project/projectid=:projectid', async(req, res) => {
        const projectId = req.params.projectid;
        const project = await models.Project.findByPk(projectId)
        const projectAreas = JSON.parse(project.areas.replace(/'/g, '"'))
        const data = await models.Area.findAll({
            where: {
                [Op.or]: projectAreas.map(area => ({
                    name: {
                        [Op.substring]: area
                    }
                }))
            }
        })
        res.status(200).json(data)
    })

    /// Fetches area with id = areaID
    app.get('/areas/area=:areaId', async(req, res) => {
        const data = await models.Area.findOne({
            where: {
                id: req.params.areaId 
            }
        })
        if (data) {
            res.status(200).json(data)
        }
        else {
            res.sendStatus(404)
        }
    })

    // Using a different port
    app.listen(3001, () => {
        console.log("Listening on port 3001")
    })
}

initServer();