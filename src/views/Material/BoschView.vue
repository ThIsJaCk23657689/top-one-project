<script setup lang="ts">
import MaterialWrapper from '@/layouts/MaterialWrapper.vue'
import Page01View from './Bosch/Page01.vue'
import Page02View from './Bosch/Page02.vue'
import Page03View from './Bosch/Page03.vue'
import Page04View from './Bosch/Page04.vue'

const pages = [
    { content: Page01View, isDark: true },
    { content: Page02View, isDark: false },
    { content: Page03View, isDark: true },
    { content: Page04View, isDark: true }
];

const buttons = [
    {
        text: "頂級洗淨技術",
        start: 0,
        end: 2
    },
    {
        text: "樣品屋",
        start: 3,
        end: 3
    },
];
</script>

<template>
<MaterialWrapper :pages="pages" :buttons="buttons">
</MaterialWrapper>
</template>

<style scoped>

</style>
