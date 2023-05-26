<template>
    <div class="project-div">
        
        <h1>
            {{ project.title }}
        </h1>
        <p v-html="project.longDescription"></p>
        <h2>Areas</h2>
        <div class="project-areas" v-for="(area, key) in areas" :key="key">
            <NuxtLink :to="'/areas/' + area.id">
                {{ area.name }}
            </NuxtLink>
        </div>
        <NuxtLink :to="'/employees/' + employee.id">
            <h2 class="supervisor">Supervisor: {{ employee.name }}</h2>
        </NuxtLink>
    

    </div>
</template>

<script>

    export default defineNuxtComponent({
            async asyncData() {
                const route = useRoute()
                const areaPromise = $fetch(useRuntimeConfig().public.serverURL + '/areas/project/projectid=' + route.params.id)
                const supervisorPromise = $fetch(useRuntimeConfig().public.serverURL + '/supervisor/' + route.params.id)
                const projectsPromise = $fetch(useRuntimeConfig().public.serverURL + '/project/' + route.params.id)
                const [areas, project, employee] = await Promise.all([areaPromise, projectsPromise, supervisorPromise])
                
                return {
                    areas,
                    project,
                    employee
                }
        }
    })

</script>