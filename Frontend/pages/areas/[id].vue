<template>
  <container>
    <div class="areas">
      <!-- Back button -->
      <div class="back-button-wrap">
        <img class="back-button" src="../../assets/img/back.png" @click="goBack" />
      </div>
      <pagetitle>{{ area.name }}</pagetitle>
      <div class="area-content">
        <div class="area-description">
          <normal-text>{{ area.description }}</normal-text>
          <!-- Using project box component -->
          <project-box
            :title="'Current Projects in this area:'"
            :projects="projects"
            :hasProjects="hasProjects"
          />
        </div>
      </div>
    </div>
  </container>
</template>

<script>
import ProjectBox from "@/components/ProjectBox.vue";

// Fetching the areas and projects from the database
export default defineNuxtComponent({
  async asyncData() {
    const route = useRoute();
    const areaPromise = $fetch(
      useRuntimeConfig().public.serverURL + "/areas/area=" + route.params.id
    );
    const projectsPromise = $fetch(
      useRuntimeConfig().public.serverURL + "/projects/area=" + route.params.id
    );
    const [area, projects] = await Promise.all([areaPromise, projectsPromise]);

    const hasProjects = projects.length > 0;

    return {
      area,
      projects,
      hasProjects
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
});
</script>

<style>
.area-content {
  display: flex;
  flex-direction: row;
  align-items: flex-start; /* Align items to the top */
}

.area-description {
  flex: 1; /* Take up remaining space */
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
