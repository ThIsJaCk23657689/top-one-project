<script setup lang="ts">
import FacilityViewer from '@/components/FacilityViewer.vue';

const facilityImages = [
    new URL('@/assets/images/facilities/lounge_01.jpg', import.meta.url).href,
    new URL('@/assets/images/facilities/lounge_02.jpg', import.meta.url).href,
];

</script>

<template>
    <Transition name="fade" appear>
        <FacilityViewer :images="facilityImages" :title="'多功能交誼廳'" ></FacilityViewer>
    </Transition>
</template>

<style scoped>
</style>