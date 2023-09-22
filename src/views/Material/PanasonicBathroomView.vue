<script setup lang="ts">
import MaterialWrapper from '../../layouts/MaterialWrapper.vue'
import Page01View from './PanasonicBathroom/Page01.vue'
import Page02View from './PanasonicBathroom/Page02.vue'
import Page03View from './PanasonicBathroom/Page03.vue'
import Page04View from './PanasonicBathroom/Page04.vue'

const pages = [
    { content: Page01View, isDark: true  },
    { content: Page02View, isDark: false  },
    { content: Page03View, isDark: true },
    { content: Page04View, isDark: true  },
];

const buttons = [
    {
        text: "影片",
        start: 0,
        end: 0  
    },
    {
        text: "頂級全自動馬桶",
        start: 1,
        end: 3
    },
    {
        text: "樣品屋",
        start: 4,
        end: 4
    },
];

const logo = new URL('@/assets/images/salut/logos/Panasonic.png', import.meta.url).href;
</script>

<template>
<MaterialWrapper :pages="pages" :buttons="buttons">
</MaterialWrapper>
</template>

<style scoped>

</style>
