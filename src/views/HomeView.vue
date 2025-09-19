<script setup>
import { onMounted } from 'vue'
import { useSEO } from '@/composables/useSEO.js'
import HeaderMain from '@/components/utils/HeaderMain.vue'
import AboutUs from '@/components/home/AboutUs.vue';
import BannerMain from '@/components/home/BannerMain.vue';
import OurRooms from '@/components/home/OurRooms.vue';
import FooterMain from '@/components/utils/FooterMain.vue';
import InstallationsHome from '@/components/home/InstallationsHome.vue';
import ActivitiesSection from '@/components/home/ActivitiesSection.vue';
import Location from '@/components/home/Location.vue';

const { setSEO } = useSEO()

onMounted(() => {
  setSEO({
    title: 'Can Balam Hotel Puerto Escondido | Alojamiento Único en Oaxaca',
    description: 'Can Balam Hotel en Puerto Escondido, Oaxaca - Hotel boutique con actividades únicas: surf en Playa Zicatela, liberación de tortugas, bioluminiscencia, avistamiento de delfines, paellas catalanas y eco tours. Habitaciones cómodas, cocina compartida y roof top con vista al mar. Experiencia auténtica para viajeros aventureros en la costa mexicana.',
    keywords: 'hotel puerto escondido, can balam hotel, alojamiento puerto escondido oaxaca, hotel boutique puerto escondido, surf puerto escondido, playa zicatela hotel, liberación tortugas puerto escondido, bioluminiscencia oaxaca, avistamiento delfines puerto escondido, paellas puerto escondido, eco tour mazunte zipolite, cabalgata playa puerto escondido, yate huatulco, hotel con cocina compartida, roof top puerto escondido, actividades puerto escondido, turismo aventura oaxaca, hotel experiencias únicas, alojamiento catalanes puerto escondido, hotel networking puerto escondido, comunidad viajeros oaxaca, hotel eventos puerto escondido, clases surf puerto escondido, tours bioluminiscencia, hotel con actividades incluidas, punta cometa tours, ventanilla tours, hotel sustentable puerto escondido, experiencias auténticas oaxaca, hotel jóvenes puerto escondido, backpackers puerto escondido, hotel wifi gratis puerto escondido, habitaciones familiares puerto escondido, habitaciones baño privado puerto escondido, habitaciones baño compartido puerto escondido, mejor hotel puerto escondido, hotel recomendado puerto escondido, where to stay puerto escondido, puerto escondido accommodation, surfing hotel mexico, turtle release tours, bioluminescence tours mexico, dolphin watching puerto escondido, hostel puerto escondido, budget hotel puerto escondido, puerto escondido beach hotel, hotel playa zicatela, oaxaca coast hotel, mexican pacific coast hotel, eco friendly hotel oaxaca, sustainable tourism puerto escondido, adventure hotel mexico, cultural experiences oaxaca, hotel with activities puerto escondido, social hotel puerto escondido, community based tourism, authentic mexico experience, boutique hotel oaxaca coast, unique accommodation mexico, traveler community hotel, digital nomad friendly puerto escondido, coworking space hotel puerto escondido',
    ogTitle: 'Can Balam Hotel Puerto Escondido | Alojamiento Único en Oaxaca',
    ogDescription: 'Hotel boutique Can Balam en Puerto Escondido, Oaxaca. Actividades únicas: surf en Playa Zicatela, liberación de tortugas, bioluminiscencia, avistamiento de delfines, paellas catalanas y eco tours. Habitaciones cómodas y experiencias auténticas.',
    ogImage: 'https://canbalam.com.mx/MainBanner.webp',
    ogUrl: 'https://canbalam.com.mx/',
    twitterTitle: 'Can Balam Hotel Puerto Escondido | Alojamiento Único en Oaxaca',
    twitterDescription: 'Hotel boutique Can Balam en Puerto Escondido, Oaxaca. Actividades únicas: surf en Playa Zicatela, liberación de tortugas, bioluminiscencia, avistamiento de delfines, paellas catalanas y eco tours. Habitaciones cómodas y experiencias auténticas.',
    twitterImage: 'https://canbalam.com.mx/MainBanner.webp',
    canonical: 'https://canbalam.com.mx/'
  })
})
const components = [
  {
    component: HeaderMain,
  },
  {
    component: BannerMain,
  },
  {
    component: AboutUs,
    front: true,
  },
  {
    component: OurRooms,
    front: true,
  },
  {
    component: InstallationsHome,
    front: true,
  },
  {
    component: ActivitiesSection,
    front: true,
  },
  {
    component: Location,
    front: true,
  },
  {
    component: FooterMain,
    front: true,
  },
]
</script>

<template>
  <component v-for="(comp, index) in components" :is="comp.component" :class="{ 'front': comp.front }"></component>
</template>

<style scoped>
.front {
  position: relative;
  z-index: 2;
}
</style>
