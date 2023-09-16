<script setup lang="ts">
import EasyImagesViewer from '@/components/EasyImagesViewer.vue';
const imgUrls = [
    new URL('@/assets/images/materials/06-01.png', import.meta.url).href,
    new URL('@/assets/images/materials/06-02.png', import.meta.url).href,
    new URL('@/assets/images/materials/06-03.png', import.meta.url).href,
];

</script>

<template>
<EasyImagesViewer :img-urls="imgUrls" />
</template>

<style scoped>
</style>