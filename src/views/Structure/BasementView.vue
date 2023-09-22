<script setup lang="ts">
import { ref } from 'vue';
import FloorPlanWrapper from '@/layouts/FloorPlanWrapper.vue';
import CompressIcon from '@/components/icons/CompressIcon.vue';

const currentBasement = ref(0);

const basement = [
    { title: 'B1', text: '地下一樓配置圖', url: new URL('@/assets/images/floor-plans/B1.svg', import.meta.url).href },
    { title: 'B2', text: '地下二樓配置圖', url: new URL('@/assets/images/floor-plans/B2.svg', import.meta.url).href },
    { title: 'B3', text: '地下三樓配置圖', url: new URL('@/assets/images/floor-plans/B3.svg', import.meta.url).href }
];

const buttons = [
    { text: '地下一樓', isActive: true },
    { text: '地下二樓', isActive: false },
    { text: '地下三樓', isActive: false }
];

const mainImage = new URL('@/assets/images/floor-plans/B1.png', import.meta.url).href;

function bassmentButtonClicked(index: number) {
    for (let index = 0; index < buttons.length; index++) {
        buttons[index].isActive = false;
    }

    buttons[index].isActive = true;
    currentBasement.value = index;
    console.log('basement button clicked:' + index);
}

</script>

<template>
    <FloorPlanWrapper 
        :image-url="basement[currentBasement].url" 
        :title="basement[currentBasement].title" 
        :is-floor="true"
        :is-basement="true"
        :buttons="buttons"
        @basement-Button="bassmentButtonClicked">

        <div class="title-container absolute flex flex-col justify-center items-start">
            <span class="text-2xl font-bold text-zinc-700">{{ basement[currentBasement].text }}</span>
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
