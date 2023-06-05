<template>
    <div class="areas">

        <h1> {{ area.name }}</h1>
        <div v-for="project in projects" :key="project.id">
            <h2>{{ project.title }}</h2>
        </div>
    </div>
</template>


<script>
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
}

.areas h1 {
    font-size: xx-large;
    border-bottom: 2px solid #FF7A00;
    position: relative;
}
</style>