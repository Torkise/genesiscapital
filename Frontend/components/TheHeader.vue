<!--
    Header of the page
-->
<template>
    <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg"  />
        <nav>
            <NuxtLink to = "/">HOME</NuxtLink>
            <NuxtLink to = "/dogs">DOGS</NuxtLink>
            <NuxtLink to = "/locations">LOCATIONS</NuxtLink>
            <NuxtLink to = "/projects">PROJECTS</NuxtLink>
            <NuxtLink to = "/employees">EMPLOYEES</NuxtLink>
            <NuxtLink to = "/areas">AREAS</NuxtLink>
            <NuxtLink to = "/about">ABOUT US</NuxtLink>
            <NuxtLink to = "/contact">CONTACT US</NuxtLink>
        </nav>
    </header>
</template>

<style>

    header
    {
        padding: 0px 20px 0px 20px;
        margin-bottom: 5px;
        background-color: aliceblue;
        
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    nav {
        display: flex;
        gap: 30px;
        font-size: 17pt;
        font-weight: bold;
    }
</style>