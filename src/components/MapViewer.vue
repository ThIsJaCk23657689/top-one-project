<script setup lang="ts">
import { ref } from 'vue';
import IconMagnifyingGlassPlus from '../components/icons/IconMagnifyingGlassPlus.vue';
import IconMagnifyingGlassMinus from '../components/icons/IconMagnifyingGlassMinus.vue';
import ImageModalViwer from './ImageModalViwer.vue';

const props = defineProps<{
    imageUrl: string
    spotData: Array<{
        name: string
        top: number
        left: number,
        images: Array<string>
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
const showModal = ref(false);       // 是否顯示 modal
const currentSpotIndex = ref(0);    // modal 要顯示哪一個景點的照片（編號）  

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

function popupModal(spotIndex: number) {
    showModal.value = true;
    currentSpotIndex.value = spotIndex;
}

function closeModal() {
    showModal.value = false;
}

</script>

<template>
    <div ref="imgaeContainer" class="overflow-hidden h-full relative">
        
        <div class="w-full h-full flex justify-center items-center">
            <div class="w-4/5 relative" :style="{
                transform: `scale(${scale}) translate(${translateX}px, ${translateY}px)`,
                transition: dragging ? 'none' : 'transform 0.3s ease-out'
                }"
                @mousedown="startDragging"
                @mousemove="handleDragging"
                @mouseup="stopDragging"
                @mouseleave="stopDragging"
                @mouseenter="handleMouseEnter"
                @wheel="handleWheel">
                <img :src="imageUrl" alt="Image" class="object-cover" />

                <template v-for="(spot, index) in spotData" :key="index">
                    <button v-if="spot.images.length !== 0" class="spot transition-300-out" 
                        :style="{ top: `${spot.top}%`, left: `${spot.left}%` }"
                        @click="popupModal(index)">
                    </button>
                    <button v-else class="spot disable cursor-default transition-300-out" 
                        :style="{ top: `${spot.top}%`, left: `${spot.left}%` }">
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

    <ImageModalViwer v-if="showModal" 
        :images="spotData[currentSpotIndex].images" 
        :title="spotData[currentSpotIndex].name"
        @close-modal="closeModal" />

</template>

<style scoped>
.control-panel{
    position: absolute;
    width: 174px;
    height: 40px;
    bottom: 5.4%;
    right: 7.6%;
    display: flex;
    flex-direction: row;
}

.control-panel .left-area {
    width: 100%;
    height: 100%;
}

.scale-button {
    margin-right: 10px;
    height: 24px;
}

.scale-text {
    padding: 0px 2px 0px 2px;
    display: inline-block;
    border: 1px solid #fff;
}

.spot {
    position: absolute;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    top: 0%;
    left: 0%;
    animation: flash 0.8s infinite alternate ease-out;
}

@keyframes flash {
    from {
        background-color: #f8ec00;
    }
    to {
        background-color: #fcfbed;
    }
}

.spot.disable {
    background-color: #bfbfbf;
}

.spot:not(.disable):hover {
    background-color: #f7cc99;
}

@media (max-width: 1536px) {
.spot {
    width: 20px;
    height: 20px;
}
}

</style>