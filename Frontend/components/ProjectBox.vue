<template>
    <div class="project-box">
        <h2>{{ title }}</h2>
        <div v-if="hasProjects" v-for="(project, index) in projects" :key="index">
            <NuxtLink :to="'/projects/' + project.id">
                <p>{{ project.title }}</p>
            </NuxtLink>
        </div>
        <div v-else>
            <p>This employee is not currently working on a project.</p>
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
        hasProjects: {
            type: Boolean,
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
    background: linear-gradient(115deg,  rgba(29, 110, 9, 0), rgba(29, 110, 9, 0.15));
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