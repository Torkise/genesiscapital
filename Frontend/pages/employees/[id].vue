<template>
    <container>
        <content>
            <div class="back-button-wrap">
                <img class="back-button" src="../../assets/img/back.png" @click="goBack"/>
            </div>
            <pagetitle>{{ employee.name }}</pagetitle>
            <div class="employee-title">
                <h3>{{ employee.title }}</h3>
            </div>
            <div class="employee-content">
                <img class="employee-page-img" :src="employee.photo">
                <p>{{ employee.bio }}</p>
            </div>
            <project-box  :title="'Supervises The Following Projects:'" :projects="projects" :hasProjects="hasProjects" />
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
        const hasProjects = projects.length > 0


        return {
            employee,
            projects,
            hasProjects
        }
    },
    methods: {
    goBack() {
      this.$router.go(-1);
    }
    }
})
</script>



<style>
/* .employee-page {
    height: 100vh;
} */

.employee-title {
    color: white;
    width: fit-content;
}

.employee-page h1 {
    font-size: xx-large;
    border-bottom: 2px solid #FF7A00;
    position: relative;
}

.employee-content {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;

}

.employee-content p {
    margin-left: 1rem;
    font-size: large;
}

.employee-content img {
    max-width: 50vw;
    max-height: 50vw;
    margin-top: 0;
    margin-right: 2rem;
    align-self: center;
    border-radius: 20%;
}



@media screen and (min-width: 768px) {
    .employee-content {
        flex-direction: row;
    }

    .employee-content img {
        max-width: 25vw;
        max-height: 25vw;
        object-fit: cover;
        margin-top: 1rem;
    }
}
</style>