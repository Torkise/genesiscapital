<template>
    <div class="featured-projects-page">
      <h1 class="page-title">Explore Our Featured Projects</h1>
      <p class="page-text">Discover our carefully selected projects that showcase innovation, excellence, and impactful solutions. These featured projects highlight the diverse range of industries and technologies we invest in, providing insights into our commitment to supporting groundbreaking ventures.</p>
  
      <div class="project-list">
        <div v-for="project in this.featuredProjects" :key="project.id">
            <NuxtLink :to="'/projects/' + project.id"  class="featured-project" >
            <!-- <div class="project-area" :class="area.toLowerCase()" v-for="area in project.areas" :key="area">
                {{ area }}
            </div> -->
            <h2>{{ project.title }}</h2>
            <p>{{ project.shortDescription }}</p>
            <p class="learnmore">Learn more...</p>
            </NuxtLink>
        </div>
        </div>
    </div>
  </template>

<script>
    export default defineNuxtComponent({
        async asyncData() {
            const featuredProjects = await $fetch(useRuntimeConfig().public.serverURL + '/featuredprojects')
            return {
                featuredProjects
            }
    }
})
</script>