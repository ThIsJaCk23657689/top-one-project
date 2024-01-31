<script setup lang="ts">
import FloorPlanWrapper from '@/layouts/FloorPlanWrapper.vue';
import RouteButton from '@/components/RouteButton.vue';

const mainImage = new URL('@/assets/images/floor-plans/1F.jpg', import.meta.url).href;
const titleImage = new URL('@/assets/images/floor-plans/1F-title.svg', import.meta.url).href;

const spots = [
    { marker: 'A', top: 77.20, left: 65.00, text: '林蔭大道', url: '/structure/facilities/frontdoor' },
    { marker: 'B', top: 58.00, left: 65.00, text: '迎賓大廳', url: '/structure/facilities/lobby' },
    { marker: 'C', top: 52.00, left: 73.85, text: '資源回收室', url: '#' },
    { marker: 'D', top: 47.86, left: 58.20, text: '宅配室', url: '#' },
    { marker: 'E', top: 39.20, left: 53.70, text: '信箱區', url: '/structure/facilities/mailbox' },
    { marker: 'F', top: 25.22, left: 55.98, text: '閱覽室', url: '/structure/facilities/reading' },
    { marker: 'G', top: 29.12, left: 68.97, text: '家教室', url: '#' },
    { marker: 'H', top: 21.71, left: 68.89, text: '琴韻室', url: '#' },
    { marker: 'I', top: 40.50, left: 44.02, text: '梯廳', url: '/structure/facilities/stair' },
    { marker: 'J', top: 27.30, left: 45.45, text: '多功能交誼廳', url: '/structure/facilities/lounge' },
    { marker: 'K', top: 48.60, left: 23.05, text: '活力健身房', url: '/structure/facilities/gym' },
    { marker: 'L', top: 35.40, left: 22.96, text: '瑜珈教室', url: '/structure/facilities/yoga' },
    { marker: 'M', top: 24.05, left: 25.00, text: '風鈴秘境', url: '/structure/facilities/oasis' },
    { marker: 'N', top: 12.40, left: 69.08, text: '遊憩綠廊', url: '#' },
    { marker: 'O', top: 18.00, left: 80.10, text: '大樹休憩平台', url: '/structure/facilities/relax' },
    { marker: 'P', top: 45.80, left: 81.28, text: '社區車道', url: '#' },
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