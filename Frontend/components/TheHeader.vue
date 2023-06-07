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
    padding: 0px 20px 0px 20px;
    margin-bottom: 5px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
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
    gap: 15px;
    font-size: 1rem;

}

/* Example styling for the links in the nav bar */
nav a {
    color: #00BD7E;
    text-decoration: none;
}

nav a:hover {
    color: #000000;
    text-decoration: underline;
}

.menu-icon {
    display: none;
    /* Hide the menu icon by default */
    cursor: pointer;
}

.menu-items {
    display: flex;
    gap: 15px;
}

.logo {
    max-width: 100px;
    margin-right: 2rem;
}

/* Hamburger Menu Styles */
.menu-icon span {
    display: block;
    width: 25px;
    height: 3px;
    background-color: #000;
    margin-bottom: 5px;
    transition: background-color 0.3s ease;
}

@media screen and (max-width: 768px) {
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