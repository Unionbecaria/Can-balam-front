<script setup>
import WhaLink from '@/components/utils/WhaLink.vue';
</script>
<template>
    <main id="nosotros">
        <div class="container">
            <div class="content">
                <h1>Somos <span>Can Balam</span></h1>
                <h2>Un hotel para quienes no viajan para escapar, sino para encontrarse.</h2>

                <p>
                    Somos <span>tres catalanes, nómadas y emprendedores.</span> Creamos <span>Can Balam</span> como un
                    hogar lejos de casa, en medio de la magia de Puerto Escondido. Un lugar que no es un hotel, ni un
                    hostal, ni un retiro. Es una <span>experiencia única</span>.
                </p>

                <h2>Aquí no vienes a descansar.</h2>
                <p>
                    Vienes a <span>despertar y a desarrollarte como persona</span>
                </p>

                <p>
                    Vienes a crear vínculos con desconocidos, a alejarte de los placeres instantáneos, a hacer comunidad
                    con gente de todo el mundo, a hacer networking, a probar nuestra comida catalana fusionada con la
                    Oaxaqueña y a hacer deporte.
                </p>

                <WhaLink :link="{ 'text': '¡Contáctanos!', 'url': '#' }" class="link-inside" />
            </div>
            <picture>
                <source srcset="@/assets/about_canbalam.webp" type="image/webp">
                <img src="@/assets/about_canbalam.jpg" alt="Canbalam">
            </picture>
        </div>
    </main>
</template>
<style scoped>
main {
    background-color: #F5EDE6;
    font-family: 'Open Sans', sans-serif;
    color: #2A2A2A;

    margin-top: min(30.625rem, 70lvh);

}

.container {
    display: grid;
    align-items: center;
    margin: 0 auto;

    gap: 2.5rem;
    width: min(77.5rem, 100%);
    padding: 3.75rem 1.25rem;
}

h1 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    text-wrap: balance;
    color: #5688AB;

    font-size: 2.5rem;
    margin-bottom: 1.625rem;
}

h2 {
    font-weight: 400;
    color: #5688AB;

    font-size: 1.5rem;
    line-height: 1.4;
    margin-bottom: 1.5625rem;
}

span {
    font-weight: 700;
    color: #5688AB;
}

p {
    line-height: 1.5;
    text-wrap: pretty;
    margin-bottom: .625rem;
}

picture {
    display: grid;
}

img {
    width: min(100%, 46.875rem);
}

.link-inside {
    margin: 2.5rem auto 0;
}

@media (min-width: 1200px) {
    main {
        margin-top: 37.5rem;
    }

    .container {
        grid-template-columns: repeat(2, 1fr);

        gap: 3.75rem;
        padding: 3.25rem 3.75rem;
    }

    p {
        text-align: justify;
    }

    img {
        width: min(100%, 46.875rem);
        aspect-ratio: 530 / 600;
        object-fit: cover;
    }

    .link-inside {
        margin: 1.875rem auto 0;
    }
}
</style>