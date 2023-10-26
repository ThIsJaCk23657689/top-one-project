<script setup lang="ts">
import FloorPlanWrapper from '@/layouts/FloorPlanWrapper.vue';
import RouteButton from '@/components/RouteButton.vue';

const mainImage = new URL('@/assets/images/floor-plans/1F.svg', import.meta.url).href;
const titleImage = new URL('@/assets/images/floor-plans/1F-title.svg', import.meta.url).href;

const spots = [
    { marker: 'A', top: 61.5, left: 62.3, text: '林蔭大道', url: '/structure/facilities/frontdoor' },
    { marker: 'B', top: 45.7, left: 62.2, text: '迎賓大廳', url: '/structure/facilities/lobby' },
    { marker: 'C', top: 41, left: 69.4, text: '資源回收室', url: '#' },
    { marker: 'D', top: 37.58, left: 56.5, text: '宅配室', url: '#' },
    { marker: 'E', top: 30.89, left: 53.25, text: '信箱區', url: '/structure/facilities/mailbox' },
    { marker: 'F', top: 19.4, left: 54.9, text: '閱覽室', url: '/structure/facilities/reading' },
    { marker: 'G', top: 22.4, left: 65.36, text: '家教室', url: '#' },
    { marker: 'H', top: 16.7, left: 65.3, text: '琴韻室', url: '#' },
    { marker: 'I', top: 31.6, left: 45.4, text: '梯廳', url: '/structure/facilities/stair' },
    { marker: 'J', top: 21, left: 46.5, text: '多功能交誼廳', url: '/structure/facilities/lounge' },
    { marker: 'K', top: 38, left: 28.5, text: '活力健身房', url: '/structure/facilities/gym' },
    { marker: 'L', top: 27.8, left: 28.45, text: '瑜珈教室', url: '/structure/facilities/yoga' },
    { marker: 'M', top: 18.5, left: 30, text: '風鈴秘境', url: '/structure/facilities/oasis' },
    { marker: 'N', top: 9.3, left: 61.6, text: '遊憩綠廊', url: '#' },
    { marker: 'O', top: 13.6, left: 74.56, text: '大樹休憩平台', url: '/structure/facilities/relax' },
    { marker: 'P', top: 36, left: 75.6, text: '社區車道', url: '#' },
];

</script>

<template>
<FloorPlanWrapper :image-url="mainImage" :title="'1'" :is-floor="true" :titleImage="titleImage">
    <template v-for="(spot, index) in spots" :key="index">
        <RouteButton :to="spot.url" class="absolute flex flex-row items-center z-40" :style="{ top: `${spot.top}%`, left: `${spot.left}%` }">   
            <div v-if="spot.url != '#'" class="spot-marker animate flex justify-center items-center english-font text-white text-center">
                {{ spot.marker }}
            </div>
            <div v-else class="spot-marker flex justify-center items-center english-font text-white text-center">
                {{ spot.marker }}
            </div>
        </RouteButton>
    </template>

    <!-- <div class="w-full h-full absolute top-0 left-0 flex flex-col items-center justify-end">
        <div class="marker-container w-3/5 grid grid-cols-6">
            <template v-for="(spot, index) in spots" :key="index">
                <RouteButton :to="spot.url" class="mt-4 flex flex-row items-center">   
                    <div v-if="spot.url != '#'" class="spot-marker animate flex justify-center items-center english-font text-white text-center mr-2">
                        {{ spot.marker }}
                    </div>
                    <div v-else class="spot-marker flex justify-center items-center english-font text-white text-center mr-2">
                        {{ spot.marker }}
                    </div>
                    <div>
                        {{ spot.text }}
                    </div>
                </RouteButton>
            </template>
        </div>
    </div> -->

</FloorPlanWrapper>
</template>

<style scoped>
.marker-container {
    padding-bottom: 8%;
}
.spot-marker {
    width: 20px;
    height: 20px;
    background-color: #002537;
}

.spot-marker.animate {
    animation: flash 0.8s infinite alternate ease-out;
}

@keyframes flash {
    from {
        background-color: #002537;
    }
    to {
        background-color: #2c7ea1;
    }
}


@media (max-width: 1536px) {
    .marker-container {
        padding-bottom: 10%;
        font-size: 12px;
    }
}

</style>