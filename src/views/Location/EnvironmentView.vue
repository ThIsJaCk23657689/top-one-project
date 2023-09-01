<script setup lang="ts">
import MapViewer from '@/components/MapViewer.vue';
const mainImage = new URL('@/assets/images/map.svg', import.meta.url).href;

const spotData = [

];

</script>

<template>
<MapViewer :image-url="mainImage" :spot-data="spotData"></MapViewer>
</template>

<style scoped>
</style>