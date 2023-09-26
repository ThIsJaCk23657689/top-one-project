<script setup lang="ts">
import CaseLayout from '@/layouts/CaseLayout.vue';

const content = [
    new URL('@/assets/images/cases/nine/01.png', import.meta.url).href, 
];

</script>

<template>
<CaseLayout :image-urls="content" :slogan="'蘊含生活詩意，典藏式建築'" :main-title="'九悅'">
    在書香、人文氣息中感受時間流轉的英倫風建築「九悅」－雙捷運‧雙園道‧南區人文商圈；濃郁人文書香，涵養生活氣質，展讀城市最美的篇章。
</CaseLayout>
</template>

<style scoped>

</style>
