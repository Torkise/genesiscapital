<template>
    <div class="home-emp">
        <div class="employee-page">
            <img class="employee-page-img" :src="employee.photo">
            <h2>{{ employee.name }}</h2>
            <h3>{{ employee.title }}</h3>
            <div class="bio">{{ employee.bio }}</div>
            <div class = "project-box">
                <h1 class="h-proj">Projects</h1>
                <div v-for="(project, index) in projects" :key="index">
                    <li @click="goToProject(project.id)">{{ project.title }}</li>
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
            const projectsPromise = $fetch(useRuntimeConfig().public.serverURL + '/projects')
            
            const [employee, projects] = await Promise.all([employeePromise, projectsPromise])
            
            return {
                employee,
                projects
            }
    }
})
</script>

<style>
.home-emp {
    width: 100vw;
}

.employee-page-img {
  display: block;
  float: right;
  max-width: 200px;
  border-radius: 25%;
}

.employee-page {
  background-color: #fff;
  height: 100vh;
  max-height: 100%;
}
.project-box {
  position: relative;
  margin-top: 20px;
  padding: 10px;
  background-color: rgba(255, 122, 0, 0.1);
  border-radius: 10px;
  max-width: 30%;
}

.project-box text {
    opacity: 1;
}

.project-box li {
    cursor: pointer;
}

.project-box li:hover{
    color: blue;
}

</style>