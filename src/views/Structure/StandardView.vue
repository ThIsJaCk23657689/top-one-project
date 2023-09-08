<script setup lang="ts">
import FloorPlanWrapper from '@/layouts/FloorPlanWrapper.vue';

const mainImage = new URL('@/assets/images/floor-plans/STD_FG.svg', import.meta.url).href;
</script>

<template>
    <FloorPlanWrapper :image-url="mainImage" :title="'STD'" :is-floor="false" :has-bg="true">
    </FloorPlanWrapper>
</template>

<style scoped>
</style>
