<script setup lang="ts">
import MaterialWrapper from '../../layouts/MaterialWrapper.vue'
import Page01View from './PanasonicKitchen/Page01.vue'
import Page02View from './PanasonicKitchen/Page02.vue'
import Page03View from './PanasonicKitchen/Page03.vue'
import Page04View from './PanasonicKitchen/Page04.vue'
import Page05View from './PanasonicKitchen/Page05.vue'
import Page06View from './PanasonicKitchen/Page06.vue'

const pages = [
    { content: Page01View, isDark: true  },
    { content: Page02View, isDark: true  },
    { content: Page03View, isDark: false },
    { content: Page04View, isDark: true  },
    { content: Page05View, isDark: true  },
    { content: Page06View, isDark: true  },
];

const buttons = [
    {
        text: "頂級廚具",
        start: 0,
        end: 4
    },
    {
        text: "人造石檯面",
        start: 5,
        end: 5
    },
    {
        text: "樣品屋",
        start: 6,
        end: 6
    }
];

</script>

<template>
<MaterialWrapper :pages="pages" :buttons="buttons">
</MaterialWrapper>
</template>

<style scoped>
.salut-button {
    border: solid 1px white;
    border-radius: 8px;
    text-align: center;
    color: white;
    padding: 2px 10px;
    min-width: 125px;
}

.salut-button.active {
    background-color: white;
    color: #006878;
}
</style>
