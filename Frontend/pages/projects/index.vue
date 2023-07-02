<script>
export default defineNuxtComponent({
  async asyncData() {
    const route = useRoute()
    const projects = await $fetch(useRuntimeConfig().public.serverURL + '/projects')
    return {
      projects
    }
  }
})
</script>
<template>
  <container>
    <div class="projects">
      <pagetitle>A Look into Our Investments</pagetitle>
      <p>Welcome to Genesis Capital Projects page, where you can discover the latest investment opportunities and
        innovative
        startups we are backing. Our team of experienced professionals is dedicated to identifying and supporting the most
        promising ventures across a variety of sectors. Explore our portfolio and learn more about the exciting new
        companies we are supporting.</p>
      <div class="project-list">
        <div v-for="project in projects" :key="project.id">
          <NuxtLink :to="'/projects/' + project.id">
            <div class="project">
              <div class="project-area" :class="area.toLowerCase()" v-for="area in project.areas" :key="area">
                  {{ area }}
              </div>
                <h4>{{ project.title }}</h4>
                <smalltext>{{ project.shortDescription }}</smalltext>
                <div class="learn-more">
                  <smalltext>Learn more...</smalltext>
                </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </container>
</template>
  
<style>
.project-list {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 4rem;
  justify-content: center;
}

.project {
  width: 19rem;
  height: 19rem;
  padding: 1rem 2rem 2rem 2rem;
  transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
  border-radius: 2rem;
  box-sizing: border-box;
  overflow: hidden;
  background-color: rgba(222,241,237,255);
  flex-direction: column;
  justify-content: space-between;
}

.project:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);
}

.project-area {
  display: inline-block;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  padding: 0.25rem 1rem;
  border-radius: 1rem 1rem 1rem 1rem;
  color: #fff;
}

.project-area.healthcare {
  background-color: #ffd388;
}

.project-area.energy {
  background-color: #68b56b;
}

.project-area.technology {
  background-color: #9ab8ff;
}

.project-area.sustainability {
  background-color: #9d64f8;
}

.project h2 {
  font-size: 1.5rem;
  margin-top: 0;
}

.learn-more {
  font-style: italic;
  margin-top: 1rem;
}

@media (max-width: 768px) {
  .project-list {
    margin-top: 2rem;
    margin-right: 1rem;
    margin-left: 1rem;
    gap: 1rem;
  }

  .project {
    width: 70vi;
    height: auto;
    padding: 1rem;
  }

  .project-area {
    margin-bottom: 0.5rem;
  }

  .project smalltext,
  .learn-more {
    display: none;
  }

  h4 {
    margin-top: 0;
    font-size: 1.2rem;
  }
}
</style>