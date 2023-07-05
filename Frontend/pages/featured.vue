<template>
    <container>
        <pagetitle>Our Featured Projects</pagetitle>
        <p>Combining cutting-edge technology, unparalleled expertise, and a passion for innovation,
            our featured project is poised to transform our world. It brings together the brightest
            minds and boldest ideas to tackle the industry's most pressing challenges head-on.
            Through our strategic investment and unwavering support, we have helped catalyze the development
            of this groundbreaking project. It embodies our commitment to driving progress and creating meaningful
            change in the world. By collaborating with visionary founders and industry leaders, we are unlocking
            new
            possibilities and paving the way for a brighter future.</p>
        <div class="featured" v-for="project in featuredProjects" :key="project.id">
            <div class="area" :class="area.toLowerCase()" v-for="area in project.areas" :key="area">
                <NuxtLink :to="'/areas/' + get_area_id(area)">
                    {{ area }}
                </NuxtLink>
            </div>
            <NuxtLink :to="'/projects/' + project.id">
                <h4>{{ project.title }}</h4>
            </NuxtLink>
            <div class="text-box">
                <div>
                    <p>{{ project.longDescription }}</p>
                    <div class="supervisor">
                        <h3>Supervised By:</h3>
                        <div class="supervisor-name">
                            <h3>
                                <NuxtLink :to="'/employees/' + project.supervisor">{{ project.projectSupervisor.name }}
                                </NuxtLink>
                            </h3>
                        </div>

                    </div>
                </div>
                <img :src="project.photo" />
            </div>

        </div>
    </container>
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

<style>
.featured-text {
    font-size: large;
    position: relative;
}
 p {
  font-size: 26px;
  font-family: Poppins;
  color: #333;
  margin-bottom: 2rem;
  margin-left: 100px;
  margin-right: 10px;
}

@media (max-width: 768px) {
  .contactus {
    font-size: 16px;
  }
}

@media (max-width: 480px) {
  .contactus {
    font-size: 11px;
  }
}
 .featured p {
  font-size: 20px;
  font-family: Poppins;
  color: #333;
  margin-bottom: 2rem;
  margin-left: 100px;
  margin-right: 10px;
}

@media (max-width: 768px) {
  .contactus {
    font-size: 13px;
  }
}

@media (max-width: 480px) {
  .contactus {
    font-size: 10px;
  }
}
.featured {
    width: 60vw;
    padding: 1rem 2rem 2rem 2rem;
    background-color: rgba(222, 241, 237, 255);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 2rem;
    margin-top: 4rem;
    margin-left: 5vw;
}

.featured h4 {
    font-size: 2rem;
}

.text-box {
    display: flex;
    flex-direction: row;
}

.text-box p {
    margin-right: 2rem;
}

.text-box img {
    max-width: 40vh;
    width: 100%;
    border-radius: 10%;
    margin-right: 2rem;
}

.supervisor {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.supervisor h3 {
    cursor: default;
    font-weight: lighter;
    font-size: 1.3rem;
}

.supervisor-name h3 {
    margin-left: 2rem;
    color: black;
    border-bottom: 1px solid black;
    text-decoration: none;
}

.area {
    display: inline-block;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    padding: 0.25rem 1rem;
    border-radius: 1rem 1rem 1rem 1rem;
    color: #fff;
    text-transform: capitalize;
    cursor: pointer;
}

.area:hover {
    background-color: #FFC492;
}

.healthcare {
    background-color: #ffd388;
}

.energy {
    background-color: #68b56b;
}

.technology {
    background-color: #9ab8ff;
}

.sustainability {
    background-color: #9d64f8;
}

@media screen and (max-width: 860px) {
    .text-box {
        flex-direction: column;
        align-items: center
    }

    .text-box img {
        display: none;
    }

    .featured h4 {
        font-size: 1.5rem;
    }
}
</style>