<script setup lang="ts">
import TeamMemberLayout from '@/layouts/TeamMemberLayout.vue';

const person = {
    avatar: new URL('@/assets/images/teams/person-02-01.png', import.meta.url).href,
    title: '公設景觀',
    company: '大述設計 設計總監',
    name: '張世利',
    englishName: 'Aaron Chang',
    position: '創意總監',
    bio: [
        "中國魯迅美術學院.環境藝術設計系",
        "2021-2022大述空間設計有限公司創辦人",
        "2009-2021台中伯特利建筑空間研究室設計總監",
        "2003-2009 上海臻建築建築設計諮詢有限公司首席設計師",
    ],
    awardTitle: "得獎記錄(伯特利設計團隊期間)",
    awards: [
        "2017.上海金外灘獎",
        "2018.第五届法国INNODESIGNPRIZE国际创新设计大奖",
        "2018.美國IDA國際設計獎",
        "2018.英國LICC Honorable mention",
        "2018.第9届國際空間設計大獎IDEA-TOPS艾特獎",
        "2018-2019義大利A'design",
        "2019.徳國 IF DISCIPLINE ARCHITECTURE",
        "2019.英國SBID-finalist",
        "2019.美國AMP Honorable Mention",
        "2019.日本 JCD國際商空設計大獎",
    ],
    awardsGrid: [],
    workImages: [
        { url: new URL('@/assets/images/teams/02-01.png', import.meta.url).href },
        { url: new URL('@/assets/images/teams/02-02.png', import.meta.url).href },
        { url: new URL('@/assets/images/teams/02-03.png', import.meta.url).href }
    ]
};

const switchLink = {
    router: { name: 'teams-liu' },
    name: '建築設計'
};

</script>

<template>
<TeamMemberLayout :person="person" :switch-link="switchLink"></TeamMemberLayout>
</template>

<style scoped>
</style>
