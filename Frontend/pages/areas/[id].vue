<template>
  <h2>Ciao</h2>
    <h1> {{ area.name }}</h1>
    <div v-for="project in projects" :key="project.id">
      <h2>{{ project.title }}</h2>
    </div>
</template>
<script>
    export default defineNuxtComponent({
            async asyncData() {
                const route = useRoute()
                const areaPromise = $fetch(useRuntimeConfig().public.serverURL + '/areas/area=' + route.params.id)
                const projectsPromise = $fetch(useRuntimeConfig().public.serverURL + '/projects/area=' + route.params.id )
                const [area, projects] = await Promise.all([areaPromise, projectsPromise])
                
                return {
                    area,
                    projects,
                }
        },
    })
</script>