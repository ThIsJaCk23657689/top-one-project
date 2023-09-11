<script setup lang="ts">
import FacilityViewer from '@/components/FacilityViewer.vue';

const facilityImages = [
    new URL('@/assets/images/facilities/Lounge_01.jpg', import.meta.url).href,
];

</script>

<template>
<FacilityViewer :images="facilityImages" :title="'多功能交誼廳'" ></FacilityViewer>
</template>

<style scoped>
</style>