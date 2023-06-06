<template>
    <header>
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" />
        <nav>
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/featured">Featured projects</NuxtLink>
            <NuxtLink to="/employees">Employyes</NuxtLink>
            <NuxtLink to="/projects">Projects</NuxtLink>
            <NuxtLink to="/areas">Areas</NuxtLink>
            <NuxtLink to="/about">About Us</NuxtLink>
            <NuxtLink to="/contact">Contact Us</NuxtLink>
        </nav>
    </header>
</template>

<style>
header {
    padding: 0px 20px 0px 20px;
    margin-bottom: 5px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
}



nav {
    display: flex;
    gap: 15px;
    font-size: 10pt;
    font-weight: bold;
}

/* Example styling for the links in the nav bar */
nav a {
    color: navy;
    text-decoration: none;
}

nav a:hover {
    color: darkblue;
    text-decoration: underline;
}

.logo {
    max-width: 100px;
    margin-right: 2rem;
}
</style>