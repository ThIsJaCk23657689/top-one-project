<script setup lang="ts">
import MapViewer from '@/components/MapViewer.vue';
const mainImage = new URL('@/assets/images/map.svg', import.meta.url).href;

const spotData = [
    { 
        name: '74 快速道路', top: 34.5, left: 89.15, images: [ 
            new URL('@/assets/images/spots/01-01.jpg', import.meta.url).href 
        ] 
    },
    { 
        name: '大里菩薩寺', top: 42.3, left: 58, images: [ 
            new URL('@/assets/images/spots/02-01.jpg', import.meta.url).href,
            new URL('@/assets/images/spots/02-02.jpg', import.meta.url).href
        ] 
    },
    { 
        name: '大里環保公園', top: 51.8, left: 67.1, images: [
            new URL('@/assets/images/spots/03-01.jpg', import.meta.url).href,
            new URL('@/assets/images/spots/03-02.jpg', import.meta.url).href
        ] 
    },
    { 
        name: '大買家', top: 32, left: 74.2, images: [
            new URL('@/assets/images/spots/04-01.jpg', import.meta.url).href
        ] 
    },
    { 
        name: '中投公路', top: 83, left: 43.3, images: [
            new URL('@/assets/images/spots/05-01.jpg', import.meta.url).href 
        ] 
    },
    { 
        name: '大里運動中心', top: 63, left: 77, images: [
            new URL('@/assets/images/spots/06-01.jpg', import.meta.url).href,
            new URL('@/assets/images/spots/06-02.jpg', import.meta.url).href
        ] 
    },
    { 
        name: '中興大學', top: 23.5, left: 53, images: [
            new URL('@/assets/images/spots/07-01.jpg', import.meta.url).href,
            new URL('@/assets/images/spots/07-02.jpg', import.meta.url).href
        ] 
    },
    { 
        name: '大里運動公園', top: 69, left: 78, images: [
            new URL('@/assets/images/spots/08-01.jpg', import.meta.url).href 
        ] 
    },
    { 
        name: '內新黃昏市場', top: 47, left: 80, images: [
            new URL('@/assets/images/spots/09-01.jpg', import.meta.url).href,
            new URL('@/assets/images/spots/09-02.jpg', import.meta.url).href
        ] 
    },
    { 
        name: '永隆國小', top: 37.4, left: 64.5, images: [
            new URL('@/assets/images/spots/10-01.jpg', import.meta.url).href 
        ] 
    },
    { 
        name: '星巴克', top: 37.4, left: 67.8, images: [
            new URL('@/assets/images/spots/11-01.jpg', import.meta.url).href,
        ] 
    },
    { 
        name: '國光路商圈', top: 48, left: 70.8, images: [
            new URL('@/assets/images/spots/12-01.jpg', import.meta.url).href 
        ] 
    },
    { 
        name: '康橋水岸公園', top: 27, left: 60, images: [
            new URL('@/assets/images/spots/13-01.jpg', import.meta.url).href,
            new URL('@/assets/images/spots/13-02.jpg', import.meta.url).href
        ] 
    },
    { 
        name: '中興路商圈', top: 53, left: 81.9, images: [
            new URL('@/assets/images/spots/14-01.jpg', import.meta.url).href 
        ] 
    },
    { 
        name: '仁愛醫院', top: 42.5, left: 73.3, images: [
            new URL('@/assets/images/spots/15-01.jpg', import.meta.url).href 
        ] 
    },
    { 
        name: '永明公園', top: 41, left: 55.8, images: [
            new URL('@/assets/images/spots/16-01.jpg', import.meta.url).href,
            new URL('@/assets/images/spots/16-02.jpg', import.meta.url).href
        ] 
    },
    { 
        name: '爽文公園', top: 43, left: 50.9, images: [
            new URL('@/assets/images/spots/17-01.jpg', import.meta.url).href 
        ] 
    },
    { 
        name: '爽文國中', top: 44.9, left: 64.48, images: [
            new URL('@/assets/images/spots/18-01.jpg', import.meta.url).href 
        ] 
    },
    { 
        name: '興大康橋', top: 27, left: 51, images: [
            new URL('@/assets/images/spots/19-01.jpg', import.meta.url).href,
            new URL('@/assets/images/spots/19-02.jpg', import.meta.url).href
        ] 
    },
];

</script>

<template>
<MapViewer :image-url="mainImage" :spot-data="spotData"></MapViewer>
</template>

<style scoped>
</style>