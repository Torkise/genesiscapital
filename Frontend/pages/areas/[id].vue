<template>
    <div class="area">
      <h1 class="page-title">{{area.name}}</h1>
      <p>{{ area.description }}</p>
      <br>
      <!-- Create component for this -->
      <div class="project-list">
        <div v-for="project in projects" :key="project.id">
          <div class="area-project" @click="goToProjectPage(project.id)">
            <div class="project-area" :class="area.toLowerCase()" v-for="area in project.areas" :key="area">
              {{ area }}
            </div>
            <h2>{{ project.title }}</h2>
            <p>{{ project.shortDescription }}</p>
            <p class="learnmore">Learn more...</p>
          </div>
        </div>
      </div>
    </div>
  </template>

<script>
    export default {
        data () {
            return {
                area: [],
                projects: [],
            }
        },
        mounted() {
            const route = useRoute()
            this.areaId = route.params.id;
            this.fetchArea(this.areaId);
            this.fetchProjectsForArea(this.areaId);
        },
        methods: {
            logInfo() {
                console.log(this.employeeId)
            },
            fetchArea(areaId) {
                const apiUrl = 'http://localhost:3001/areas/area=' + areaId;

                fetch(apiUrl)
                    .then((response) => response.json())
                    .then((data) => {
                        this.area = data;
                        console.log(this.area)
                })
                .catch((error) => {
                    console.error('Error fetching area data:', error);
            });
        },
            fetchProjectsForArea(areaId) {
                const apiUrl = 'http://localhost:3001/projects/area=' + areaId ;
                fetch(apiUrl)
                    .then((response) => response.json())
                    .then((data) => {
                        this.projects = data;
                        this.projects.forEach(project => project.areas = this.parseArray(project.areas))
                        console.log(this.projects)
                })
                .catch((error) => {
                    console.error('Error fetching project data:', error);
            });
        },
        parseArray(input) {
        try {
          // Remove the surrounding single quotes if present
          const sanitizedInput = input.replace(/'/g, '"');
          // Parse the string into an array
          const array = JSON.parse(sanitizedInput);
          // Make sure the parsed value is an array
          if (Array.isArray(array)) {
            return array;
          } else {
            throw new Error('Invalid input format');
          }
        } catch (error) {
          throw new Error('Invalid input format');
        }
      },
        goToProjectPage(id) {
          window.scrollTo(0, 0)
          router.push("/projects/" + id)
        }
    }
}
</script>