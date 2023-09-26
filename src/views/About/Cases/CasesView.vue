<script setup lang="ts">
import RouteButton from '@/components/RouteButton.vue';

const MenuItems = [
    [
        { 
            link: { name: 'cases-nine' },
            url: new URL('@/assets/images/cases/nine.png', import.meta.url).href, 
            name: '九悅' 
        },
        { 
            link: { name: 'cases-mountain' },
            url: new URL('@/assets/images/cases/mountain.png', import.meta.url).href, 
            name: '見山' 
        },
        { 
            link: { name: 'cases-liveown' },
            url: new URL('@/assets/images/cases/liveown.png', import.meta.url).href, 
            name: '居雍' 
        },
    ],
    [
        { 
            link: { name: '' },
            url: new URL('@/assets/images/cases/sea.png', import.meta.url).href, 
            name: '海悅' 
        },
        { 
            link: { name: '' },
            url: new URL('@/assets/images/cases/orange.png', import.meta.url).href, 
            name: '澄品' 
        },
        { 
            link: { name: 'cases-shome' },
            url: new URL('@/assets/images/cases/shome.png', import.meta.url).href, 
            name: 'S HOME' 
        },
        { 
            link: { name: 'cases-good' },
            url: new URL('@/assets/images/cases/good.png', import.meta.url).href, 
            name: '好樣' 
        },
    ]
];

</script>

<template>
<div class="w-full h-full relative flex flex-col pl-40 pr-24">

    <div class="absolute w-3 bottom-36 left-0">
        <img src="@/assets/images/cases/design_bar.png" alt="" class="w-full">
    </div>

    <div class="w-full h-3/5 flex flex-row items-center">
        <template v-for="(object, index) in MenuItems[0]" :key="index">

            <div v-if="object.link.name === ''" class="relative card mr-16">
                <div class="w-full h-full overflow-hidden">

                    <Transition name="scale2" appear>
                        <img :src="object.url" alt="" class="object-cover caseImage2">
                    </Transition>
                    
                    <div class="w-full absolute bottom-0 mb-4">
                        <span class="text-zinc-50 text-xl border-x-2 px-4 font-bold">{{ object.name }}</span>
                    </div>
                </div>
            </div>

            <RouteButton v-else :to="object.link" class="relative card mr-16">
                <div class="w-full h-full overflow-hidden">

                    <Transition name="scale2" appear>
                        <img :src="object.url" alt="" class="object-cover caseImage2">
                    </Transition>
                    
                    <div class="w-full absolute bottom-0 mb-4">
                        <span class="text-zinc-50 text-xl border-x-2 px-4 font-bold">{{ object.name }}</span>
                    </div>
                </div>
            </RouteButton>

        </template>
    </div>

    <div class="w-full h-2/5 flex flex-row justify-between items-start">
        <template v-for="(object, index) in MenuItems[1]" :key="index">
            
            <div v-if="object.link.name === ''" class="relative card2 flex flex-col justify-center items-center">
                <div class="w-full h-full overflow-hidden">

                    <Transition name="scale" appear>
                        <img :src="object.url" alt="" class="object-cover caseImage">
                    </Transition>

                </div>
                <div class="mt-4">
                    <span class="text-zinc-50 text-xl border-x-2 px-4 font-bold">{{ object.name }}</span>
                </div>
            </div>

            <RouteButton v-else :to="object.link" class="relative card2 flex flex-col justify-center items-center">
                <div class="w-full h-full overflow-hidden">

                    <Transition name="scale" appear>
                        <img :src="object.url" alt="" class="object-cover caseImage">
                    </Transition>

                </div>
                <div class="mt-4">
                    <span class="text-zinc-50 text-xl border-x-2 px-4 font-bold">{{ object.name }}</span>
                </div>
            </RouteButton>

        </template>
    </div>
    
</div> 
</template>

<style scoped>
.card {
    width: 21.5%;
}

.card2 {
    width: 18.98125%;
}

.caseImage {
    transform: scale(1.05);
    transition: all 2.0s ease-out;
}

.caseImage:hover {
    transform: scale(1.0);
}

.caseImage2 {
    transform: scale(1.02);
    transition: all 2.0s ease-out;
}

.caseImage2:hover {
    transform: scale(1.0);
}



/* ========================== */
.scale-enter-to, .scale-leave-from {
    transform: scale(1.05);
}
.scale-enter-active, .scale-leave-active {
    transition: all 2.0s ease-out;
}
.scale-enter-from, .scale-leave-to {
    transform: scale(1.0);
}

/* ========================== */
.scale2-enter-to, .scale2-leave-from {
    transform: scale(1.02);
}
.scale2-enter-active, .scale2-leave-active {
    transition: all 2.0s ease-out;
}
.scale2-enter-from, .scale2-leave-to {
    transform: scale(1.0);
}

</style>
