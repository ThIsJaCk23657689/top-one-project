<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { ArrowLongLeftIcon } from '@heroicons/vue/24/solid';
import RouteButton from '@/components/RouteButton.vue';

const props = defineProps<{
    person: {
        avatar: string;
        title: string;
        company: string;
        name: string;
        englishName: string;
        position: string;
        bio: string[];
        awardTitle: string;
        awards: string[];
        awardsGrid: string[][];
        workImages: { url: string }[];
    },
    switchLink: {
        router: { name: string };
        name: string;
    }
}>()

const visibleBioItems = ref<string[]>([]);
let currentBioIndex = 0;

const visibleAwardItems = ref<string[]>([]);
let currentAwardIndex = 0;

const visibleAwardGridItems = ref<string[][]>([]);
let currentAwardGridIndex = 0;

function showBioNextItem() {
    if (currentBioIndex < props.person.bio.length) {
        visibleBioItems.value.push( props.person.bio[currentBioIndex] );
        currentBioIndex++;
    }
}

function showAwardNextItem() {
    if (currentAwardIndex < props.person.awards.length) {
        visibleAwardItems.value.push( props.person.awards[currentAwardIndex] );
        currentAwardIndex++;
    }
}

function showAwardGridNextItem() {
    if (currentAwardIndex < props.person.awardsGrid.length) {
        visibleAwardGridItems.value.push( props.person.awardsGrid[currentAwardGridIndex] );
        currentAwardGridIndex++;
    }
}

onMounted(() => {
    showBioNextItem();
    showAwardNextItem();
    showAwardGridNextItem();
});

</script>

<template>
<div class="w-full h-full flex flex-row">

    <div class="w-2/5 h-full flex justify-start items-end">
        
        <div class="text-zinc-50 w-full mb-28 mx-20">
            <Transition name="fade" appear>
                <div class="overflow-hidden mb-6 w-2/3">
                    <img :src="person.avatar" alt="" class="object-cover w-full" />
                </div>
            </Transition>

            <div class="w-full text-xl font-bold mb-6">{{ person.company }}</div>
            <div class="w-full text-4xl font-bold border-b-2 border-zinc-400 pb-2 mb-4">{{ person.name }}</div>
            <div></div>
            <TransitionGroup name="fade" tag="ul" @after-enter="showBioNextItem">
                <li v-for="(line, index) in visibleBioItems" :key="index" class="mb-1">
                    {{ line }}
                </li>
            </TransitionGroup>
        </div>

    </div>
    <div class="w-3/5 h-full bg-zinc-50 flex flex-col">

        <div class="w-full flex justify-end items-center px-6 pt-32 pb-16">
            <RouteButton :to="switchLink.router" class="bg-primary-200 font-bold text-xl px-4 py-1">
                <span class="text-white DF-LiHei-Bd-WIN-BF font-size-24">{{ switchLink.name }}</span>
            </RouteButton>
        </div>

        <template v-if="person.workImages.length == 2">
            <div class="w-full flex flex-row px-24">
                <div v-for="(image, index) in person.workImages" class="overflow-hidden mr-4">
                    <div v-if="index === 1" class="w-full h-16"></div>
                    <img :src="image.url" class="object-cover" alt="">
                    <div v-if="index === 0" class="w-full h-16"></div>
                </div>
            </div>
        </template>
        <template v-if="person.workImages.length == 3">
            <div class="w-full flex flex-row justify-center items-center pl-16 pr-48 mb-6">
                <div class="overflow-hidden h-full mr-2">
                    <img :src="person.workImages[0].url" class="object-cover" alt="">
                </div>
                <div class="h-full flex flex-col">
                    <div class="overflow-hidden mb-2">
                        <img :src="person.workImages[1].url" class="object-cover" alt="">
                    </div>
                    <div class="overflow-hidden">
                        <img :src="person.workImages[2].url" class="object-cover" alt="">
                    </div>
                </div>
            </div>
        </template>

        <div class="w-full flex flex-row px-24">
            <span class="font-bold text-4xl mb-4 mt-4">{{ person.awardTitle }}</span>
        </div>

        <template v-if="person.awards.length === 0">
            <TransitionGroup name="fade" tag="ul" @after-enter="showAwardGridNextItem" class="w-full px-24 text-zinc-500 font-bold">
                <li v-for="(gridItem, index) in visibleAwardGridItems" :key="index" class="w-2/3 flex flex-row justify-between">
                    <div>{{ gridItem[0] }}</div>
                    <div>{{ gridItem[1] }}</div>
                    <div>{{ gridItem[2] }}</div>
                </li>
            </TransitionGroup>
        </template>
        <template v-else>
            <TransitionGroup name="fade" tag="ul" @after-enter="showAwardNextItem" class="px-24 text-zinc-500 font-bold">
                <li v-for="(line, index) in visibleAwardItems" :key="index">
                    {{ line }}
                </li>
            </TransitionGroup>
        </template>

        <div class="absolute flex justify-center items-center" style="right: 3%; bottom: 9%;">
            <div class="english-font text-zinc-400 text-3xl vertiacl-text">PROFESSIONAL TEAM</div>
        </div>
        
    </div>


    <!-- <div class="h-full area-left flex flex-col justify-between">
        
        <template v-for="(image, index) in person.workImages" :key="index">
            <div class="grow overflow-hidden">
                <Transition name="scale" appear>
                    <img :src="image.url" alt="" class="object-cover h-full work">
                </Transition>
            </div>
        </template>

    </div>
    <div class="h-full area-middle flex flex-col">

        <div>
            <Transition name="slide-fade-down" appear>
                <div class="overflow-hidden w-60">
                    <img :src="person.avatar" alt="" class="object-cover w-full" />
                </div>
            </Transition>

            <div class="mt-10 text-white DF-LiHei-Bd-WIN-BF">
                <span class="font-size-24 mr-2">{{ person.company }}</span><br/>
                <span class="font-size-24 mr-2">{{ person.name }}</span> 
                <span class="fon-size-20 mb-1">{{ person.position }}</span>
            </div>
            <div class="text-white mt-8">
                <span>學經歷</span><br/>
                <TransitionGroup name="fade" tag="ul" @after-enter="showBioNextItem">
                    <li v-for="(line, index) in visibleBioItems" :key="index">
                        {{ line }}
                    </li>
                </TransitionGroup>
                
            </div>
            <div class="text-white mt-8">
                <span>獲獎</span><br/>
                <TransitionGroup name="fade" tag="ul" @after-enter="showAwardNextItem">
                    <li v-for="(line, index) in visibleAwardItems" :key="index">
                        {{ line }}
                    </li>
                </TransitionGroup>
            </div>
        </div>

    </div>
    <div class="h-full area-right bg-primary-100 relative">
        
        <RouteButton :to="{ name: 'teams-menu' }" class="menu-button">
            <span class="text-white DF-LiHei-Bd-WIN-BF text-3xl vertical">{{ person.title }}</span>
            <ArrowLongLeftIcon class="text-white"></ArrowLongLeftIcon>
        </RouteButton>
    </div> -->
</div>
</template>

<style scoped>
.area-left {
    width: 46%;
    padding-right: 1%;
}

.area-middle {
    width: 33%;
    background-color: #333333;
    padding-top: 12%;
    padding-left: 4%;
}

.area-right {
    width: 21%;
    @apply bg-primary-100;
}

.vertiacl-text {
    writing-mode: vertical-lr;
}

.menu-button {
    position: absolute;
    bottom: 7%;
    left: 17%;
}

.work {
    transform: scale(1.1);
    transition: all 1.0s ease-out;
}

.work:hover {
    transform: scale(1.0);
}


/* ========================== */
.slide-fade-down-enter-active, .slide-fade-down-leave-active {
	transition: all 1.8s ease-out;
}

.slide-fade-down-enter-from, .slide-fade-down-leave-to {
	transform: translateY(-60px);
	opacity: 0;
}


/* ========================== */
.fade-enter-active, .fade-leave-active {
    transition: all 0.5s ease-out;
}
.fade-enter-from, .fade-leave-to {
    opacity: 0;
}

/* ========================== */
.scale-enter-to, .scale-leave-from {
    transform: scale(1.1);
}
.scale-enter-active, .scale-leave-active {
    transition: all 2.0s ease-out;
}
.scale-enter-from, .scale-leave-to {
    transform: scale(1.0);
}


</style>
