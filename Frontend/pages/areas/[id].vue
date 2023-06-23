<template>
    <container>
        <div class="areas">
            <pagetitle> {{ area.name }} </pagetitle>
            <div class = "area-content">
                <div>
                    <normal-text>{{ area.description }}</normal-text>
                    <project-box :title="'Current Projects in this area:'" :projects="projects" />
                </div>
                <img :src="area.photo">
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


        return {
            area,
            projects,
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
</style>