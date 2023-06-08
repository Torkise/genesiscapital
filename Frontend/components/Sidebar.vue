<template>
    <div class="sidebar" :class="{ open: isOpen }">
        <ul>
            <li>
                <NuxtLink to="/" @click="handleLinkClick">Home</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/featured" @click="handleLinkClick">Featured projects</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/employees" @click="handleLinkClick">Employees</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/projects" @click="handleLinkClick">Projects</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/areas" @click="handleLinkClick">Areas</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/about" @click="handleLinkClick">About Us</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/contact" @click="handleLinkClick">Contact Us</NuxtLink>
            </li>
        </ul>
    </div>
</template>
  
<script>
export default {
    props: {
        isOpen: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        handleLinkClick() {
            this.$emit('close-sidebar'); // Emit event to notify the parent component
        }
    }
};
</script>
  
<style>
/* Sidebar Styles */
.sidebar {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 240px;
    background-color: #f5f5f5;
    transition: transform 0.3s ease;
    transform: translateX(240px);
    z-index: 999;
}

.sidebar.open {
    transform: translateX(0);
}

.sidebar ul {
    padding: 0;
    margin: 0;
    list-style: none;
}

.sidebar ul li {
    padding: 10px;
}

.sidebar ul li a {
    color: #000;
}
</style>
  