<script setup></script>
<template>
    <section id="ubicacion">
        <div class="container">
            <h2>Nos encontramos en...</h2>

            <div class="content">
                <a href="https://maps.app.goo.gl/BgbPu6BYcKWYrfqh6">Playa Zicatela, Puerto Escondido, Oaxaca</a>
                <p>A <span>12 minutos</span> andando hasta la <span>Playa Zicatela</span></p>
                <p>A <span>7 minutos</span> en moto de <span>La Punta de Zicatela</span></p>
                <p>A <span>14 minutos</span> en moto del <span>Aeropuerto</span></p>
            </div>

            <iframe style="border:0" loading="lazy" allowfullscreen
                referrerpolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=15.8564157,-97.0510406&hl=es&z=15&output=embed">
            </iframe>
        </div>
    </section>
</template>
<style scoped>
section {
    background-color: #89ADC6;
    font-family: 'Open Sans', sans-serif;
    color: #fff;
}

.container {
    display: grid;
    justify-items: center;
    margin: 0 auto;
    width: min(100%, 77.5rem);
    padding: 3.75rem 1.25rem;
    text-align: center;
    gap: 2rem;
}

h2 {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.8rem;
    font-weight: 600;
    color: #ffffff;
    line-height: 1.3;
}

.content {
    display: grid;
    gap: 0.75rem;
    font-size: 1rem;
    line-height: 1.6;
    color: #F5F5F5;
}

.content a {
    color: #FFF;
    font-weight: 600;
    text-decoration: underline;
}

.content span {
    font-weight: 600;
    color: #FFEED8;
}

iframe {
    width: 100%;
    height: 18.75rem;
    border-radius: 0.5rem;
    border: 0;
    box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.1);
}

@media (min-width: 1200px) {
    .container {
        grid-template-columns: 1fr 1fr;
        align-items: center;
        gap: 3.75rem;
        text-align: start;
        padding: 3.75rem;
    }

    h2 {
        grid-column: 1 / -1;
        text-align: center;
    }

    .content {
        font-size: 1.0625rem;
    }
}
</style>