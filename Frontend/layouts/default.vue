<!--
    Default layout used by all the page
-->
<template>
    <div class='page'>
        <TheHeader />
        <slot />
        <TheFooter />
    </div>
</template>

<style>
.page {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #FFFFFF;
    margin: 0 auto;
    font-family: "Graphik Web", Arial, sans-serif;
    font-size: 1rem;
}

/* h1 {
    font-weight: 500;
    font-size: 4rem;
    margin: 4rem 0 2rem;
    color: #00BD7E;
    font-family: "Recoleta", serif;
} */

container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 0 2rem;
    margin-bottom: 4rem;
    align-items: center;
}

pagetitle {
    font-family: "Recoleta", serif;
    font-size: 4rem;
    font-weight: bold;
    margin: 2rem 0 2rem;
    color: #000000;
    border-bottom: 2px solid #FF7A00;
    position: relative;
    display: inline-block;
    width: 100%;

}

normal-text {
    line-height: 160%;
    font-weight: lighter;
}


/* Responsive Styles */

@media screen and (max-width: 768px) {
    .container {
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

