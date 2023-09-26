<script setup lang="ts">
import TeamMemberLayout from '@/layouts/TeamMemberLayout.vue';

const person = {
    avatar: new URL('@/assets/images/teams/person-01.png', import.meta.url).href,
    title: '建築設計',
    company: '',
    name: '陳彥伯',
    position: '建築師',
    bio: [
        "陳彥伯建築師事務所 主持建築師(2010~迄今)",
        "國雄建設有限公司 開發部建築師(2008~2010)",
        "林德群建築師事務所 專案設計師(2005~2008)",
        "國立成功大學 建築研究所碩士畢業(2003~2005)",
        "逢甲大學 建築系學士畢業(1998~2003)",
        "逢甲大學建築系兼講師(2022~)",
    ],
    awards: [
        "2022第24屆國家建築金質獎",
    ],
    workImages: [
        { url: new URL('@/assets/images/teams/01-01.png', import.meta.url).href },
        { url: new URL('@/assets/images/teams/01-02.png', import.meta.url).href },
    ]
};

const switchLink = {
    router: { name: 'teams-tsai' },
    name: '公設 ‧ 景觀設計'
};

</script>

<template>
<TeamMemberLayout :person="person" :switch-link="switchLink"></TeamMemberLayout>
</template>

<style scoped>
</style>
