<script setup lang="ts">
import RouteButton from '@/components/RouteButton.vue';

const people = [
    {
        router: { name: 'teams-Liu' },
        transition: 'slide-fade-up',
        avatar: new URL('@/assets/images/teams/person-01.png', import.meta.url).href,
        title: '建築設計',
        name: '劉鎮忠',
        position: '建築師',
    },
    {
        router: { name: 'teams-chang' },
        transition: 'slide-fade-down',
        avatar: new URL('@/assets/images/teams/person-02.png', import.meta.url).href,
        title: '公設 ‧ 景觀設計',
        name: '張世利',
        position: '創意總監',
    }
];

</script>

<template>
<div class="w-full h-full flex flex-row">
    <div class="w-1/2 h-full flex justify-end">
        <div class="w-2/3 h-full bg-primary-100 flex justify-center">
            
            <Transition :name="people[0].transition" appear>
                <RouteButton :to="people[0].router" class="flex flex-col text-zinc-50 w-4/5 mt-56" style="height: 38%;">
                    <div class="w-full overflow-hidden mb-4">
                        <img :src="people[0].avatar" class="object-cover w-full h-full mainImage" alt="">
                    </div>
                    <div class="w-full flex flex-row items-center mb-2">
                        <span class="text-xl mr-2">{{ people[0].title }}</span>
                        <div class="w-80 h-px bg-zinc-50"></div>
                    </div>
                    <div class="w-full flex flex-row items-end">
                        <span class="text-2xl font-bold mr-2">{{ people[0].name }}</span>
                        <span class="font-bold">{{ people[0].position }}</span>
                    </div>
                </RouteButton>
            </Transition>

        </div>
    </div>

    <div class="w-1/2 h-full flex">
        <div class="w-2/3 h-full flex justify-center items-end">

            <Transition :name="people[1].transition" appear>
                <RouteButton :to="people[1].router" class="flex flex-col text-zinc-50 w-4/5 mb-56" style="height: 38%;">
                    <div class="w-full overflow-hidden mb-4">
                        <img :src="people[1].avatar" class="object-cover w-full h-full mainImage" alt="">
                    </div>
                    <div class="w-full flex flex-row items-center mb-2">
                        <span class="text-xl mr-2">{{ people[1].title }}</span>
                        <div class="w-64 h-px bg-zinc-50"></div>
                    </div>
                    <div class="w-full flex flex-row items-end">
                        <span class="text-2xl font-bold mr-2">{{ people[1].name }}</span>
                        <span class="font-bold">{{ people[1].position }}</span>
                    </div>
                </RouteButton>
            </Transition>

        </div>
        <div class="w-1/3 h-full flex justify-center items-center">
            <div class="english-font text-zinc-50 text-3xl vertiacl-text">PROFESSIONAL TEAM</div>
        </div>
    </div>

    <!-- <div class="top-area bg-primary-100 flex flex-row">

        <div class="card-container h-full flex flex-row items-start justify-around">
            <template v-for="(person, index) in people" :key="index">
                <Transition :name="person.transition" appear>
                    <div class="person-card">
                        <RouteButton :to="person.router" class="">
                            <div class="overflow-hidden rounded-2xl">
                                <img :src="person.avatar" alt="" class="object-cover w-full" />
                            </div>
                            <div class="mt-6 text-white font-size-24 flex flex-row items-center">
                                <span class="mr-3">{{ person.title }}</span>
                                <span class="line"></span>
                            </div>
                            <div class="mt-2 text-white DF-LiHei-Bd-WIN-BF flex flex-row items-end">
                                <span class="font-size-30 mr-2">{{ person.name }}</span> 
                                <span class="text-xl mb-1">{{ person.position }}</span>
                            </div>
                        </RouteButton>
                    </div>
                </Transition>
            </template>
        </div>

        <div class="container-right h-full relative">
			<span class="text-white english-font inline-block text-rotate text-2xl absolute title-position">PROFESSIONAL TEAM</span>
        </div>

    </div>
    <div class="down-area">
    </div>
    <div class="h-full absolute cube">
        <div class="w-full bg-primary-400 cube-top"></div>
        <div class="w-full bg-primary-700 cube-down"></div>
    </div> -->
</div>
</template>

<style scoped>
.vertiacl-text {
    writing-mode: vertical-lr;
}

.mainImage {
    transform: scale(1.1);
    transition: all 2.0s ease-out;
}

.mainImage:hover {
    transform: scale(1.0);
}


/* ========================== */
.slide-fade-up-enter-active {
	transition: all 1.8s ease-out;
}

.slide-fade-up-leave-active {
	transition: all 1.8s ease-out;
}

.slide-fade-up-enter-from,
.slide-fade-up-leave-to {
	transform: translateY(80px);
	opacity: 0;
}


/* ========================== */
.slide-fade-down-enter-active {
	transition: all 1.8s ease-out;
}

.slide-fade-down-leave-active {
	transition: all 1.8s ease-out;
}

.slide-fade-down-enter-from,
.slide-fade-down-leave-to {
	transform: translateY(-80px);
	opacity: 0;
}
</style>
