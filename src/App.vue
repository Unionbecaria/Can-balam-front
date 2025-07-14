<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');

*,
*::before,
*::after {
  box-sizing: border-box;
    margin: 0;
}

body {
  scroll-behavior: smooth;
  min-height: 100lvh;
}

a {
  text-decoration: none;
}

button {
  cursor: pointer;
  padding: 0;
  background-color: transparent;
  border: 0;
}

ul {
  list-style: none;
  padding: 0;
}

dialog {
  margin: auto;
}
</style>
