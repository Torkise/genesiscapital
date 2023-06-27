<template>
    <div class="project-box">
        <h2>{{ title }}</h2>
        <div v-for="(project, index) in projects" :key="index">
            <NuxtLink :to="'/projects/' + project.id">
                <p>{{ project.title }}</p>
            </NuxtLink>
        </div>
    </div>
</template>
 

<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        },
        projects: {
            type: Array,
            required: true,
        },
    },
};
</script>
 


<style scoped>
.project-box {
    position: flex;
    margin-top: 4rem;
    padding: 1rem;
    background-color: rgba(255, 122, 0, 0.1);
    border-radius: 30px;
    max-width: 30%;
    margin-left: auto;
}

.project-box h2 {
    margin-top: 1rem;
    color: #00BD7E;
    font-size: x-large;
}

.project-box p {
    margin-bottom: 0.5rem;
    margin-left: rem;
}

.project-box p:hover {
    background: linear-gradient(45deg, #00BD7E, #2D3E50, #ff7a00);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

@media screen and (max-width: 768px) {
    .project-box {
        max-width: 100%;
    }

}

@media screen and (max-width: 768px) {
    .project-box {
        max-width: 100%;
    }   
    
}
</style>