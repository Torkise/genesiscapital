<template>
    <div class="project-div">
        <NuxtLink :to="'/projects/'"> 
            <div class="back-button-wrap">
                <img class="back-button" src="../../assets/img/back.png">
            </div>
        </NuxtLink>
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

.project-content p {
  font-size: 24px;
  font-family: Poppins;
  color: #333;
  margin-bottom: 2rem;
  margin-left: 5px;
  margin-right: 10px;
}
@media (max-width: 768px) {
  .project-content p {
    font-size: 15px;
  }
}

@media (max-width: 480px) {
  .project-content p {
    font-size: 11px;
  }
}

.project-content img {
    max-width: 35vw;
    margin-left: 2rem;
}

.links-container {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    background-color: rgba(0, 189, 126, 0.25);
    width: 30vi;
    padding: 2rem;
    border-radius: 2rem;
    margin-left: auto;
    align-items: center;
}

.links-areas {
    display: flex;
    flex-wrap: wrap;
}

.links-container h2 {
    color: #000000;
    font-size: 16px;
    margin: 0;
}

.project-areas {
    border-radius: 1rem;
    color: #fff;
    cursor: pointer;
    padding: 0.5rem 1rem;
    margin: 0.5rem;
    background-color: rgba(222,241,237,255);
}

.project-areas:hover {
    background-color: #ffc492;
}

.links-supervisor {
    margin-top: 1rem;
}

.supervisor {
    color: #000000;
    font-size: 18px;
}

@media (max-width: 768px) {
  .project-content {
    flex-direction: column;
    padding-right: 0;

  }
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
    text-align: center;
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
    }
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
    .employee-img {
        width: 20vi;
        border-radius: 50%;
        margin-top: 1rem;
        margin-left: auto;
        margin-right: auto;
        display: block;
    }
  
  </style>  