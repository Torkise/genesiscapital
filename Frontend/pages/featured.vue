<template>
    <div class="featured-projects-page">
      <h1 class="page-title">Explore Our Featured Projects</h1>
      <p class="page-text">Discover our carefully selected projects that showcase innovation, excellence, and impactful solutions. These featured projects highlight the diverse range of industries and technologies we invest in, providing insights into our commitment to supporting groundbreaking ventures.</p>
  
      <div class="project-list">
        <div v-for="project in this.featuredProjects" :key="project.id">
            <div class="featured-project" >
            <div class="project-area" :class="area.toLowerCase()" v-for="area in project.areas" :key="area">
                {{ area }}
            </div>
            <h2>{{ project.title }}</h2>
            <p>{{ project.shortDescription }}</p>
            <p class="learnmore">Learn more...</p>
            </div>
        </div>
        </div>
    </div>
  </template>

<script>
    export default defineNuxtComponent({
        async asyncData() {
            const featuredProjects = await $fetch(useRuntimeConfig().public.serverURL + '/featuredprojects')
            console.log(featuredProjects)
            return {
                featuredProjects
            }
    }
})
</script>

<style>

.featured-projects-page {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 8rem;
    grid-gap: 20px;
  }

  .project-list {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
  }
  
  .featured-project {
    width: 100vh;
    /* max-width: 100rem; */
    padding: 2rem;
    border: 1px solid #ddd;
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    border-radius: 5px;
  }

  .featured-project:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);
    cursor: pointer;
  }

  .project-area {
    display: inline-block;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    padding: 0.25rem 1rem;
    border-radius: 1rem 1rem 1rem 1rem;
    color: #fff;
    text-transform: capitalize;
  }

</style>