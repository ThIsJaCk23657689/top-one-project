<script setup lang="ts">
import FacilityViewer from '@/components/FacilityViewer.vue';

const facilityImages = [
    new URL('@/assets/images/facilities/reading_01.jpg', import.meta.url).href,
];

</script>

<template>
<FacilityViewer :images="facilityImages" :title="'閱覽室'" ></FacilityViewer>
</template>

<style scoped>
</style>