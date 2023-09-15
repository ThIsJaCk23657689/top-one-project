<script setup lang="ts">
import FloorPlanWrapper from '@/layouts/FloorPlanWrapper.vue';
import CompressIcon from '@/components/icons/CompressIcon.vue';

const mainImage = new URL('@/assets/images/floor-plans/STD_FG.svg', import.meta.url).href;
</script>

<template>
    <FloorPlanWrapper :image-url="mainImage" :is-floor="false" :has-bg="true">
        <div class="title-container absolute flex flex-col justify-center items-start">
            <div>
                <span class="text-8xl english-font text-primary-100 mr-2">3-15</span>
                <span class="text-2xl font-bold text-zinc-700">單數層數</span>
            </div>
            <div class="bg-primary-100 text-zinc-100 py-1 px-2 english-font text-xl tracking-widest">
                FLOOR PLANNING
            </div>
        </div>

        <div class="compress-container absolute flex justify-center items-center">
            <CompressIcon class="compress" />
        </div>
    </FloorPlanWrapper>
</template>

<style scoped>
.title-container {
    top: 10%;
    left: 12%;
}

.compress-container {
    width: 50px;
    height: 50px;
    right: 10%;
    bottom: 7%;
}

.compress {
    color: #717071;
}
</style>
