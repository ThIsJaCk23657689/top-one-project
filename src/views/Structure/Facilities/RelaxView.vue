<script setup lang="ts">
import FacilityViewer from '@/components/FacilityViewer.vue';

const facilityImages = [
    new URL('@/assets/images/facilities/Relax_01.jpg', import.meta.url).href,
];

</script>

<template>
<FacilityViewer :images="facilityImages" :title="'大樹休憩平台'" ></FacilityViewer>
</template>

<style scoped>
</style>