<script setup lang="ts">
import MaterialWrapper from '../../layouts/MaterialWrapper.vue'
import Page01View from './Lifegear/Page01.vue'
import Page02View from './Lifegear/Page02.vue'
import Page03View from './Lifegear/Page03.vue'
import Page04View from './Lifegear/Page04.vue'

const pages = [
    { content: Page01View, isDark: true  },
    { content: Page02View, isDark: false },
    { content: Page03View, isDark: true  },
    { content: Page04View, isDark: true  },
];

const buttons = [
    {
        text: "多功能暖風機",
        start: 0,
        end: 3
    }
];
</script>

<template>
<MaterialWrapper :pages="pages" :buttons="buttons">
</MaterialWrapper>
</template>

<style scoped>

</style>
