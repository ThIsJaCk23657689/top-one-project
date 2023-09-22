<script setup lang="ts">
import MaterialWrapper from '../../layouts/MaterialWrapper.vue'
import Page01View from './Daiken/Page01.vue'
import Page02View from './Daiken/Page02.vue'

const pages = [
    { content: Page01View, isDark: true  },
    { content: Page02View, isDark: true  },
];

const buttons = [
    {
        text: "室內靜音門",
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
</MaterialWrapper>
</template>

<style scoped>

</style>
