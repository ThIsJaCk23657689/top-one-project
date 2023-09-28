<script setup lang="ts">
import TeamMemberLayout from '@/layouts/TeamMemberLayout.vue';

const person = {
    avatar: new URL('@/assets/images/teams/person-01.png', import.meta.url).href,
    title: '建築設計',
    company: '劉鎮忠建築師事務所',
    name: '劉鎮忠',
    englishName: '',
    position: '建築師',
    bio: [
        "經歷",
        "中華技術學院畢業",
        "劉鎮忠建築師事務所  開業建築師",
    ],
    awardTitle: "主要作品",
    awards: [],
    awardsGrid: [
        [ '坤悅建設', '君湛', '（台中市／１２Ｆ）' ],
        [ '義昌興建設', '幾何講義', '（台中市／１２Ｆ）' ],
        [ '精銳建設', '精銳雲', '（台中市／１２Ｆ）' ],
        [ '新富銘建設', '新都匯', '（台中市／１１Ｆ）' ],
        [ '林維建設', '塗城京讚', '（台中市／１１Ｆ）' ],
        [ '大毅建設', '55 WAYS', '（台中市／１２Ｆ）' ],
        [ '德邑建設', '致富好好', '（台中市／１５Ｆ）' ],
        [ '精銳建設', '軟園一號', '（台中市／１１Ｆ）' ],
        [ '親家建設', '潮世代', '（台中市／９Ｆ）' ],
        [ '同興協記建設', 'S Home', '（台中市／１５Ｆ）' ],
        [ '澄石建設', '學而', '（台中市／１４Ｆ）' ],
        [ '鴻邑建設', '晴川硯', '（台中市／１４Ｆ）' ],
    ],
    workImages: [
        { url: new URL('@/assets/images/teams/01-01.png', import.meta.url).href },
        { url: new URL('@/assets/images/teams/01-02.png', import.meta.url).href },
    ]
};

const switchLink = {
    router: { name: 'teams-chang' },
    name: '公設 景觀'
};

</script>

<template>
<TeamMemberLayout :person="person" :switch-link="switchLink"></TeamMemberLayout>
</template>

<style scoped>
</style>