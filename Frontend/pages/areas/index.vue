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
        <p class="general-description">In Genesis Capital, we are committed to investing in innovative and high-growth potential startups that are poised to make a significant impact in their respective industries. On this page, we provide an overview of the areas in which we invest and the types of businesses we are looking to support. Whether you are an entrepreneur seeking funding for your startup or an investor interested in learning more about our investment strategy, we hope this page provides valuable insights into our focus and approach.</p>
      </section>

      <div class="areas-box">
        <div class="areas-image-box">
          <NuxtLink :to="'/areas/' + areas[0].id">
            <img :src="areas[0].mainphoto">
            <div class="image-caption">Technology</div>
          </NuxtLink>
        </div>
        <div class="areas-image-box">
          <NuxtLink :to="'/areas/' + areas[1].id">
            <img :src="areas[1].mainphoto">
            <div class="image-caption">Energy</div>
          </NuxtLink>
        </div>
        <div class="areas-image-box">
          <NuxtLink :to="'/areas/' + areas[2].id">
            <img :src="areas[2].mainphoto">
            <div class="image-caption">Healthcare</div>
          </NuxtLink>
        </div>
        <div class="areas-image-box">
          <NuxtLink :to="'/areas/' + areas[3].id">
            <img :src="areas[3].mainphoto">
            <div class="image-caption">Sustainability</div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </container>
</template>

<style>

.area-section p {
  font-size: 24px;
  font-family: Poppins;
  color: #333;
  margin-bottom: 2rem;
  margin-left: 5px;
  margin-right: 10px;
}

@media (max-width: 768px) {
  .area-section p {
    font-size: 15px;
  }
}

@media (max-width: 480px) {
  .area-section p {
    font-size: 11px;
  }
}

.areas-box {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  margin-top: 4rem;
  padding: 0 1rem;
}

.areas-image-box {
  position: relative;
}

.areas-image-box img {
  width: 100%;
  height: auto;
  transition: transform 0.3s ease-in-out;
}

.image-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: .5rem;
  background-color: rgb(248, 174, 109);
  color: #fff;
  font-size: 26px;
  text-align: center;
}
@media (max-width: 768px) {
  .image-caption p {
    font-size: 15px;
  }
}

@media (max-width: 480px) {
  .image-caption p {
    font-size: 11px;
  }
}

.areas-image-box:hover img {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);
}


</style>
