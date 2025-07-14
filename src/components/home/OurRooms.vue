<script setup>
import imageOne from '@/assets/image_1.JPG'
import imageOneWebp from '@/assets/image_1.webp'
import imageTwo from '@/assets/image_2.JPG'
import imageTwoWebp from '@/assets/image_2.webp'
import imageThree from '@/assets/image_3.jpg'
import imageThreeWebp from '@/assets/image_3.webp'
import WhaLink from '@/components/utils/WhaLink.vue';
import ModalGalery from '../utils/ModalGalery.vue';
import { ref } from 'vue';

const modalRef = ref([]);
const selectedGallery = ref([]);
const rooms = [
    {
        name: 'Habitación Familiar',
        description: ['2 camas matrimoniales', 'Hasta 4 personas'],
        linkText: '¡Contáctanos!',
        link: '#',
        image: [
            {
                'jpg': imageThree,
                'webp': imageThreeWebp,
            },
        ]
    },
    {
        name: 'Habitación Doble con Baño Privado',
        description: ['1 cama matrimonial', 'Hasta 2 personas', 'Baño privado'],
        linkText: '¡Contáctanos!',
        link: '#',
        image: [
            {
                'jpg': imageTwo,
                'webp': imageTwoWebp,

            }
        ]
    },
    {
        name: 'Habitación Doble con Baño Compartido',
        description: ['1 cama matrimonial', 'Hasta 2 personas', 'Baño compartido'],
        linkText: '¡Contáctanos!',
        link: '#',
        image: [
            {
                'jpg': imageOne,
                'webp': imageOneWebp,
            },
        ]
    },
]

const openModal = (gallery) => {
    selectedGallery.value = gallery;
    modalRef.value.openModal();
}

const closeModal = () => {
    selectedGallery.value = null;
}

</script>
<template>
    <section id="habitaciones">
        <ModalGalery ref="modalRef" :images="selectedGallery" @closingModal="closeModal" />
        <div class="container">
            <h2>Descubre el espacio perfecto para tu descanso</h2>

            <article v-for="(room, index) in rooms" :key="index">
                <button type="button" class="grid-stack" @click="openModal(room.image)">

                    <picture>
                        <source :srcset="room.image[0].webp" type="image/webp">
                        <img :src="room.image[0].jpg" :alt="room.name">
                    </picture>

                    <div class="backdrop">
                        <p>Ver galería</p>
                    </div>
                </button>

                <h3>{{ room.name }}</h3>
                <div v-if="room?.description.length > 0" class="description">
                    <p v-for="(description, index) in room.description">{{ description }}</p>
                </div>

                <WhaLink :link="{ 'text': room.linkText, 'url': room.link }" />

            </article>
        </div>
    </section>
</template>
<style scoped>
section {
    background-color: #89ADC6;
    color: #2A2A2A;
}

.container {
    display: grid;
    margin: 0 auto;

    grid-template-columns: repeat(auto-fill, minmax(min(100%, 18.75rem), 1fr));
    width: min(77.5rem, 100%);
    gap: 1.25rem;
    padding: 3.75rem 1.25rem;

}

h2 {
    grid-column: 1 / -1;
    text-align: center;
    color: #2E2E2E;
    font-family: 'Montserrat', sans-serif;
}

h3,
.description p {
    font-weight: 600;
    text-align: center;
    color: #2A2A2A;
    font-family: 'Open Sans', sans-serif;
    color: #2A2A2A;
    line-height: 1.3;

    margin-bottom: 0.5rem;
    font-size: 1.25rem;
}

.description p {
    font-weight: 500;
    color: #8E7650;

    font-size: 1rem;
    margin: 0.25rem 0 0;
}

.container img {
    width: 100%;
    aspect-ratio: 320 / 213.33;
    border-radius: .5rem;
}

.grid-stack {
    display: grid;
    grid-template-areas: "stack";

    border-radius: .5rem;
}

.grid-stack>* {
    grid-area: stack;
}

.grid-stack div {
    align-self: end;
    margin: 0 0 .9375rem;
}

.grid-stack div p {
    color: white;
    font-weight: bold;
    text-shadow: 0 .0625rem .25rem rgba(0, 0, 0, 0.4);
    animation: floating 1s ease-in-out infinite;
}

picture {
    display: grid;
}

article {
    display: grid;
    place-items: center;
    grid-template-rows: auto auto 1fr auto;

    padding: 1.25rem 1rem;
    gap: .75rem;
    background: #FFFFFF;
    border-radius: 0.75rem;
    box-shadow: 0 .375rem 1.125rem rgba(0, 0, 0, 0.05);
    transition: transform 10s ease, box-shadow 0.3s ease;
}

@keyframes floating {

    0%,
    100% {
        transform: translateY(-0.625rem);
    }

    50% {
        transform: translateY(0rem);
    }
}

@media (min-width: 1200px) {
    .container {
        padding: 3.25rem 3.75rem;
    }

    .grid-stack div {
        align-self: unset;
        margin: 0;
        display: grid;
        place-items: center;
        position: relative;
        overflow: hidden;

        border-radius: .5rem;
    }

    .grid-stack div p {
        opacity: 0;
        transition: opacity 0.3s ease;
        z-index: 2;
        animation: none;
    }

    .grid-stack div::after {
        --translateY: 50%;

        content: "";
        position: absolute;
        background-color: rgba(232, 188, 136, 0.7);
        aspect-ratio: 1;
        border-radius: 100%;
        bottom: 0;
        transform: translate(var(--translateX, 0%), var(--translateY)) scale(0);
        transition: transform 0.3s ease;

        width: 6.25rem;
    }

    article {
        padding: 1.75rem 1.25rem;
        gap: 1.125rem;
    }

    article:hover,
    article:has(*:focus-visible) {
        transform: translateY(-0.25rem);
        box-shadow: 0 .625rem 1.5rem rgba(0, 0, 0, 0.08);
    }

    article:nth-of-type(3n - 2) .grid-stack div::after {
        left: 0;
        --translateX: -50%;
        --scaleVal: 8;
    }

    article:nth-of-type(3n) .grid-stack div::after {
        right: 0;
        --translateX: 50%;
        --scaleVal: 8;
    }

    .grid-stack:hover div::after,
    .grid-stack:focus-visible div::after {
        transform: translate(var(--translateX, 0%), var(--translateY)) scale(var(--scaleVal, 6));
    }

    .grid-stack:hover div p,
    .grid-stack:focus-visible div p {
        opacity: 1;
    }
}
</style>