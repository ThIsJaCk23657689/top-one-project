<script setup lang="ts">
import CaseLayout from '@/layouts/CaseLayout.vue';

const content = [
    new URL('@/assets/images/cases/liveown/01.png', import.meta.url).href, 
];

</script>

<template>
<CaseLayout :image-urls="content" :slogan="'宏觀視野　東方質感宅邸'" :main-title="'居雍'">
    森綠八期首座休閒名宅「居雍天廈」，近距七期政經核心，高鐵相迎奔馳事業版圖，近G12捷運站，出則繁華相迎、入則大隱於市，展現大器宅邸居家品味。
</CaseLayout>
</template>

<style scoped>

</style>
