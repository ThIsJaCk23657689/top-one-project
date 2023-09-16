<script setup lang="ts">
import { ref } from 'vue';
const props = defineProps<{
    imgUrls: Array<string>
}>()

const currentIndex = ref(0);

const nextPicture = () => {
    currentIndex.value = (currentIndex.value + 1) % props.imgUrls.length;
};

</script>

<template>
<div class="w-hull h-full relative" @click="nextPicture">
    <img :src="imgUrls[currentIndex]" alt="" class="object-cover w-full h-full">
</div>
</template>

<style scoped>
</style>