<script setup lang="ts">
import { ref } from 'vue';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/vue/24/solid';
import RouteButton from '@/components/RouteButton.vue';

const props = defineProps<{
    imageUrls: Array<string>,
    slogan: string,
    mainTitle: string,
}>()

const currentPageIndex = ref(0);

function nextImage() {
    let currentImageLength = props.imageUrls.length;
    currentPageIndex.value = (currentPageIndex.value + 1) % currentImageLength;
}

function prevImage() {
    let currentImageLength = props.imageUrls.length;
    currentPageIndex.value = (currentPageIndex.value - 1 + currentImageLength) % currentImageLength;
}


</script>

<template>
<div class="w-full h-full relative">
    <template v-if="props.imageUrls.length > 1">
        <button class="w-8 border border-white rounded-full p-1 bg-black/50 text-white prev-button hover:bg-primary-100 hover:border-primary-100 transition-300-out z-20" @click="prevImage">
            <ChevronLeftIcon></ChevronLeftIcon>
        </button>

        <button class="w-8 border border-white rounded-full p-1 bg-black/50 text-white next-button hover:bg-primary-100 hover:border-primary-100 transition-300-out z-20" @click="nextImage">
            <ChevronRightIcon></ChevronRightIcon>
        </button>
    </template>

    <div class="absolute w-3 bottom-36">
        <img src="@/assets/images/cases/design_bar.png" alt="" class="w-full">
    </div>

    <div class="card h-full flex flex-row">
        <div class="bg-primary-200 w-1/3 h-full flex flex-col justify-around items-center">
            
            <div class="flex flex-col justify-center items-center">
                <Transition name="fade" appear>
                    <div class="english-font text-2xl text-zinc-400 mb-6">PORTFOLIO</div>
                </Transition>
                
                <Transition name="fade" appear>
                    <div class="font-bold text-lg text-zinc-50">
                        {{ slogan }}
                    </div>
                </Transition>
            </div>

            <Transition name="fade" appear>
                <div class="flex justify-center items-center mb-8">
                    <RouteButton :to="{ name: 'cases-menu' }" class="text-zinc-50 font-bold text-5xl">
                        {{ mainTitle }}
                    </RouteButton>   
                </div>
            </Transition>

            <Transition name="fade" appear>
                <div class="text-zinc-50 flex justify-center items-center px-16">
                    <p class="w-full center-justified mb-12">
                        <slot></slot>
                    </p>
                </div>
            </Transition>

        </div>

        <div class="relative w-2/3 h-full overflow-hidden">
            <Transition name="scale" appear>
                <img :src="imageUrls[currentPageIndex]" alt="" class="object-cover h-full mainImage">
            </Transition>
        </div>
    </div>
</div>
</template>

<style scoped>
.prev-button {
    position: absolute;
    top: 50%;
    left: 3%;
}

.next-button {
    position: absolute;
    top: 50%;
    right: 3%;
}

.center-justified {
    text-align: justify;
    -moz-text-align-last: center;
    text-align-last: center;
}

.mainImage {
    transform: scale(1.02);
    transition: all 2.0s ease-out;
}

.mainImage:hover {
    transform: scale(1.0);
}

/* ========================== */
.fade-enter-active, .fade-leave-active {
    transition: all 2.0s ease-out;
}
.fade-enter-from, .fade-leave-to {
    opacity: 0;
}


/* ========================== */
.slide-fade-down-enter-active,
.slide-fade-down-leave-active {
	transition: all 1.8s ease-out;
}

.slide-fade-down-enter-from,
.slide-fade-down-leave-to {
	transform: translateY(-50px);
	opacity: 0;
}


/* ========================== */
.scale-enter-to, .scale-leave-from {
    transform: scale(1.02);
}
.scale-enter-active, .scale-leave-active {
    transition: all 2.0s ease-out;
}
.scale-enter-from, .scale-leave-to {
    transform: scale(1.0);
}

</style>
