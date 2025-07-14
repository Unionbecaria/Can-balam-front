<script setup>
import HeaderMain from '@/components/utils/HeaderMain.vue'
import AboutUs from '@/components/home/AboutUs.vue';
import BannerMain from '@/components/home/BannerMain.vue';
import OurRooms from '@/components/home/OurRooms.vue';
import FooterMain from '@/components/utils/FooterMain.vue';
import InstallationsHome from '@/components/home/InstallationsHome.vue';
import ActivitiesSection from '@/components/home/ActivitiesSection.vue';
import Location from '@/components/home/Location.vue';
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
