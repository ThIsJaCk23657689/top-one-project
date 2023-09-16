<script setup lang="ts">
import EasyImagesViewer from '@/components/EasyImagesViewer.vue';
const imgUrls = [
    new URL('@/assets/images/materials/01-01.png', import.meta.url).href,
    new URL('@/assets/images/materials/01-02.png', import.meta.url).href,
    new URL('@/assets/images/materials/01-03.png', import.meta.url).href,
    new URL('@/assets/images/materials/01-04.png', import.meta.url).href,
    new URL('@/assets/images/materials/01-05.png', import.meta.url).href,
];

</script>

<template>
<EasyImagesViewer :img-urls="imgUrls" />
</template>

<style scoped>
</style>