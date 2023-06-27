<script lang="ts">
/*
    The defineNuxtComponent gets us access to the asyncData property.
    This is the first function that is called by nuxt when the page is called.
    We can use this to pre-load the data to make it available to the user.
*/
export default defineNuxtComponent({
  async asyncData() {
    // useRuntimeConfig provide us with environment variables set up in the nuxtconfig file
    const areas = await $fetch(useRuntimeConfig().public.serverURL + '/areas')

    return {
      areas
    }
  },
  computed: {
    imagesPerRow() {
      const desiredImagesPerRow = 4; 
      return Math.floor(this.totalAreas / desiredImagesPerRow) * desiredImagesPerRow;
    }
  }
})
</script>

<template>
  <container>
    <div>
      <pagetitle>Our Fields of Interest</pagetitle>
      <section id="general" class="area-section">
        <p>In Genesis Capital, we are committed to investing in innovative and high-growth potential startups that are
          poised to make a significant impact in their respective industries. On this page, we provide an overview of the
          areas in which we invest and the types of businesses we are looking to support. Whether you are an entrepreneur
          seeking funding for your startup or an investor interested in learning more about our investment strategy, we
          hope
          this page provides valuable insights into our focus and approach.</p>
      </section>

      <div class="areas-box">
        <div class="areas-image-box" v-for="area in areas">
          <NuxtLink :to="'/areas/' + area.id">
            <img :src="area.photo">
          </NuxtLink>
        </div>
      </div>
    </div>

  </container>
</template>
  
  <style>
.areas-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 4rem;
  padding: 0 1rem;
}

.areas-image-box {
  display: flex;
}

.areas-box img {
  margin: 0.5rem;
  width: 40vh;
  height: 40vh;
  transition: transform 0.3s ease-in-out;
}

.areas-box img:hover {
  transform: scale(1.2);
}

</style>
  