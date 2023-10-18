<script setup lang="ts">
import ImageScaleViewer from '@/components/ImageScaleViewer.vue';

const buildingImages = [
    {
        day: new URL('@/assets/images/building_day_1.jpg', import.meta.url).href,
        night: new URL('@/assets/images/building_night_1.png', import.meta.url).href,
        text: '18:00 - 20:00'
    },
    {
        day: new URL('@/assets/images/building_day_2.jpg', import.meta.url).href,
        night: new URL('@/assets/images/building_night_2.png', import.meta.url).href,
        text: '20:00 - 22:00'
    },
    {
        day: new URL('@/assets/images/building_day_3.jpg', import.meta.url).href,
        night: new URL('@/assets/images/building_night_3.png', import.meta.url).href,
        text: '22:00 - 00:00'
    }
];

</script>

<template>
<ImageScaleViewer :image-urls="buildingImages"></ImageScaleViewer>
</template>

<style scoped>
</style>