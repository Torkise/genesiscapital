<template>
    <div class='page'>
        <TheHeader @toggle-sidebar="toggleSidebar" />
        <Sidebar :is-open="isSidebarOpen" @close-sidebar="closeSidebar" />

        <slot />
        <TheFooter />
    </div>
</template>
  
<script>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
import Sidebar from "@/components/Sidebar.vue";

export default {
    components: {
        TheHeader,
        TheFooter,
        Sidebar
    },
    data() {
        return {
            isSidebarOpen: false
        };
    },
    methods: {
        toggleSidebar() {
            this.isSidebarOpen = !this.isSidebarOpen;
        },
        closeSidebar() {
            this.isSidebarOpen = false;
        }
    }
};
</script>
  
<style>
.page {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    margin: 0 auto;
    font-family: "Graphik Web", Arial, sans-serif;
    font-size: 1rem;
}

container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 0 2rem;
    margin-bottom: 4rem;
    align-items: center;
}

a {
    color: #2D3E50;
    text-decoration: none;
    /* Remove the underline on links */
}

h2 {
    line-height: 1.3;
    font-family: "Recoleta", serif;
    font-size: 1.5rem;
    color: 2D3E50;
    font-weight: bold;
    margin-top: 1.2rem;
    margin-bottom: 0.5rem;
}

h3 {
    line-height: 1.3;
    font-family: "Recoleta", serif;
    font-size: 1.5rem;
    color: black;
}

pagetitle {
    font-family: "Recoleta", serif;
    font-size: 4rem;
    font-weight: bold;
    margin: 4rem 0 2rem;
    color: #ffffff;
    /* Set the font color to white */
    position: relative;
    display: inline-block;
    width: 100%;

    /* Gradient background */
    background: linear-gradient(45deg, #00BD7E, #2D3E50, #ff7a00);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

p {
    line-height: 1.6;
    font-weight: lighter;
}


.gradient-text {
    color: white;
    /* Gradient background */
    background: linear-gradient(45deg, #00BD7E, #2D3E50, #ff7a00);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

/* Responsive Styles */
@media screen and (max-width: 768px) {
    container {
        padding: 0 1rem;
        /* Adjust the padding as needed */
    }

    pagetitle {
        font-size: 3rem;
        /* Adjust the font size as needed */
        margin: 3rem 0 1.5rem;
        /* Adjust the margins as needed */
    }
}
</style>
  