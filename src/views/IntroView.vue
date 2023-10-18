<script setup lang="ts">
import { ref, onMounted  } from 'vue';
import RouteButton from '@/components/RouteButton.vue';
import { useRouter } from 'vue-router';

const images = [
    new URL('@/assets/images/intro/01.png', import.meta.url).href,
    new URL('@/assets/images/intro/02.png', import.meta.url).href,
    new URL('@/assets/images/intro/03.png', import.meta.url).href,
    new URL('@/assets/images/intro/04.png', import.meta.url).href,
    new URL('@/assets/images/intro/05.png', import.meta.url).href,
];

const router = useRouter();
const currentIndex = ref(0);
let intervalId : number;

function nextImage() {
    let currentImageLength = images.length;
    if (currentIndex.value + 1 >= images.length) {
        router.push({ name: 'home' });
    }
    currentIndex.value = (currentIndex.value + 1) % currentImageLength;
}

function skipIntro() {
    clearInterval(intervalId);
    router.push({ name: 'home' });
}

onMounted(() => {
    intervalId = setInterval(nextImage, 3000);
});

</script>

<template>
    <div class="w-full h-full">
        <TransitionGroup name="image-fade-slow">
            <div v-for="i in [currentIndex]" :key="i" class="w-full h-full">
                <img :key="currentIndex" :src="images[currentIndex]" alt="Image" class="w-full h-full object-cover">
            </div>
        </TransitionGroup>
    </div>
    <button class="absolute bottom-20 right-36 text-zinc-50 text-xl border-zinc-50 border-2 px-2 tracking-wider 
                hover:bg-zinc-50 hover:text-primary-200 transition-300-out" @click="skipIntro">
        SKIP
    </button>
</template>

<style scoped>
</style>