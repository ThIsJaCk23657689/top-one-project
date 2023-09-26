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
        position: string;
        bio: string[];
        awards: string[];
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

function showBioNextItem() {
    if (currentBioIndex < props.person.bio.length) {
        visibleBioItems.value.push( props.person.bio[currentBioIndex] );
        currentBioIndex++;
    }
}

function showAwardNextItem() {
    if (currentAwardIndex < props.person.bio.length) {
        visibleAwardItems.value.push( props.person.awards[currentAwardIndex] );
        currentAwardIndex++;
    }
}

onMounted(() => {
    showBioNextItem();
    showAwardNextItem();
});

</script>

<template>
<div class="w-full h-full flex flex-row">
    <div class="h-full area-left flex flex-col justify-between">
        
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
        <RouteButton :to="switchLink.router" class="switch-button">
            <span class="text-white DF-LiHei-Bd-WIN-BF font-size-24">{{ switchLink.name }}</span>
        </RouteButton>
        <RouteButton :to="{ name: 'teams-menu' }" class="menu-button">
            <span class="text-white DF-LiHei-Bd-WIN-BF text-3xl vertical">{{ person.title }}</span>
            <ArrowLongLeftIcon class="text-white"></ArrowLongLeftIcon>
        </RouteButton>
    </div>
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

.vertical{
    writing-mode: vertical-rl;
    text-orientation: mixed;
}

.switch-button {
    position: absolute;
    top: 16%;
    right: 11%;
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
