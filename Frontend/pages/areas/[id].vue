<template>
    <container>
        <div class="areas">
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