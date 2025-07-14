<script setup>
const props = defineProps({
    link: {
        type: Object,
        required: true
    }
})
</script>
<template>
    <a :href="props.link.url">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#000000"
            stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
            <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
        </svg>

        <p>{{ props.link.text }}</p>
    </a>
</template>
<style scoped>
a {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #D8C499;
    color: #2A2A2A;
    font-weight: 600;
    font-family: 'Open Sans', sans-serif;

    width: min(11.875rem, 100%);
    border-radius: 3.75rem;
    padding: .3125rem;
    gap: .75rem;
    border: 1px solid #2A2A2A;
}

a svg {
    stroke: #2A2A2A;
}

@media (min-width: 1200px) {
    a {
        background-color: transparent;
        width: min(15.625rem, 100%);
        background-image: linear-gradient(to right,
                #5688AB 0%,
                #5688AB 50%,
                #D8C499 50%,
                #D8C499 100%);
        background-size: 200%;
        background-position: 100%;
        transition: background-position 0.3s ease, border-color 0.3s ease, color 0.3s ease;
    }

    a:hover,
    a:focus-visible {
        background-position: 0%;
        color: #fff;
        border-color: #5688AB;
    }

    a svg {
        transition: stroke 0.3s ease;
    }

    a:hover svg,
    a:focus-visible svg {
        stroke: #fff;
    }
}
</style>