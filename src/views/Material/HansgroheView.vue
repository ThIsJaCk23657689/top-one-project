<script setup lang="ts">
import MaterialWrapper from '../../layouts/MaterialWrapper.vue'
import Page01View from './Hansgrohe/Page01.vue'
import Page02View from './Hansgrohe/Page02.vue'
import Page03View from './Hansgrohe/Page03.vue'
import Page04View from './Hansgrohe/Page04.vue'
import Page05View from './Hansgrohe/Page05.vue'

const pages = [
    { content: Page01View, isDark: true  },
    { content: Page02View, isDark: false },
    { content: Page03View, isDark: true  },
    { content: Page04View, isDark: true  },
    { content: Page05View, isDark: true  }
];

const buttons = [
    {
        text: "德國頂級龍頭技術",
        start: 0,
        end: 2
    },
    {
        text: "樣品屋",
        start: 3,
        end: 4
    },
];
</script>

<template>
<MaterialWrapper :pages="pages" :buttons="buttons">
</MaterialWrapper>
</template>

<style scoped>

</style>
