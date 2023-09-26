<script setup lang="ts">
import CaseLayout from '@/layouts/CaseLayout.vue';

const content = [
    new URL('@/assets/images/cases/mountain/01.png', import.meta.url).href, 
];

</script>

<template>
<CaseLayout :image-urls="content" :slogan="'綠意豐繞　文化綠建築'" :main-title="'見山'">
    位於八期高綠闊市景的「見山」，營造引人入勝的自然氛圍，以山為題、景為意，希冀居住者與建築產生共鳴，享受詩詞筆下的棲居意境，感受被景致環繞、遊樂於山水間的靜謐雅緻。
</CaseLayout>
</template>

<style scoped>

</style>
