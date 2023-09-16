<script setup lang="ts">
import EasyImagesViewer from '@/components/EasyImagesViewer.vue';
const imgUrls = [
    new URL('@/assets/images/materials/04-01.png', import.meta.url).href,
    new URL('@/assets/images/materials/04-02.png', import.meta.url).href,
    new URL('@/assets/images/materials/04-03.png', import.meta.url).href,
];

</script>

<template>
<EasyImagesViewer :img-urls="imgUrls" />
</template>

<style scoped>
</style>