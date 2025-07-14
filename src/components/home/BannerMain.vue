<script setup>
import WhaLink from '@/components/utils/WhaLink.vue';
</script>
<template>
    <section>
        <div class="container">
            <h2>Can Balam</h2>
            <p>No vengas a descansar. Ven a <span>encontrarte</span></p>
            <WhaLink :link="{ 'text': '¡Contáctanos!', 'url': '#' }" />
        </div>
    </section>
</template>
<style scoped>
section {
    background-image: url('@/assets/MainBanner.JPG');
    background-image: url('@/assets/MainBanner.webp');
    background-size: cover;
    background-position: center;
    color: #F5EDE6;


    height: min(30.625rem, 70lvh);
    position: fixed;
    inset: 0 0 auto 0;
}

section::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.2));
    z-index: 1;
}

.container {
    display: grid;
    grid-auto-rows: max-content;
    align-content: end;
    justify-items: center;
    height: 100%;
    position: relative;
    z-index: 2;

    padding: 2.5rem 1.25rem;
}

h2 {
    font-family: 'Montserrat', sans-serif;
    font-size: 2.8rem;
    margin-bottom: .625rem;
}

p {
    font-family: "Open Sans";
    font-size: 1.2rem;
    line-height: 1.4;
}

h2+p {
    margin-bottom: 1.25rem;
}

@media (min-width: 1200px) {
    section {
        height: 37.5rem;
    }

    .container {
        justify-items: start;
        height: 100%;
        margin: 0 auto;

        width: min(77.5rem, 100%);
        padding: 5.625rem 3.75rem;
    }
}
</style>