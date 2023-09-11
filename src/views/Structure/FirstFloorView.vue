<script setup lang="ts">
import FloorPlanWrapper from '@/layouts/FloorPlanWrapper.vue';
import RouteButton from '@/components/RouteButton.vue';

const mainImage = new URL('@/assets/images/floor-plans/1F.svg', import.meta.url).href;

const spots = [
    { marker: 'A', text: '林蔭大道', url: '#' },
    { marker: 'B', text: '迎賓大廳', url: '/structure/facilities/lobby' },
    { marker: 'C', text: '資源回收室', url: '#' },
    { marker: 'D', text: '宅配室', url: '#' },
    { marker: 'E', text: '信箱區', url: '/structure/facilities/mailbox' },
    { marker: 'F', text: '閱覽室', url: '/structure/facilities/reading' },
    { marker: 'G', text: '家教室', url: '#' },
    { marker: 'H', text: '琴韻室', url: '#' },
    { marker: 'I', text: '梯廳', url: '/structure/facilities/stair' },
    { marker: 'J', text: '多功能交誼廳', url: '/structure/facilities/lounge' },
    { marker: 'K', text: '活力健身房', url: '/structure/facilities/gym' },
    { marker: 'L', text: '瑜珈教室', url: '#' },
    { marker: 'M', text: '風鈴秘境', url: '/structure/facilities/oasis' },
    { marker: 'N', text: '遊憩綠廊', url: '#' },
    { marker: 'O', text: '大樹休憩平台', url: '/structure/facilities/relax' },
    { marker: 'P', text: '社區車道', url: '#' },
];

</script>

<template>
<FloorPlanWrapper :image-url="mainImage" :title="'1'" :is-floor="true">
    <div class="w-full h-full absolute top-0 left-0 flex flex-col items-center justify-end">
        <div class="marker-container w-3/5 grid grid-cols-6">

            <template v-for="(spot, index) in spots" :key="index">
                <RouteButton :to="spot.url" class="mt-4 flex flex-row items-center">   
                    <div class="spot-marker flex justify-center items-center english-font text-white text-center mr-2">
                        {{ spot.marker }}
                    </div>
                    <div>
                        {{ spot.text }}
                    </div>
                </RouteButton>
            </template>

        </div>
    </div>
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


@media (max-width: 1536px) {
    .marker-container {
        padding-bottom: 10%;
        font-size: 12px;
    }
}

</style>