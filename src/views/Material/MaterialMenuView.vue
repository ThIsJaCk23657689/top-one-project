<script setup lang="ts">
import RouteButton from '@/components/RouteButton.vue';

const materials = [
    { path: 'panasonickitchen', image: new URL('@/assets/images/materials/logos/PanasonicKitchen.svg', import.meta.url).href },
    { path: 'rinnai', image: new URL('@/assets/images/materials/logos/Rinnai.svg', import.meta.url).href },
    { path: '#', image: new URL('@/assets/images/materials/logos/Bosch.svg', import.meta.url).href },
    { path: 'panasonicbathroom', image: new URL('@/assets/images/materials/logos/PanasonicBathroom.svg', import.meta.url).href },
    { path: '#', image: new URL('@/assets/images/materials/logos/Innoci.svg', import.meta.url).href },
    { path: 'hansgrohe', image: new URL('@/assets/images/materials/logos/Hansgrohe.svg', import.meta.url).href },
    { path: 'lifegear', image: new URL('@/assets/images/materials/logos/Lifegear.svg', import.meta.url).href },
    { path: '#', image: new URL('@/assets/images/materials/logos/Rebar.svg', import.meta.url).href },
    { path: 'waferlock', image: new URL('@/assets/images/materials/logos/Waferlock.svg', import.meta.url).href },
    { path: 'kronotex', image: new URL('@/assets/images/materials/logos/Kronotex.svg', import.meta.url).href },
    { path: 'daiken', image: new URL('@/assets/images/materials/logos/Daiken.svg', import.meta.url).href },
    { path: 'electriccar', image: new URL('@/assets/images/materials/logos/ElectronCar.svg', import.meta.url).href },
];

</script>

<template>
<div class="w-hull h-full flex justify-center items-center">
    <div class="w-4/5 h-3/5 grid grid-cols-4 gap-4">
        <RouteButton :to="material.path" v-for="(material, index) in materials" :key="index" class="flex justify-center items-center opacity-75 hover:opacity-100 transition-300-out">
            <div class="w-4/6 flex justify-center items-center">
                <img :src="material.image" alt="" class="object-cover w-full">
            </div>
        </RouteButton>
    </div>

    <Transition name="slide-fade-up" appear>
        <div class="absolute right-14 bottom-0 w-20">
            <img src="@/assets/images/materials/logos/MenuTopOne.svg" alt="" class="object-cover w-full">
        </div>
    </Transition>
    
</div>
</template>

<style scoped>
</style>