<template>
    <header>
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" />
        <nav>
            <NuxtLink to="/">HOME</NuxtLink>
            <NuxtLink to="/featured">FEATURED PROJECTS</NuxtLink>
            <NuxtLink to="/employees">EMPLOYEES</NuxtLink>
            <NuxtLink to="/projects">PROJECTS</NuxtLink>
            <NuxtLink to="/areas">AREAS</NuxtLink>
            <NuxtLink to="/about">ABOUT US</NuxtLink>
            <NuxtLink to="/contact">CONTACT US</NuxtLink>
        </nav>
    </header>
</template>

<style>
header {
    padding: 0px 20px 0px 20px;
    margin-bottom: 5px;
    background-color: #FFFFFF;
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