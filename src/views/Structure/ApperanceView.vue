<script setup lang="ts">
import ImageScaleViewer from '@/components/ImageScaleViewer.vue';

const buildingImages = [
    {
        day: new URL('@/assets/images/building_day_1.jpg', import.meta.url).href,
        night: new URL('@/assets/images/building_night_1.jpg', import.meta.url).href
    },
    {
        day: new URL('@/assets/images/building_day_2.jpg', import.meta.url).href,
        night: new URL('@/assets/images/building_night_1.jpg', import.meta.url).href
    },
    {
        day: new URL('@/assets/images/building_day_3.jpg', import.meta.url).href,
        night: new URL('@/assets/images/building_night_1.jpg', import.meta.url).href
    }
];

</script>

<template>
<ImageScaleViewer :image-urls="buildingImages"></ImageScaleViewer>
</template>

<style scoped>
</style>