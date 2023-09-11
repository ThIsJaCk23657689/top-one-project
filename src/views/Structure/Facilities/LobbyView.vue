<script setup lang="ts">
import FacilityViewer from '@/components/FacilityViewer.vue';

const facilityImages = [
    new URL('@/assets/images/facilities/lobby_01.jpg', import.meta.url).href,
    new URL('@/assets/images/facilities/lobby_02.jpg', import.meta.url).href,
];

</script>

<template>
<FacilityViewer :images="facilityImages" :title="'迎賓大廳'" ></FacilityViewer>
</template>

<style scoped>
</style>