<script setup lang="ts">
import { ref } from 'vue';
import IconMagnifyingGlassPlus from '../components/icons/IconMagnifyingGlassPlus.vue';
import IconMagnifyingGlassMinus from '../components/icons/IconMagnifyingGlassMinus.vue';
import FloorPlanBackground from '@/components/icons/FloorPlanBackground.vue';

const props = defineProps<{
    imageUrl: string,
    title: string,
    isFloor: boolean | false,
    hasBg?: boolean | false,
    buttons?: Array<{
        text: string,
        isActive: boolean | false,
    }>,
}>()

function ceil (value: number) {
    return Math.ceil(value);
}

const scale = ref(1);               // 初始縮放比例
const dragging = ref(false);        // 是否正在拖動
const lastMouseX = ref(0);          // 上次滑鼠 X 座標
const lastMouseY = ref(0);          // 上次滑鼠 Y 座標
const translateX = ref(0);          // X 軸位移
const translateY = ref(0);          // Y 軸位移

const currentHoverType = ref(0);    // 紀錄現在 hover 哪一個房型

function zoomIn() {
    if ( scale.value < 5.0 ) {
        scale.value *= 1.2;
    }
}

function zoomOut() {
    if ( scale.value > 1.0 ) {
        scale.value /= 1.2;
    } else {
        scale.value = 1.0;
    }
}

function startDragging(event: { preventDefault: () => void; clientX: number; clientY: number; }) {
    event.preventDefault();
    dragging.value = true;
    lastMouseX.value = event.clientX;
    lastMouseY.value = event.clientY;
}

function handleDragging(event: { clientX: number; clientY: number; }) {
    if (!dragging.value) return;

    const offsetX = (event.clientX - lastMouseX.value) / scale.value;
    const offsetY = (event.clientY - lastMouseY.value) / scale.value;
    lastMouseX.value = event.clientX;
    lastMouseY.value = event.clientY;

    translateX.value += offsetX;
    translateY.value += offsetY;
}

function stopDragging() {
    dragging.value = false;
    window.removeEventListener('wheel', handleWheel);
}

function handleMouseEnter() {
    window.addEventListener('wheel', handleWheel);
}

function handleWheel(event: WheelEvent) {
    event.preventDefault();
    const delta = Math.max( -1, Math.min( 1, event.deltaY ) );
    if ( delta > 0 ) {
        zoomOut();
    } else if ( delta < 0 ) {
        zoomIn();
    }
}

function reset() {
    scale.value = 1;
    translateX.value = 0;
    translateY.value = 0;
}

// 0 代表沒 hover；從 1 開始算
function hoverRoom(index: number) {
    currentHoverType.value = index;

    console.log('hoverRoom', index);
}

</script>

<template>
<div class="flex flex-row relative w-full h-full">

    <div class="main relative h-full bg-zinc-100 overflow-hidden">
        <div class="w-full h-full flex justify-center items-center relative" :style="{
                transform: `scale(${scale}) translate(${translateX}px, ${translateY}px)`,
                transition: dragging ? 'none' : 'transform 0.3s ease-out'
            }"
            @mousedown="startDragging"
            @mousemove="handleDragging"
            @mouseup="stopDragging"
            @mouseleave="stopDragging"
            @mouseenter="handleMouseEnter"
            @wheel="handleWheel">

            <div v-if="hasBg" class="w-4/5 relative">
                <FloorPlanBackground class="w-full absolute inset-0" :current-hover-index="currentHoverType" style="padding-right: 5px;"></FloorPlanBackground>
                <img :src="imageUrl" alt="Image" class="object-cover relative z-10"/>
            </div>
            <div v-else class="w-full h-full flex justify-center items-center">
                <img :src="imageUrl" alt="Image" class="object-cover" />
            </div>

            <div v-if="hasBg" class="w-full h-full absolute top-0 left-0 z-20">
                <RouterLink :to="{ name: 'standard-individual', params: { type: 'A' } }" class="absolute a-part" @mouseleave="hoverRoom(0)" @mouseenter="hoverRoom(1)"></RouterLink>
                <RouterLink :to="{ name: 'standard-individual', params: { type: 'B' } }" class="absolute b-part" @mouseleave="hoverRoom(0)" @mouseenter="hoverRoom(2)"></RouterLink>
                <RouterLink :to="{ name: 'standard-individual', params: { type: 'C' } }" class="absolute c-part" @mouseleave="hoverRoom(0)" @mouseenter="hoverRoom(3)"></RouterLink>
                <RouterLink :to="{ name: 'standard-individual', params: { type: 'D' } }" class="absolute d-part" @mouseleave="hoverRoom(0)" @mouseenter="hoverRoom(4)"></RouterLink>
                <RouterLink :to="{ name: 'standard-individual', params: { type: 'E' } }" class="absolute e-part" @mouseleave="hoverRoom(0)" @mouseenter="hoverRoom(5)"></RouterLink>
                <RouterLink :to="{ name: 'standard-individual', params: { type: 'F' } }" class="absolute f-part" @mouseleave="hoverRoom(0)" @mouseenter="hoverRoom(6)"></RouterLink>
            </div>
            <slot></slot>

        </div>

        <slot name="fixed"></slot>
    </div>


    <div class="h-full bg-primary-200 flex flex-row flex-1">
        <div class="h-full flex flex-col flex-1 justify-between">

            <div class="floor-plan-container flex flex-col">
                <p class="floor-plan-title">{{ title }}<span class="floor" v-show="isFloor">F</span></p>
                <span class="floor-plan-text mt-2">Floor Plan</span>

                <div class="flex flex-col item-center mt-10 items-center justify-center">
                    <template v-for="(button, index) in buttons">
                        <button v-if="button.isActive" class="floor-plan-button text-2xl p-1 text-primary-100 bg-neutral-100">
                            {{ button.text }}
                        </button>
                        <button v-else class="floor-plan-button text-2xl p-1 text-neutral-100 hover:text-primary-100 hover:bg-neutral-100 transition-300-out" @click="$emit('basementButton', index)">
                            {{ button.text }}
                        </button>
                    </template>
                </div>
            </div>

            <div class="control-panel">
                <div class="left-area relative flex flex-row items-center justify-center">
                    <button class="scale-button" @click="zoomIn">
                        <IconMagnifyingGlassPlus class="h-full"></IconMagnifyingGlassPlus>
                    </button>
                    <button class="scale-button" @click="zoomOut">
                        <IconMagnifyingGlassMinus class="h-full"></IconMagnifyingGlassMinus>
                    </button>
                    <div class="scale-text text-white relative cursor-pointer" @click="reset">
                        {{ ceil(scale * 100) }}%
                    </div>
                </div>
            </div>

        </div>
    </div>

</div>
</template>

<style scoped>
.main {
    width: 84%;
}

.design-border {
    width: 15px;
    height: 100%;
}

.design-block {
    width: 100%;
    height: 20.88%;
}

.floor-plan-container {
    margin-top: 44%;
    font-family: '微軟正黑體';
}

.floor-plan-title {
    display: inline-block;
    width: 100%;
    font-size: 80px;
    color: #fff;
    text-align: center;
    line-height: 1;
}

.floor {
    font-size: 70px;
    color: #fff;
    text-align: center;
    line-height: 1;
}

.floor-plan-text {
    display: inline-block;
    width: 100%;
    font-size: 20px;
    color: #fff;
    text-align: center;
    line-height: 1;
}

.floor-plan-button {
    width: 60px;
    height: 60px;
    border: 1px solid #fff;
    border-radius: 60px;
    margin-bottom: 20px;
}


.control-panel{
    width: 100%;
    height: 40px;
    margin-bottom: 25%;
    display: flex;
    flex-direction: row;
}

.control-panel .left-area {
    border-radius: 25px 25px 25px 25px;
    width: 100%;
    height: 100%;
}

.scale-button {
    margin-right: 16px;
    height: 28px;
}

.scale-text {
    padding: 0px 2px 0px 2px;
    display: inline-block;
    border: 1px solid #fff;
}







.a-part {
    width: 28%;
    height: 29%;
    top: 65%;
    left: 10%;
}

.b-part {
    width: 27%;
    height: 29%;
    top: 65%;
    left: 38%;
}

.c-part {
    width: 24.5%;
    height: 32%;
    top: 36%;
    left: 64.8%;
}

.d-part {
    width: 24.5%;
    height: 30%;
    top: 6%;
    left: 64.8%;
}

.e-part {
    width: 26%;
    height: 30%;
    top: 6%;
    left: 39%;
}

.f-part {
    width: 26%;
    height: 29%;
    top: 36%;
    left: 12%;
}

</style>
