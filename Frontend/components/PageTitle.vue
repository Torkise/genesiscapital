<template>
    <!-- Page title component to ensure same title style on every page without redundant code -->
    <h1 class="page-title">
        {{ title }}
    </h1>
</template>

<script>
    export default {
        props: {
            title: String
        }
    }
</script>

<style>

    .page-title {
        font-size: xx-large;
        border-bottom: 2px solid #FF7A00;
        position: relative;

    }

</style>