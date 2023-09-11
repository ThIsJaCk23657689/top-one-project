<script setup lang="ts">
import { ref } from 'vue';
import IconMagnifyingGlassPlus from '../components/icons/IconMagnifyingGlassPlus.vue';
import IconMagnifyingGlassMinus from '../components/icons/IconMagnifyingGlassMinus.vue';
import IconSun from '../components/icons/IconSun.vue';
import IconSunFill from '../components/icons/IconSunFill.vue';
import IconMoon from '../components/icons/IconMoon.vue';
import IconMoonFill from '../components/icons/IconMoonFill.vue';

const props = defineProps<{
	imageUrls: Array<{
		day: string
		night: string
	}>
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
const currentIndex = ref(0);        // 目前第幾張圖片
const dayMode = ref(true);          // 是否為白天模式

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

function changeImageIndex (index: number) {
    currentIndex.value = index;
};

function changeDay(enable: boolean) {
    dayMode.value = enable;
}

function reset() {
    scale.value = 1;
    translateX.value = 0;
    translateY.value = 0;
}

</script>

<template>
    <div class="overflow-hidden h-full relative bg-primary-300">

        <div class="w-full h-full"
            :style="{
                transform: `scale(${scale}) translate(${translateX}px, ${translateY}px)`,
                transition: dragging ? 'none' : 'transform 0.3s ease-out'
            }"
            @mousedown="startDragging"
            @mousemove="handleDragging"
            @mouseup="stopDragging"
            @mouseleave="stopDragging"
            @mouseenter="handleMouseEnter"
            @wheel="handleWheel">

            <TransitionGroup name="image-fade">
                <div v-if="dayMode" v-for="i in [currentIndex]" :key="i" class="w-full h-full">
                    <img :key="currentIndex" :src="imageUrls[currentIndex].day" alt="Image" class="w-full h-full object-cover">
                </div>
				<div v-else v-for="i in [currentIndex]" :key="i + 10" class="w-full h-full">
                    <img :key="currentIndex" :src="imageUrls[currentIndex].night" alt="Image" class="w-full h-full object-cover">
                </div>
            </TransitionGroup>
            
        </div>

        <div class="control-panel">
            <div class="left-area bg-primary-200 shadow-md relative flex flex-row justify-center items-center">
                <button class="scale-button" @click="zoomIn">
                    <IconMagnifyingGlassPlus class="h-full"></IconMagnifyingGlassPlus>
                </button>
                <button class="scale-button" @click="zoomOut">
                    <IconMagnifyingGlassMinus class="h-full"></IconMagnifyingGlassMinus>
                </button>
                <div class="scale-text text-zinc-100 relative cursor-pointer mr-4" @click="reset">
                    {{ ceil(scale * 100) }}%
                </div>

                <button class="scale-button" @click="changeDay(true)">
                    <IconSunFill v-if="dayMode" class="h-full"></IconSunFill>
                    <IconSun v-else class="h-full"></IconSun>
                </button>

                <button class="scale-button" @click="changeDay(false)">
                    <IconMoon v-if="dayMode" class="h-full"></IconMoon>
                    <IconMoonFill v-else class="h-full"></IconMoonFill>
                </button>

            </div>
        </div>

        <div class="absolute inset-y-0 right-0 w-36 h-full flex flex-col justify-center items-center">
            <div v-for="(imageUrl, index) in imageUrls" :key="index" class="group" @click="changeImageIndex(index)">
                <div :class="[
                    'dot', 'cursor-pointer', 'mb-8',
                    { 'group-hover:bg-primary-200 transition-300-out bg-zinc-100': currentIndex !== index },
                    { 'bg-primary-200': currentIndex === index }
                ]"></div>
            </div>
        </div>

    </div>
</template>

<style scoped>
.control-panel{
    position: absolute;
    width: 240px;
    height: 40px;
    bottom: 5.3%;
    right: 7.2%;
    display: flex;
    flex-direction: row;
}

.control-panel .left-area {
    width: 100%;
    height: 100%;
}

.scale-button {
    margin-right: 8px;
    height: 24px;
}

.dot {
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
}

.scale-text {
    padding: 0px 2px 0px 2px;
    display: inline-block;
    border: 1px solid #fff;
}

</style>