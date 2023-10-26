<script setup lang="ts">
import { ref } from 'vue';
import RouteButton from '@/components/RouteButton.vue';
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/vue/24/solid';
import ArrowReturnIcon from '../components/icons/ArrowReturnIcon.vue';

const props = defineProps<{
	images: Array<string>,
	title: string
}>()

const currentIndex = ref(0);        // 目前第幾張圖片

function nextImage() {
    let currentImageLength = props.images.length;
    currentIndex.value = (currentIndex.value + 1) % currentImageLength;
}

function prevImage() {
    let currentImageLength = props.images.length;
    currentIndex.value = (currentIndex.value - 1 + currentImageLength) % currentImageLength;
}

</script>

<template>
<div class="w-full h-full relative flex flex-col">
	<div class="w-full h-5/6 flex relative">
		<TransitionGroup name="image-fade">
			<div v-for="i in [currentIndex]" :key="i" class="w-full h-full">
				<img :key="currentIndex" :src="images[currentIndex]" alt="Image" class="w-full h-full object-cover">
			</div>
		</TransitionGroup>

		<div class="absolute flex flex-row justify-center items-center button-container">
			<template v-if="images.length > 1">
				<button class="ml-3" type="button" @click="prevImage">
					<ArrowLeftIcon class="h-6 w-6 text-zinc-100" />
				</button>
				<button class="ml-3" type="button" @click="nextImage">
					<ArrowRightIcon class="h-6 w-6 text-zinc-100" />
				</button>
			</template>

			<RouteButton :to="{ name: '1floor' }" class="ml-4">
				<ArrowReturnIcon class="h-6 w-6 text-zinc-100"/>
			</RouteButton>
		</div>
		
	</div>
		
	<div class="w-full h-1/6 flex flex-row">
		<div class="w-1/2 h-full flex flex-row justify-start items-center pl-24">
			<span class="english-font text-3xl text-zinc-100 mr-6">ARCH</span>
			<div class="w-1/2 h-px bg-zinc-200"></div>
		</div>
		<div class="w-1/2 h-full flex justify-end items-center pr-40">
			<!-- <span class="text-3xl text-zinc-100">{{ title }}</span> -->
		</div>
	</div>

	<div class="absolute cube flex flex-col">
		<div class="w-full bg-primary-300" style="height: 17%;"></div>
		<div class="w-full bg-zinc-100" style="height: 83%;"></div>
	</div>

</div>
</template>

<style scoped>
.cube {
	left: 0;
	bottom: 0;
	width: 0.6%;
	height: 20%;
}

.button-container {
	right: 6%;
	bottom: 3%;
}
</style>