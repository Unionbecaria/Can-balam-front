<script setup>
import paellaJpg from '@/assets/paella.jpg'
import paellaWebp from '@/assets/paella.webp'
import delfinesJpg from '@/assets/delfines.jpg'
import delfinesWebp from '@/assets/delfines.webp'
import yateJpg from '@/assets/yate.jpg'
import yateWebp from '@/assets/yate.webp'
import surfImageJpg from '@/assets/surfImage.jpg';
import surfImageWebp from '@/assets/surfImage.webp';
const content = [
    {
        title: 'Festival de paella',
        description: 'Nuestro evento de paellas es la joya de la casa. Fusionamos sabores de México y España en combinaciones que no vas a probar en ningún otro lugar. Cada edición es distinta, pero siempre hay lo mismo: buena comida, buena vibra y gente compartiendo mesa como si se conocieran de toda la vida. No es solo una comida, es una experiencia. Y sí, es nuestro best seller por una razón',
        image: {
            png: paellaJpg,
            webp: paellaWebp,
        }
    },
    {
        title: 'Avistamiento de Delfines',
        description: 'Una de esas cosas que no se olvidan: salir al mar al amanecer y ver delfines nadando libres cerca de la costa. Es un plan mágico, tranquilo y perfecto para conectar con la naturaleza.',
        image: {
            png: delfinesJpg,
            webp: delfinesWebp,
        }
    },
    {
        title: 'Salida en yate por Huatulco',
        description: 'Nos aliamos con nuestros amigos de HUX Adventures para llevarte a navegar por las bahías de Huatulco en yate. Playas escondidas, mar turquesa, buena música y el plan perfecto para pasar el día entre amigos. Una escapada que siempre termina con ganas de repetir.',
        image: {
            png: yateJpg,
            webp: yateWebp,
        }
    },
    {
        title: 'Clases de Surf',
        description: 'Puerto Escondido es el paraíso del surf, y no importa si es tu primera vez o ya sabes agarrar olas: aquí se viene a disfrutar. Tenemos clases con instructores locales que te llevan al spot ideal según tu nivel. Sol, mar y tabla: el combo perfecto.',
        image: {
            png: surfImageJpg,
            webp: surfImageWebp,
        }
    },
]
</script>
<template>
    <section id="actividades">
        <div class="container">
            <h2>Disfruta de nuestras <span>actividades</span> extra</h2>

            <div class="activity" :class="{ reverse: index % 2 !== 0 }" v-for="(activitie, index) in content">
                <picture v-if="activitie.image">
                    <source :srcset="activitie.image.webp" type="image/webp" />
                    <img :src="activitie.image.png" :alt="activitie.title" />
                </picture>

                <div class="text" :class="{ 'alone': !activitie.image }">
                    <h3>{{ activitie.title }}</h3>
                    <p>{{ activitie.description }}</p>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
section {
    background-color: #EFE9E2;
    font-family: 'Open Sans', sans-serif;
    color: #2E2E2E;
}

img {
    width: 100%;
    object-fit: cover;
    height: 31.25rem;
    border-radius: 0.5rem;
}

.container {
    margin: 0 auto;
    display: grid;
    gap: 2.5rem;
    width: min(100%, 77.5rem);
    padding: 3.75rem 0;
    text-align: center;
}

h2 {
    color: #3C3C3C;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 1.3;
    padding-inline: 1.25rem;
    margin-bottom: 1.25rem;
}

h2 span {
    font-weight: 700;
    color: #5E463A;
}

.activity {
    display: grid;
    gap: 2rem;
    text-align: center;
}

.text {
    display: grid;
    gap: 1rem;
}

h3 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    color: #5E463A;
    font-size: 1.25rem;
    padding-inline: 1.25rem;
}

p {
    color: #2E2E2E;
    font-size: 1rem;
    line-height: 1.6;
    padding-inline: 1.25rem;
    text-wrap: pretty;
}

@media (min-width: 1200px) {
    .container {
        padding: 3.75rem 3.75rem;
        gap: 3.75rem;
        text-align: start;
    }

    .activity {
        grid-template-columns: 1fr 1fr;
        align-items: center;
        gap: 3.125rem;
        text-align: left;
    }

    .activity.reverse {
        direction: rtl;
    }

    .activity.reverse .text {
        direction: ltr;
        text-align: right;
    }

    img {
        height: 37.5rem;
    }

    h2 {
        padding: 0;
        text-align: center;
    }

    h3 {
        font-size: 1.5rem;
        padding-inline: 0;
    }

    p {
        font-size: 1rem;
        padding-inline: 0;
    }

    .alone {
        grid-column: 1 / -1;
    }

    .alone p {
        text-align: center;
    }

    .alone h3 {
        text-align: center;
    }
}
</style>