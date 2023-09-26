<script setup lang="ts">
import RouteButton from '@/components/RouteButton.vue';

const people = [
    {
        router: { name: 'teams-chen' },
        transition: 'slide-fade-up',
        avatar: new URL('@/assets/images/teams/person-01.png', import.meta.url).href,
        title: '建築設計',
        name: '陳彥伯',
        position: '建築師',
    },
    {
        router: { name: 'teams-tsai' },
        transition: 'slide-fade-down',
        avatar: new URL('@/assets/images/teams/person-02.png', import.meta.url).href,
        title: '公設 ‧ 景觀設計',
        name: '玖柞設計　蔡雅怡',
        position: '創意總監',
    }
];

</script>

<template>
<div class="w-full h-full flex flex-col">
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
.card-container {
    width: 77.54%;
    padding: 12% 9% 0 9%;
}

.container-right {
	width: 22.26%;
}

.text-rotate {
	transform: rotate(90deg);
}

.title-position {
	top: 19%;
	left: -13%;
	letter-spacing: 0.2rem;
}

.top-area {
    height: 85.6%;
}

.down-area {
    background-color: #333333;
    height: 14.4%;
}

.person-card {
	max-width: 98%;
}

.person-card img {
	width: 100%;
}

@media (max-width: 1536px) {
	.person-card {
		max-width: 41%;
	}
}




.line {
    flex-grow: 1;
    border-bottom: 1px solid white;
}

.cube {
    width: 15px;
    top: 0;
    left: 83.54%;
    z-index: 1;
}

.cube-top {
    height: 45%;
}

.cube-down {
    height: 55%;
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
