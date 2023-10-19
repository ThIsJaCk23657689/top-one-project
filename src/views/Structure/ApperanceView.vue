<script setup lang="ts">
import ImageScaleViewer from '@/components/ImageScaleViewer.vue';

const buildingImages = [
    {
        day: new URL('@/assets/images/building_day_1.jpg', import.meta.url).href,
        night: new URL('@/assets/images/building_night_1_old.jpg', import.meta.url).href,
    },
    {
        day: new URL('@/assets/images/building_day_2.jpg', import.meta.url).href,
        night: new URL('@/assets/images/building_night_1_old.jpg', import.meta.url).href,
    },
    {
        day: new URL('@/assets/images/building_day_3.jpg', import.meta.url).href,
        night: new URL('@/assets/images/building_night_1_old.jpg', import.meta.url).href,
    }
];

const lightingImages = [
    {
        night: new URL('@/assets/images/building_night_1.jpg', import.meta.url).href,
        text: '18:00 - 20:00'
    },
    {
        night: new URL('@/assets/images/building_night_2.jpg', import.meta.url).href,
        text: '20:00 - 22:00'
    },
    {
        night: new URL('@/assets/images/building_night_3.jpg', import.meta.url).href,
        text: '22:00 - 00:00'   
    }
];

</script>

<template>
<ImageScaleViewer :image-urls="buildingImages" :lighting-images="lightingImages"></ImageScaleViewer>
</template>

<style scoped>
</style>