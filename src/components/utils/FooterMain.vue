<script setup>
import { RouterLink } from 'vue-router';
import dayjs from 'dayjs';

const links = [
    {
        name: 'Inicio',
        link: '/'
    },
    {
        name: 'Nosotros',
        link: '/#nosotros'
    },
    {
        name: 'Habitaciones',
        link: '/#habitaciones'
    },
    {
        name: 'Instalaciones',
        link: '/#instalaciones'
    },
    {
        name: 'Actividades',
        link: '/#actividades'
    },
    {
        name: 'Ubicación',
        link: '/#ubicacion'
    },
]

const socials = [
    {
        link: 'https://www.instagram.com/canbalam.puerto/',
        background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
  <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
  <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M16.5 7.5l0 .01" />
</svg>`
    },
    {
        link: 'https://www.tiktok.com/@canbalam.puerto',
        background: 'linear-gradient(135deg, #25f4ee 0%, #fe2c55 100%)',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
  <path d="M21 7.917v4.034a9.948 9.948 0 0 1 -5 -1.951v4.5a6.5 6.5 0 1 1 -8 -6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917z" />
</svg>
`
    }
]

const year = dayjs().format('YYYY');
</script>
<template>
    <footer>
        <div class="container">
            <div class="upper-side">
                <a href="/" class="logo">
                    <svg fill="#000000" height="200px" width="200px" version="1.1" id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 338.199 338.199" xml:space="preserve">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <g id="XMLID_311_">
                                <g>
                                    <g>
                                        <path
                                            d="M127.088,141.809l-36.345-50.03c-10.148,8.759-18.831,19.169-25.586,30.845H60c-33.138,0-60,26.863-60,60h49.1 c0,9.446,1.098,18.634,3.161,27.451l58.864-19.127L127.088,141.809z">
                                        </path>
                                        <path
                                            d="M194.916,130.062v-0.001l36.354-50.055c-6.963-4.227-14.374-7.788-22.17-10.544V42.624c0-22.091-17.908-40-40-40 c-22.092,0-40,17.909-40,40v26.838c-7.797,2.756-15.209,6.318-22.172,10.545l36.354,50.054H194.916z">
                                        </path>
                                        <path
                                            d="M58.44,229.109c4.555,10.831,10.649,20.854,18.017,29.792c-14.349,25.382-8.402,58.125,15.238,76.673l32.629-41.589 c10.891,4.383,22.571,7.21,34.769,8.219l0.004-61.827l-41.823-30.392L58.44,229.109z">
                                        </path>
                                        <path
                                            d="M278.199,122.624h-5.157c-6.755-11.676-15.439-22.086-25.587-30.846l-36.344,50.029l15.963,49.14l58.864,19.126 c2.063-8.816,3.161-18.004,3.161-27.449h49.1C338.199,149.487,311.337,122.624,278.199,122.624z">
                                        </path>
                                        <path
                                            d="M220.926,209.984l-41.822,30.391l0.005,61.828c12.196-1.009,23.877-3.836,34.767-8.219l32.629,41.589 c23.641-18.548,29.588-51.29,15.238-76.673c7.367-8.937,13.462-18.961,18.017-29.791L220.926,209.984z">
                                        </path>
                                        <polygon
                                            points="192.764,150.06 145.436,150.06 130.807,195.096 169.1,222.922 207.393,195.096 ">
                                        </polygon>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                </a>

                <nav>
                    <ul>
                        <li v-for="(link, index) in links" :key="index">
                            <router-link :to="link.link">{{ link.name }}</router-link>
                        </li>
                    </ul>

                    <div class="socials">
                        <a v-for="(social, index) in socials" :href="social.link" :key="index"
                            :style="{ '--backgroundVal': social.background }">
                            <div v-html="social.icon"></div>
                        </a>
                    </div>
                </nav>
            </div>

            <div class="copy-side">
                <p>Copyright - {{ year }} &copy; Todos los derechos reservados</p>
            </div>
        </div>
    </footer>
</template>
<style scoped>
footer {
    background-color: #5688AB;
    color: #FFF;
    font-family: 'Open Sans', sans-serif;
}

.container {
    margin: 0 auto;
    display: grid;

    width: min(77.5rem, 100%);
    gap: 2rem;
}

.upper-side {
    display: grid;
    justify-items: center;

    gap: 2rem;
    padding: 3rem 1.25rem 1rem;
}

.logo svg {
    width: 4rem;
    height: 4rem;
}

.logo svg path,
.logo svg polygon {
    fill: #FFF;
}

nav {
    display: grid;
    justify-items: center;
    gap: 1.25rem;
}

nav ul {
    display: grid;
    justify-items: center;
    gap: .3125rem;
}

nav ul a {
    color: #FFF;
    text-decoration: none;
    font-weight: 600;
    transition: color 0.3s ease;
}

.socials {
    display: flex;
    gap: 1rem;
}

.socials a {
    border-radius: 100%;
    display: grid;

    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    border: .0625rem solid #FFF;
}

.socials a div {
    display: grid;
    place-items: center;
}

.socials :deep(svg) {
    stroke: #FFF;
}

.copy-side {
    padding: 1.25rem 1.25rem 2rem;
    border-top: .0625rem solid rgba(255, 255, 255, 0.3);
}

.copy-side p {
    text-align: center;
    font-size: 0.875rem;
    opacity: 0.9;
}

@media (min-width: 1200px) {
    .upper-side {
        grid-template-columns: auto 1fr;
        justify-items: end;

        padding: 3rem 3.75rem 1rem;
    }

    nav {
        justify-items: end;

        gap: 0.5rem;
    }

    nav ul {
        grid-auto-flow: column;
        gap: 1.25rem;
    }

    nav ul a:hover,
    nav ul a:focus-visible {
        color: #D8C499;
    }

    .socials a {
        position: relative;
        overflow: hidden;
        transition: border-color 0.3s ease;
    }

    .socials a::after {
        content: "";
        position: absolute;
        border-radius: 100%;
        transform: translateY(100%);
        background: var(--backgroundVal);
        transition: transform 0.3s ease;

        inset: -0.0625rem;
    }

    .socials a:hover,
    .socials a:focus-visible {
        border-color: transparent;
    }

    .socials a:hover::after,
    .socials a:focus-visible::after {
        transform: translateY(0%);
    }

    .socials a div {
        z-index: 2;
    }

    .logo svg path,
    .logo svg polygon {
        transition: fill 0.3s ease;
    }

    .logo svg path:hover,
    .logo:focus-visible path {
        fill: #D8C499;
    }

    .logo svg polygon:hover,
    .logo:focus-visible polygon {
        fill: #2A2A2A;
    }
}
</style>