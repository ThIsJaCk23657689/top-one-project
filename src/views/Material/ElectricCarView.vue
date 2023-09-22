<script setup lang="ts">
import MaterialWrapper from '../../layouts/MaterialWrapper.vue'
import Page01View from './ElectricCar/Page01.vue'
import Page02View from './ElectricCar/Page02.vue'
import Page03View from './ElectricCar/Page03.vue'
import Page04View from './ElectricCar/Page04.vue'
import Page05View from './ElectricCar/Page05.vue'
import Page06View from './ElectricCar/Page06.vue'
import Page07View from './ElectricCar/Page07.vue'
import Page08View from './ElectricCar/Page08.vue'
import Page09View from './ElectricCar/Page09.vue'
import Page10View from './ElectricCar/Page10.vue'

const pages = [
    { content: Page01View, isDark: true  },
    { content: Page02View, isDark: true  },
    { content: Page03View, isDark: true  },
    { content: Page04View, isDark: true  },
    { content: Page05View, isDark: true  },
    { content: Page06View, isDark: false },
    { content: Page07View, isDark: true  },
    { content: Page08View, isDark: true  },
    { content: Page09View, isDark: true  },
    { content: Page10View, isDark: true  },
];

const buttons = [
    {
        text: "電動車",
        start: 11,
        end: 11
    }
];
</script>

<template>
<MaterialWrapper :pages="pages" :buttons="buttons">
</MaterialWrapper>
</template>

<style scoped>

</style>
