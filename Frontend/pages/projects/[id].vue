<template>
    <div class="project-div">
        <pagetitle>{{ project.title }}</pagetitle>
        <div class="project-content">
            <p v-html="project.longDescription"></p>
            <img class="project-img"
                src="https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="">
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
        const route = useRoute();
        const areaPromise = $fetch(
            useRuntimeConfig().public.serverURL + '/areas/project/projectid=' + route.params.id
        );
        const supervisorPromise = $fetch(
            useRuntimeConfig().public.serverURL + '/supervisor/' + route.params.id
        );
        const projectsPromise = $fetch(
            useRuntimeConfig().public.serverURL + '/project/' + route.params.id
        );
        const [areas, project, employee] = await Promise.all([
            areaPromise,
            projectsPromise,
            supervisorPromise,
        ]);

        return {
            areas,
            project,
            employee,
        };
    },
});
</script>

<style>
.project-img {
    max-width: 50vw;
    max-height: 50vw;
    margin-top: 0;
    align-self: center;
    border-radius: 2rem;
}

.project-div {
    margin-left: 4rem;
    margin-right: 4rem;
    margin-bottom: 4rem;
}

.project-content {
    display: flex;
    flex-direction: row;
}

.project-content p {
    font-size: large;
}

.project-content img {
    max-width: 35vw;
    margin-left: 2rem;
}

.links-container {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    background-color: rgba(0, 189, 126, 0.25);
    width: 30vi;
    padding: 2rem;
    border-radius: 2rem;
    margin-left: auto;
    align-items: center;
}

.links-areas {
    display: flex;
    flex-wrap: wrap;
}

.links-container h2 {
    color: #000000;
    font-size: 16px;
    margin: 0;
}

.project-areas {
    border-radius: 1rem;
    color: #fff;
    cursor: pointer;
    padding: 0.5rem 1rem;
    margin: 0.5rem;
    background-color: rgba(222,241,237,255);
}

.project-areas:hover {
    background-color: #ffc492;
}

.links-supervisor {
    margin-top: 1rem;
}

.supervisor {
    color: #000000;
    font-size: 18px;
}

@media (max-width: 768px) {
  .project-content {
    flex-direction: column;
    padding-right: 0;
  }
  
  .project-content img {
    margin: 2rem auto;
    min-width: 60vw;
    min-height: auto;
  }
  .links-container {
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
