<script setup lang="ts">
import FacilityViewer from '@/components/FacilityViewer.vue';

const facilityImages = [
    new URL('@/assets/images/facilities/Oasis_01.jpg', import.meta.url).href,
];

</script>

<template>
<FacilityViewer :images="facilityImages" :title="'風鈴秘境'" ></FacilityViewer>
</template>

<style scoped>
</style>