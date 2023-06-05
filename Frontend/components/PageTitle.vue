<template>
    <h1 class="page-title">
        {{ title }}
    </h1>
</template>

<script>
    export default {
        props: [
            'title'
        ]
    }
</script>

<style>

    .page-title {
        font-size: xx-large;
        border-bottom: 2px solid #FF7A00;
        position: relative;
    }

</style>