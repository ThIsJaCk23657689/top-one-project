<script setup lang="ts">
import MaterialWrapper from '../../layouts/MaterialWrapper.vue'
import Page01View from './Innoci/Page01.vue'
import Page02View from './Innoci/Page02.vue'

const pages = [
    { content: Page01View, isDark: true },
    { content: Page02View, isDark: true },
];

const buttons = [
    {
        text: "精品衛浴",
        start: 0,
        end: 1
    },
    {
        text: "樣品屋",
        start: 2,
        end: 2
    }
];

</script>

<template>
<MaterialWrapper :pages="pages" :buttons="buttons">
    <template v-slot:header>
        <div class="text-white text-xl tracking-wide mr-10">起源於德國精工的整體衛浴解決方案</div>
    </template>
</MaterialWrapper>
</template>

<style scoped>

</style>
