<template>
    <div class="project-div">
      <pagetitle>{{ project.title }}</pagetitle>
      <div class="project-area" :class="area.name.toLowerCase()" v-for="area in areas">
        <NuxtLink :to="'/areas/' + area.id"> 
            {{ area.name }}
        </NuxtLink>
      </div>
      <div class="project-content">
        <p v-html="project.longDescription"></p>
        <img class="project-img" :src="project.photo">
      </div>
      <div class="links-container">
        Supervised by
        <NuxtLink :to="'/employees/' + employee.id"> 
          <img class="employee-img" :src="employee.photo"><br>
        </NuxtLink>
        {{ employee.name }} <br>
        <i>{{ employee.title }}</i>
      </div>
    </div>
  </template>
  
  <script>
  export default defineNuxtComponent({
    async asyncData() {
      const route = useRoute();
      const areaPromise = $fetch(
        useRuntimeConfig().public.serverURL + '/areas/project/projectid=' + route.params.id
      );
      const supervisorPromise = $fetch(
        useRuntimeConfig().public.serverURL + '/supervisor/' + route.params.id
      );
      const projectsPromise = $fetch(
        useRuntimeConfig().public.serverURL + '/project/' + route.params.id
      );
      const [areas, project, employee] = await Promise.all([
        areaPromise,
        projectsPromise,
        supervisorPromise,
      ]);
  
      return {
        areas,
        project,
        employee,
      };
    },
  });
  </script>
  
  <style>
  .project-img {
    max-width: 50vw;
    max-height: 50vw;
    align-self: center;
    border-radius: 2rem;
  }
  
  .project-div {
    margin-left: 4rem;
    margin-right: 4rem;
    margin-bottom: 4rem;
  }
  
  .project-content {
    display: flex;
    flex-direction: row;
  }
  
  .project-content img {
    max-width: 35vw;
    margin-left: 2rem;
    margin-right: 2rem;
  }
  
  .links-container {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    width: 22vi;
    padding: 2rem;
    align-items: center;
  }
  
  .employee-img {
    width: 10vi;
    border-radius: 50%;
    margin-top: 1rem;
    margin-left: auto;
    margin-right: auto;
    display: block;
  }
  
  @media (max-width: 768px) {
    .project-content {
      flex-direction: column;
      padding-right: 2rem;
    }
    
    .project-content img {
      margin: 2rem auto;
      min-width: 60vw;
      min-height: auto;
    }
  
    .links-container {
      margin-top: 2rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 2rem auto;
    }
  }
  </style>  