<template>
    <container>
        <div class="areas">
            <pagetitle> {{ area.name }} </pagetitle>
            <div class = "area-content">
                <div>
                    <normal-text>{{ area.description }}</normal-text>
                    <project-box :title="'Current Projects in this area:'" :projects="projects" />
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


        return {
            area,
            projects,
        }
    },
    methods: {
        getImageUrl(contenId) {
            let imageUrl = ''

            if (id === 1) {
                imageUrl = require('@assets/images/technology/3394 2.png')
            }
            if (id === 2) {
                imageUrl = require('@assets/images/energy/417 1 2.png')
            } 
            if (id === 3) {
                imageUrl = require('@assets/images/healthcare/doctor-reviewing-tablet 1.png')
            }
            if (id === 4) {
                imageUrl = require('@assets/images/sustainability/smart-farming-with-agriculture-iot.png')
            }   
            return imageUrl
        }
    }
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