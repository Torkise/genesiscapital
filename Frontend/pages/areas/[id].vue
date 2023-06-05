<template>
    <div class="areas">
        <h1> {{ area.name }} </h1>
        <div v-html="area.description"></div>
        <project-box :title="'Current Projects in this area:'" :projects="projects" />
    </div>
</template>




<script>
import ProjectBox from '@/components/ProjectBox.vue';


export default defineNuxtComponent({
    async asyncData() {
        const route = useRoute()
        const areaPromise = $fetch(useRuntimeConfig().public.serverURL + '/areas/area=' + route.params.id)
        const projectsPromise = $fetch(useRuntimeConfig().public.serverURL + '/projects/area=' + route.params.id)
        const [area, projects] = await Promise.all([areaPromise, projectsPromise])


        return {
            area,
            projects,
        }
    },
})
</script>
<style>
.areas {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    grid-gap: 20px;
    padding-left: 8rem;


}


.areas h1 {
    font-size: xx-large;
    border-bottom: 2px solid #FF7A00;
    position: relative;
}
</style>