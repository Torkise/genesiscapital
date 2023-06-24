<template>
    <div class="project-box">
        <h1>{{ title }}</h1>
        <div v-for="(project, index) in projects" :key="index">
            <NuxtLink :to="'/projects/' + project.id">
                <li>{{ project.title }}</li>
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
    position: relative;
    margin-top: 20px;
    padding: 10px;
    background-color: rgba(255, 122, 0, 0.1);
    border-radius: 60px;
    max-width: 50%;
}


.project-box h1 {
    color: #00bd7e;
    margin-bottom: 2rem;
    font-size: x-large;
    border-bottom: 1px solid #2c3e50;
}

.project-box li {
    cursor: pointer;
    margin-left: 2rem;
    margin-bottom: 1rem;
}

.project-box li:hover {
    color: blue;
}

@media screen and (max-width: 768px) {
    .project-box {
        max-width: 100%;
    }   
    
}
</style>