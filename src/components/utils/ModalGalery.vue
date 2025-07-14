<script setup>
import { ref, onBeforeUnmount, nextTick } from 'vue';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

const props = defineProps({
    images: {
        type: Array,
        default: () => []
    }
});

const emit = defineEmits(['closingModal']);

let swiperInstance = null;
const swiperContainer = ref(null);
const modal = ref(null);

const openModal = async () => {
    modal.value.showModal();
    await nextTick();

    swiperInstance = new Swiper(swiperContainer.value, {
        loop: props.images.length > 1,
        spaceBetween: 10,
        initialSlide: 0,
    });

    requestAnimationFrame(() => {
        window.addEventListener('click', clickOutside);
        window.addEventListener('keydown', hanleEsc);
    })

};

const reseting = () => {
    window.removeEventListener('click', clickOutside);
    window.removeEventListener('keydown', hanleEsc);

    if (swiperInstance) {
        swiperInstance.destroy(true, true);
        swiperInstance = null;
    }
};

const closeModal = () => {
    modal.value.close();
    emit('closingModal');
    reseting();
};

onBeforeUnmount(() => {
    reseting();
});

const moveSlide = (isNext) => {
    if (swiperInstance) {
        isNext ? swiperInstance.slideNext() : swiperInstance.slidePrev();
    }
};

const clickOutside = (e) => {
    const rect = modal.value.getBoundingClientRect();
    const isInDialog =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

    if (!isInDialog) {
        closeModal();
    }
};

const hanleEsc = (e) => {
    if (e.code === 'Escape') {
        closeModal();
    }
};

defineExpose({
    openModal,
});
</script>
<template>
    <dialog ref="modal">
        <div class="swiper" ref="swiperContainer">
            <div class="swiper-wrapper">
                <picture class="swiper-slide" v-for="(image, index) in images" :key="index">
                    <source :srcset="image.webp" type="image/webp">
                    <img :src="image.jpg" :alt="`slide__${index}`">
                </picture>
            </div>

            <div class="controls-wrapper" v-if="images?.length > 1">
                <button type="button" @click="moveSlide(false)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
                        stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                        <path
                            d="M20 15h-8v3.586a1 1 0 0 1 -1.707 .707l-6.586 -6.586a1 1 0 0 1 0 -1.414l6.586 -6.586a1 1 0 0 1 1.707 .707v3.586h8a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1z" />
                    </svg>

                </button>
                <button type="button" @click="moveSlide(true)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
                        stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                        <path
                            d="M4 9h8v-3.586a1 1 0 0 1 1.707 -.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1 -1.707 -.707v-3.586h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1z" />
                    </svg>

                </button>
            </div>
        </div>
    </dialog>
</template>
<style scoped>
dialog {
    width: min(100%, 40rem);
    padding: 1.25rem;
    border: 0;
}

::backdrop {
    background-color: rgba(0, 0, 0, 0.6);
}

img {
    width: min(100%, 37.5rem);
    aspect-ratio: 1;
    object-fit: cover;
}

.controls-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>