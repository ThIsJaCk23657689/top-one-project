<script setup lang="ts">
import { ref } from 'vue';
import { ChevronRightIcon, ChevronLeftIcon, XMarkIcon } from '@heroicons/vue/24/solid';

const props = defineProps<{
    title: string,
    images: Array<string>
}>()
 
const currentSubIndex = ref(0);     // 紀錄某景點的子照片（編號）  

function nextImage() {
    let currentImageLength = props.images.length;
    currentSubIndex.value = (currentSubIndex.value + 1) % currentImageLength;
}

function prevImage() {
    let currentImageLength = props.images.length;
    currentSubIndex.value = (currentSubIndex.value - 1 + currentImageLength) % currentImageLength;
}

</script>

<template>
    <div class="modal">
        <div class="overlay"></div>
        <div class="image-container overflow-hidden shadow-lg">
            <img :src="images[currentSubIndex]" alt="景點圖片" class="w-full h-full object-cover" />
            <span class="image-text text-2xl tracking-widest">{{ title }}</span>
        </div>
        
        <template v-if="images.length > 1">
            <button class="circle-button right bg-neutral-100 group hover:bg-primary-100 transition-300-out" type="button" @click="nextImage">
                <ChevronRightIcon class="h-8 w-8 text-primary-100 group-hover:text-neutral-100" />
            </button>
            <button class="circle-button left bg-neutral-100 group hover:bg-primary-100 transition-300-out" type="button" @click="prevImage">
                <ChevronLeftIcon class="h-8 w-8 text-primary-100 group-hover:text-neutral-100" />
            </button>
        </template>

        <button class="close-button" type="button" @click="$emit('closeModal')">
            <XMarkIcon class="h-10 w-10 text-neutral-200 hover:text-neutral-50 transition-300-out"/>
        </button>
    </div>
</template>

<style scoped>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
}

.modal .image-container {
    position: relative;
    width: 70%;
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal .image-text {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 10px 20px 10px 20px;
    color: #fff;
    text-align: right;
    background-color: rgba(0, 0, 0, 0.5);
}

.modal .circle-button {
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal .circle-button.right {
    top: 50%;
    right: 10%;
    padding-left: 3px;
}

.modal .circle-button.left {
    top: 50%;
    left: 10%;
    padding-right: 3px;
}

.modal .close-button {
    position: absolute;
    top: 10%;
    right: 9%;
}

</style>