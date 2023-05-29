<template>
    <div class="project-div">
        
        <h1 class="project-title">
            {{ project.title }}
        </h1>
        <div class="title-box">
            Managing Partner
        </div>
        <div class="project-content">
            <p v-html="project.longDescription"></p>
            <img :src="employee.photo" alt="">
        </div>

        <div class="links-container">
            <div class="links-areas">    
                <div class="project-areas" v-for="(area, key) in areas" :key="key">
                    <h2>
                        <NuxtLink :to="'/areas/' + area.id" :class="area.name">
                            {{ area.name }}
                        </NuxtLink>
                    </h2>
                </div>
            </div>
            <div class="links-supervisor">
                <NuxtLink :to="'/employees/' + employee.id">
                    <h2 class="supervisor">Supervisor: {{ employee.name }}</h2>
                </NuxtLink>
            </div>
        </div>
            

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

<style>

.project-title {
    font-size: xx-large;
    border-bottom: 2px solid #FF7A00;
    position: relative;
}

.title-box {
    position: relative;
    background-color: #FF7A00;
    width: fit-content;
    color: white;
    padding: 0.3rem;
    border-radius: 5%;
}

.project-content {
    display: flex;
    flex-direction: row;
    padding-right: 4rem;
}

.project-content p {
    font-size: large;
}

.project-content img {
    max-width: 25vw;
}

.links-container {
    margin-top: 8rem;
    display: flex;
    flex-direction: column;;
    background-color: rgba(0, 189, 126, 0.25);
    width: fit-content;
    padding-right: 4rem;
    padding-left: 4rem;
    border-radius: 60px;
    margin-left: auto;
    margin-right: 12rem;
}

.links-areas {
    display: flex;
    flex-direction: row;
}

.links-container h2 {
    color: #00bd7e;
}

.project-areas {
    padding-right: 1rem;
    border-radius: 1rem 1rem 1rem 1rem;
    color: #fff;
    cursor: pointer;
    width: fit-content;
    margin-right: 1rem;
}

.project-areas:hover {
  background-color: #FFC492;
}

.links-supervisor {
    margin-right: 1rem;
}
</style>