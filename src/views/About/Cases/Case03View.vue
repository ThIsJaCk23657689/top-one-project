<script setup lang="ts">
import CaseLayout from '@/layouts/CaseLayout.vue';

const content = [
    new URL('@/assets/images/cases/shome/01.png', import.meta.url).href, 
    // new URL('@/assets/images/cases/03/02.jpg', import.meta.url).href, 
    // new URL('@/assets/images/cases/03/03.jpg', import.meta.url).href, 
    // new URL('@/assets/images/cases/03/04.jpg', import.meta.url).href, 
    // new URL('@/assets/images/cases/03/05.jpg', import.meta.url).href, 
];

</script>

<template>
<CaseLayout :image-urls="content" :slogan="'接軌世界　國際旅人的家'" :main-title="'S HOME'" :specialMode="false">
    以交通匯聚＋建設利多的高鐵新都心為中心，串流一高、二高與 74 號到形成暢達交通網，是台中門戶也是任意門，出門悠遊全市界。「S HOME」融會高鐵特區的環境特質，以設計感及多材質交織出獨具美感的風格建築，並成為旅人必訪、駐足驚嘆的精品宅邸。
</CaseLayout>
</template>

<style scoped>

</style>
