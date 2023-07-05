<template>
    <container>
        <div class="areas">
            <NuxtLink :to="'/areas/'"> 
                <div class="back-button-wrap">
                    <img class="back-button" src="../../assets/img/back.png">
                </div>
            </NuxtLink>
            <pagetitle> {{ area.name }} </pagetitle>
            <div class = "area-content">
                <div>
                    <normal-text>{{ area.description }}</normal-text>
                    <project-box :title="'Current Projects in this area:'" :projects="projects" :hasProjects="hasProjects" />
                </div>
            </div>
        </div>
    </container>
</template>


<script>
import ProjectBox from '@/components/ProjectBox.vue';


export default defineNuxtComponent({
    async asyncData() {
        const route = useRoute()
        const areaPromise = $fetch(useRuntimeConfig().public.serverURL + '/areas/area=' + route.params.id)
        const projectsPromise = $fetch(useRuntimeConfig().public.serverURL + '/projects/area=' + route.params.id)
        const [area, projects] = await Promise.all([areaPromise, projectsPromise])

        const hasProjects = projects.length > 0

        return {
            area,
            projects,
            hasProjects
        }
    },
})
</script>


<style>

.area-content {
    display: flex;
    flex-direction: row;
}
.area-content  {
  font-size: 26px;
  font-family: Poppins;
  color: #333;
  margin-bottom: 2rem;
  margin-left: 100px;
  margin-right: 10px;
}

@media (max-width: 768px) {
  .contactus {
    font-size: 16px;
  }
}

@media (max-width: 480px) {
  .contactus {
    font-size: 11px;
  }
}
.area-content img {
    width: 30vw;
    height: 30vw;
    border-radius: 25%;
    opacity: 0.4;
}

@media screen and (max-width: 768px) {      
    .area-content {
        flex-direction: column;
    }

    .area-content img {
        display: none;
    }
}


</style>