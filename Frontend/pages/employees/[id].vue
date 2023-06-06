<template>
    <div class="home-emp">
        <div class="employee-page">
            <h1>{{ employee.name }}</h1>
            <div class="employee-title">
                <h3>{{ employee.title }}</h3>
            </div>
            <div class="employee-content">
                <p>{{ employee.bio }}</p>
                <img class="employee-page-img" :src="employee.photo">
            </div>
            <div class = "project-box">
                    <h1>Supervises The Following Projects: </h1>
                    <div v-for="(project, index) in projects" :key="index">
                        <NuxtLink :to="'/projects/' + project.id ">
                        <li>
                            {{ project.title }}
                        </li>
                        </NuxtLink>
                    </div>
            </div>    
        </div>
    </div>
</template>

<script>
    export default defineNuxtComponent({
        async asyncData() {
            const route = useRoute()
            const employeePromise = $fetch(useRuntimeConfig().public.serverURL + '/employees/' + route.params.id)
            const projectsPromise = $fetch(useRuntimeConfig().public.serverURL + '/projects/supervisor=' + route.params.id)
            
            const [employee, projects] = await Promise.all([employeePromise, projectsPromise])
            
            return {
                employee,
                projects
            }
    }
})
</script>

<style>



.employee-page {
  height: 100vh;
  padding-left: 2rem;
}

.employee-title {
    background-color: #FF7A00;
    color: white;
    width: fit-content;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
}

.employee-page h1 {
    font-size: xx-large;
    border-bottom: 2px solid #FF7A00;
    position: relative;
}

.employee-content {
    display: flex;
    flex-direction: row;
}

.employee-content p{
    padding-right: 2rem;
    font-size: large;
}

.employee-content img{
    max-width: 25vw;
    border-radius: 25%;
    margin-right: 2rem;
}

.project-box {
  position: relative;
  margin-top: 20px;
  padding: 10px;
  background-color: rgba(255, 122, 0, 0.1);
  border-radius: 60px;
  max-width: 40%;
}

.project-box h1 {
    color: #00bd7e;
    margin-bottom: 2rem;
    font-size: x-large;
    border-bottom: 1px solid #2c3e50;
}


.project-box li {
    cursor: pointer;
    margin-left: 2rem;
    margin-bottom: 1rem;
}

.project-box li:hover{
    color: blue;
}

</style>