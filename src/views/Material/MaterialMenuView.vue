<script setup lang="ts">
import RouteButton from '@/components/RouteButton.vue';

const materials = [
    { path: 'panasonickitchen' },
    { path: 'rinnai' },
    { path: '#' },
    { path: 'panasonicbathroom' },
    { path: '#' },
    { path: 'hansgrohe' },
    { path: 'lifegear' },
    { path: '#' },
    { path: 'waferlock' },
    { path: 'kronotex' },
    { path: 'daiken' },
    { path: '#' },
];

</script>

<template>
<div class="w-hull h-full relative">
    <img src="@\assets\images\temp\menu.png" alt="" class="object-cover w-full h-full">
    <div class="w-full h-full absolute inset-0 grid grid-cols-4 gap-4">
        <RouteButton :to="m" v-for="(m, index) in materials" :key="index"></RouteButton>
    </div>
</div>
</template>

<style scoped>
</style>