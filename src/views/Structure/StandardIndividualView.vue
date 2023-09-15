<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { RouterLink } from 'vue-router'
import FloorPlanWrapper from '@/layouts/FloorPlanWrapper.vue';
import CompressIcon from '@/components/icons/CompressIcon.vue';

const props = defineProps(['type']);

const currentType = ref(0);
const standards = [
    { 
        title: 'A', 
        url: new URL('@/assets/images/floor-plans/a.jpg', import.meta.url).href, 
        buttonImg: new URL('@/assets/images/floor-plans/buttons/a.svg', import.meta.url).href 
    },
    { 
        title: 'B', 
        url: new URL('@/assets/images/floor-plans/b.jpg', import.meta.url).href, 
        buttonImg: new URL('@/assets/images/floor-plans/buttons/B.svg', import.meta.url).href 
    },
    { 
        title: 'C', 
        url: new URL('@/assets/images/floor-plans/c.jpg', import.meta.url).href, 
        buttonImg: new URL('@/assets/images/floor-plans/buttons/c.svg', import.meta.url).href 
    },
    { 
        title: 'D', 
        url: new URL('@/assets/images/floor-plans/d.jpg', import.meta.url).href, 
        buttonImg: new URL('@/assets/images/floor-plans/buttons/d.svg', import.meta.url).href 
    },
    { 
        title: 'E', 
        url: new URL('@/assets/images/floor-plans/e.jpg', import.meta.url).href, 
        buttonImg: new URL('@/assets/images/floor-plans/buttons/e.svg', import.meta.url).href 
    },
    { 
        title: 'F', 
        url: new URL('@/assets/images/floor-plans/f.jpg', import.meta.url).href, 
        buttonImg: new URL('@/assets/images/floor-plans/buttons/f.svg', import.meta.url).href 
    }
];

function updateCurrentType() {
    if (props.type === '') {
        currentType.value = 0;
    } else if (props.type === 'A') {
        currentType.value = 0;
    } else if (props.type === 'B') {
        currentType.value = 1;
    } else if (props.type === 'C') {
        currentType.value = 2;
    } else if (props.type === 'D') {
        currentType.value = 3;
    } else if (props.type === 'E') {
        currentType.value = 4;
    } else if (props.type === 'F') {
        currentType.value = 5;
    }
}

onMounted(() => {
    updateCurrentType();
})

watch(() => props.type, () => {
    updateCurrentType();
});

</script>

<template>
    <FloorPlanWrapper :image-url="standards[currentType].url" :title="standards[currentType].title" :is-floor="false" :isAera="true">

        <div class="compress-container absolute flex justify-center items-center">
            <CompressIcon class="compress w-full h-full" />
        </div>

        <template v-slot:fixed>
            <div class="little-plan-container">
                <img :src="standards[currentType].buttonImg" alt="Image" class="object-cover little-plan" />
                
                <RouterLink :to="{ name: 'standard-individual', params: { type: 'A' } }" class="absolute a-part"></RouterLink>
                <RouterLink :to="{ name: 'standard-individual', params: { type: 'B' } }" class="absolute b-part"></RouterLink>
                <RouterLink :to="{ name: 'standard-individual', params: { type: 'C' } }" class="absolute c-part"></RouterLink>
                <RouterLink :to="{ name: 'standard-individual', params: { type: 'D' } }" class="absolute d-part"></RouterLink>
                <RouterLink :to="{ name: 'standard-individual', params: { type: 'E' } }" class="absolute e-part"></RouterLink>
                <RouterLink :to="{ name: 'standard-individual', params: { type: 'F' } }" class="absolute f-part"></RouterLink>
            </div>
        </template>

        
    </FloorPlanWrapper>
</template>

<style scoped>
.compress-container {
    width: 50px;
    height: 50px;
    right: 13%;
    top: 15%;
}

.compress {
    color: #717071;
}

.little-plan-container {
    width: 150px;
    position: absolute;
    bottom: 5%;
    right: 8%;
}

.a-part {
    width: 33.3333%;
    height: 33.3333%;
    top: 66.6666%;
    left: 0%;
}
.b-part {
    width: 33.3333%;
    height: 33.3333%;
    top: 66.6666%;
    left: 33.3333%;
}
.c-part {
    width: 33.3333%;
    height: 33.3333%;
    top: 33.3333%;
    left: 66.6666%;
}
.d-part {
    width: 33.3333%;
    height: 33.3333%;
    top: 0%;
    left: 66.6666%;
}
.e-part {
    width: 33.3333%;
    height: 33.3333%;
    top: 0%;
    left: 33.3333%;
}
.f-part {
    width: 33.3333%;
    height: 33.3333%;
    top: 33.3333%;
    left: 0%;
}
</style>
