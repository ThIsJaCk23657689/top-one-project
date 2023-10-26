<script setup lang="ts">
import FloorPlanWrapper from '@/layouts/FloorPlanWrapper.vue';

const mainImage = new URL('@/assets/images/floor-plans/RF.svg', import.meta.url).href;
const titleImage = new URL('@/assets/images/floor-plans/RF-title.svg', import.meta.url).href;

const spots = [
    { marker: 'Q', text: '曬被區' },
    { marker: 'R', text: '景觀平台' },
    { marker: 'S', text: '綠光花園' },
    { marker: 'T', text: '舒活廣場' },
];

</script>

<template>
<FloorPlanWrapper :image-url="mainImage" :title="'R'" :is-floor="true" :titleImage="titleImage">
    <div class="w-full h-full absolute top-0 left-0 flex flex-col items-center justify-end">
        <div class="marker-container w-2/5 grid grid-cols-4">

            <!-- <template v-for="(spot, index) in spots" :key="index">
                <div class="mt-4 flex flex-row items-center">   
                    <div class="spot-marker flex justify-center items-center english-font text-white text-center mr-2">
                        {{ spot.marker }}
                    </div>
                    <div>
                        {{ spot.text }}
                    </div>
                </div>
            </template> -->

        </div>
    </div>
</FloorPlanWrapper>
</template>

<style scoped>
.marker-container {
    padding-bottom: 18%;
}
.spot-marker {
    width: 20px;
    height: 20px;
    background-color: #002537;
}
</style>