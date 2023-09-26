<script setup lang="ts">
import TeamMemberLayout from '@/layouts/TeamMemberLayout.vue';

const person = {
    avatar: new URL('@/assets/images/teams/person-02.png', import.meta.url).href,
    title: '公設 ‧ 景觀設計',
    company: '玖柞設計',
    name: '蔡雅怡',
    position: '創意總監',
    bio: [
        "逢甲大學建築系碩士",
        "逢甲大學建設學院博士班",
        "台中科大室設計系兼助理教授"
    ],
    awards: [
        "2021美國MUSE DESIGN AWARDS/白金獎",
        "    美國MUSE DESIGN AWARDS/金獎",
        "2020 台灣TINTA金邸獎",
        "2017 澳洲GOOD DESIGN AWRDS",
        "義大利  A'Design Award Competition/銅獎",
        "韓國  K-Design Award Winner",
        "2016 英國London Design Awards/佳作",
    ],
    workImages: [
        { url: new URL('@/assets/images/teams/works - top.png', import.meta.url).href },
        { url: new URL('@/assets/images/teams/works - middle.png', import.meta.url).href },
        { url: new URL('@/assets/images/teams/works - bottom.png', import.meta.url).href }
    ]
};

const switchLink = {
    router: { name: 'teams-chen' },
    name: '建築設計'
};

</script>

<template>
<TeamMemberLayout :person="person" :switch-link="switchLink"></TeamMemberLayout>
</template>

<style scoped>
</style>
