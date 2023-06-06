<template>
    <container>
        <content>
            <pagetitle>{{ employee.name }}</pagetitle>
            <div class="employee-title">
                <h3>{{ employee.title }}</h3>
            </div>
            <div class="employee-content">
                <p>{{ employee.bio }}</p>
                <img class="employee-page-img" :src="employee.photo">
            </div>
            <project-box :title="'Supervises The Following Projects:'" :projects="projects" />
        </content>
    </container>
</template>



<script>
import ProjectBox from '@/components/ProjectBox.vue';

export default defineNuxtComponent({
    async asyncData() {
        const route = useRoute()
        const employeePromise = $fetch(useRuntimeConfig().public.serverURL + '/employees/' + route.params.id)
        const projectsPromise = $fetch(useRuntimeConfig().public.serverURL + '/projects/supervisor=' + route.params.id)


        const [employee, projects] = await Promise.all([employeePromise, projectsPromise])


        return {
            employee,
            projects
        }
    }
})
</script>



<style>
/* .employee-page {
    height: 100vh;
} */

.employee-title {
    background-color: #FF7A00;
    color: white;
    width: fit-content;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
}

.employee-page h1 {
    font-size: xx-large;
    border-bottom: 2px solid #FF7A00;
    position: relative;
}

.employee-content {
    display: flex;
    flex-direction: row;
}

.employee-content p {
    padding-right: 2rem;
    font-size: large;
}

.employee-content img {
    max-width: 25vw;
    border-radius: 25%;
    margin-right: 2rem;
}
</style>