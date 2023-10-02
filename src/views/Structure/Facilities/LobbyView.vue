<script setup lang="ts">
import FacilityViewer from '@/components/FacilityViewer.vue';

const facilityImages = [
    new URL('@/assets/images/facilities/lobby_01.jpg', import.meta.url).href,
    new URL('@/assets/images/facilities/lobby_02.jpg', import.meta.url).href,
    new URL('@/assets/images/facilities/lobby_03.jpg', import.meta.url).href,
];

</script>

<template>
    <Transition name="fade" appear>
        <FacilityViewer :images="facilityImages" :title="'迎賓大廳'" ></FacilityViewer>
    </Transition>
</template>

<style scoped>
</style>