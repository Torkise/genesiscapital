<template>
    <header>
        <div class="header-left">
            <NuxtLink to="/">
                <img alt="Vue logo" class="logo" src="@/assets/logo.svg" />
            </NuxtLink>

        </div>
        <div class="header-right">
            <nav>
                <div class="menu-icon" @click="toggleSidebar">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div class="menu-items">
                    <NuxtLink to="/">Home</NuxtLink>
                    <NuxtLink to="/featured">Featured projects</NuxtLink>
                    <NuxtLink to="/employees">Employees</NuxtLink>
                    <NuxtLink to="/projects">Projects</NuxtLink>
                    <NuxtLink to="/areas">Areas</NuxtLink>
                    <NuxtLink to="/about">About Us</NuxtLink>
                    <NuxtLink to="/contact">Contact Us</NuxtLink>
                </div>
            </nav>
        </div>

    </header>
</template>



<script>
export default {
    methods: {
        toggleSidebar() {
            this.$emit('toggle-sidebar');
        }
    }
};
</script>


<style>

header {
    padding: 0px 40px 0px 20px;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
        border-bottom: 2px solid #fda251; /* Add a 1px solid line at the bottom of the header */

}

.header-left {
    display: flex;
    align-items: center;
    flex-grow: 1;
    /* Added: Allow the logo to take up remaining space */
}

.header-right {
    display: flex;
    align-items: center;
}

nav {
    display: flex;
    align-items: center;
    gap: 25px;
    font-size: 1.3rem;

}

/* Example styling for the links in the nav bar */
nav a {
    color: #00BD7E;
}

nav a:hover {
    color: white;
    /* Gradient background */
    background: linear-gradient(45deg, #00BD7E, #2D3E50, #ff7a00);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.menu-icon {
    display: none;
    /* Hide the menu icon by default */
    cursor: pointer;
}

.menu-items {
    display: flex;
    gap: 15px;
    text-align: center;
}

.logo {
    height: 5rem;
    margin-right: 2rem;
    margin-top: 0.3rem;
}

/* Hamburger Menu Styles */
.menu-icon span {
    display: block;
    width: 25px;
    height: 3px;
    background-color: #00BD7E;
    margin-bottom: 5px;
    transition: background-color 0.3s ease;
}

@media screen and (max-width: 950px) {
    .menu-icon {
        display: block;
        /* Show the menu icon on smaller screens */
    }

    .menu-items {
        display: none;
        /* Hide the menu items by default */
        flex-direction: column;
    }
}
</style>