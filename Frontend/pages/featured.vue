<template>
    <h1 class="featured-title">Our Featured Projects</h1>
    <p class="featured-text">Combining cutting-edge technology, unparalleled expertise, and a passion for innovation,
         our featured project is poised to transform our world. It brings together the brightest
          minds and boldest ideas to tackle the industry's most pressing challenges head-on.
Through our strategic investment and unwavering support, we have helped catalyze the development
 of this groundbreaking project. It embodies our commitment to driving progress and creating meaningful 
 change in the world. By collaborating with visionary founders and industry leaders, we are unlocking 
 new 
 possibilities and paving the way for a brighter future.</p>   
 <div class="featured" v-for="project in featuredProjects" :key="project.id">
    <h2 class="featured-project-title">{{ project.title }}</h2>
    <div class="text-box">
        <p>{{ project.longDescription }}</p>
        <img src="https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Image"/>
    </div>
    <div class="supervisor">
        <h3>Supervised By:</h3>
        <h2>
            <NuxtLink :to="'/employees/' + project.supervisor">{{ project.supervisor }}</NuxtLink>
        </h2>
    </div>
    <hr/>
    <div style="margin-left: 2rem;">
        <div class="area" :class="area.toLowerCase()" v-for="area in project.areas" :key="area">
            <NuxtLink :to="'/areas/' + get_area_id(area)">
                {{ area }}
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

<style>

body {
    padding-left: 2rem;
}

hr {
    border-top: 1.5px solid ;
    color: #FF7A00;
    margin-left: 2rem;
    margin-right: 2rem;
    margin-bottom: 1rem;
    opacity: 50%;
}

.featured-title {
    font-size: xx-large;
    border-bottom: 2px solid #FF7A00;
    position: relative;
}

.featured-text {
    font-size: large;
    position: relative;
}

.featured {
    min-height: 60vh;
    width: 90vw;
    background: rgba(44, 62, 80, 0.2);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 50px;
    margin-bottom: 6rem;
}

.featured-project-title {
    color: #FF7A00;
    margin-left: 2rem;
    margin-bottom: 2rem;

}

.text-box {
    display: flex;
    flex-direction: row;
}

.text-box p {
    font-size: large;
    position: relative;
    margin-left: 2rem;
    margin-right: 2rem;
}

.text-box img {
    max-width: 30vw;
    border-radius: 10%;
    margin-right: 2rem;
    margin-bottom: 2rem;
}

.supervisor {
    padding-left: 2rem;
    display: flex;
    flex-direction: row;
}

.supervisor h2 {
    font-size: large;
    margin-left: 2rem;
    border-bottom: 1px solid black;
    cursor: pointer;
}

.supervisor h2:hover {
    
  color: #FF7A00;
  border-color: #FF7A00;
}

.supervisor h3 {
    font-size: medium;
    cursor:default;
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
        max-width: 40vw;
    }
}


</style>