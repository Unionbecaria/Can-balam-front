<script setup>
import installationsOne from '@/assets/instalations.JPG';
import installationsOneWeb from '@/assets/instalations.webp';
import roofJpg from '@/assets/roof.jpg'
import roofWebp from '@/assets/roof.webp'
const elements = [
    {
        title: 'Hall',
        description: 'Nuestro patio es ese lugar donde todo pasa sin que te des cuenta. Un café en la mañana, una charla con alguien que acabas de conocer.  Aquí se cruzan historias, risas y a veces hasta planes para irse juntos a la playa. Es el corazón de Can Balam.',
        image: {
            jpg: installationsOne,
            webp: installationsOneWeb,
        }
    },
    {
        title: 'Cocina',
        description: ' Como amantes de la comida, queríamos más que una cocina: queríamos un lugar para compartir. Así nació este espacio, hecho por nosotros, donde puedes preparar lo que se te antoje, sentarte a comer con gente que no conocías hace una hora y acabar compartiendo risas, recetas o hasta planes de viaje. Aquí, cocinar es solo la excusa.',
        image: {
            jpg: installationsOne,
            webp: installationsOneWeb,
        }
    },
    {
        title: 'Roof',
        description: ' Nuestro roof es otra historia. Un espacio abierto con vista al mar donde siempre está pasando algo: clases de yoga al amanecer, cenas bajo las estrellas, proyecciones, música o entrenamientos. También tiene su lado tranquilo: una zona chill para leer, tomar algo o simplemente ver cómo cae el sol. Es uno de esos lugares que se vuelven tu favorito sin darte cuenta.',
        image: {
            jpg: roofJpg,
            webp: roofWebp,
        }
    },
]
</script>

<template>
    <section id="instalaciones">
        <div class="container">
            <h2>Nuestras áreas comunes</h2>

            <div v-for="inst in elements" class="elements-wrapper">
                <picture>
                    <source :srcset="inst.image.webp" type="image/webp">
                    <img :src="inst.image.jpg" :alt="inst.title">
                </picture>

                <div>
                    <h3>{{ inst.title }}</h3>
                    <p>{{ inst.description }}</p>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
section {
    background-color: #FAF8F4;
    font-family: 'Open Sans', sans-serif;
    color: #2E2E2E;
}

.container {
    display: grid;
    margin: 0 auto;

    gap: 2.5rem;
    width: min(100%, 77.5rem);
    padding: 3.75rem 1.25rem;
}

h2 {
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    line-height: 1.3;
    color: #2E2E2E;

    font-size: 1.8rem;
    margin-bottom: 0.5rem;
}

picture {
    display: grid;
}

img {
    width: 100%;
    object-fit: cover;

    aspect-ratio: 374.4 / 260;
    border-radius: 0.5rem;
}

.container .elements-wrapper {
    display: grid;
    text-align: center;
    padding-top: 0.75rem;
    gap: 2.5rem;
}

h3 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    color: #465E6D;

    font-size: 1.25rem;
    margin-bottom: 0.5rem;
}

p {
    line-height: 1.6;
    text-wrap: pretty;

    font-size: 1rem;
    color: #2E2E2E;
}

@media (min-width: 1200px) {
    .container {
        padding: 3.75rem;
    }

    .container .elements-wrapper {
        grid-template-columns: auto 1fr;
        align-items: center;
        text-align: start;
    }

    .container>div:nth-of-type(2n) {
        grid-template-columns: 1fr auto;
        grid-auto-flow: dense;
        text-align: right;
    }

    .container>div:nth-of-type(2n) picture {
        grid-column: 2 / 3;
    }

    img {
        width: 630px;
        aspect-ratio: 630 / 420;
        object-fit: cover;
        object-position: bottom;
    }
}
</style>