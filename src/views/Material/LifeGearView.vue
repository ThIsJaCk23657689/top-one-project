<script setup lang="ts">
import EasyImagesViewer from '@/components/EasyImagesViewer.vue';
const imgUrls = [
    new URL('@/assets/images/materials/07-01.png', import.meta.url).href,
    new URL('@/assets/images/materials/07-02.png', import.meta.url).href,
    new URL('@/assets/images/materials/07-03.png', import.meta.url).href,
    new URL('@/assets/images/materials/07-04.png', import.meta.url).href,
];

</script>

<template>
<EasyImagesViewer :img-urls="imgUrls" />
</template>

<style scoped>
</style>