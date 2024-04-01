<script setup lang="ts">
import MaterialWrapper from '../../layouts/MaterialWrapper.vue'
import Page01View from './Kronotex/Page01.vue'
import Page02View from './Kronotex/Page02.vue'
import Page03View from './Kronotex/Page03.vue'
import Page04View from './Kronotex/Page04.vue'
import Page05View from './Kronotex/Page05.vue'

const pages = [
    { content: Page01View, isDark: true  },
    { content: Page02View, isDark: true  },
    { content: Page03View, isDark: false },
    { content: Page04View, isDark: true  },
    { content: Page05View, isDark: false  }
];

const buttons = [
    {
        text: "KRONTOTEX",
        start: 0,
        end: 3
    },
    {
        text: "樣品屋",
        start: 4,
        end: 4
    }
];
</script>

<template>
<MaterialWrapper :pages="pages" :buttons="buttons">
</MaterialWrapper>
</template>

<style scoped>

</style>
