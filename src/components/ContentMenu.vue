<script setup lang="ts">
import { ref, watch, onMounted  } from 'vue';
import { useRoute } from 'vue-router'
import RouteButton from '@/components/RouteButton.vue';

const menuItems = ref([
	{ 
        path:'/location', 
        englishText: 'ONLY ONE', 
        chineseText: '地　段', 
        subItems: [
            { name:'environment', path: '/location/environment', text: '周邊環境' }
        ]  
    },
	{ 
        path:'/structure',    
        englishText: 'MOST ONE',    
        chineseText: '規　劃', 
        subItems: [
            { name:'3Dvideo', path: '/structure/3Dvideo', text: '3D影片' },
            { name:'apperance', path: '/structure/apperance', text: '外觀3D' },
            { name:'1floor', path: '/structure/1floor', text: '1F全面平圖' },
            { name:'roof', path: '/structure/roof', text: 'RF全面平圖' },
            { name:'standard', path: '/structure/standard', text: '標準層' },
            { name:'basement', path: '/structure/basement', text: '地下室' }
        ]  
    },
	{ 
        path:'/material',   
        englishText: 'TOP ONE',   
        chineseText: '選　材', 
        subItems: []  
    },
	{ 
        path:'/about',   
        englishText: 'GRAVD ONE',   
        chineseText: '業績實景', 
        subItems: [
            { name:'concept', path: '/about/concept', text: '理念' },
            { name:'cases', path: '/about/cases',  text: '業績' },
            { name:'teams', path: '/about/teams', text: '團隊' },
        ]    
    },
]);

const activeSubMenu = ref('');
const route = useRoute();

const showSubMenu = (menuId: any) => {
    activeSubMenu.value = menuId;
};

// 決定主選單是否要 active
const isMainMenuItemActive = (currentMenuItem: any) => {
    let isActive : boolean = false;
    const currentRoutePath : string = route.path;               // '/material/menu'
    const currentMenuItemPath : string = currentMenuItem.path;  // '/material'
    if (currentRoutePath.includes(currentMenuItemPath)) {
        isActive = true;
    } else {
        isActive = false;
    }
    return isActive;
};

// 如果有 hover 過去那個主選單就會變成 active（展開），但結束 hover 不會截除狀態
const isActive = (itemId: string) => {
    if (activeSubMenu.value !== '') {
        return activeSubMenu.value === itemId;
    }
    return false;
};

// 透過路由名稱來判斷子選單是否要 active
const isSubActive = (routerName: string) => {
    const name: any = route.name;
    const parts = name.split("-");

    let result = route.name;
    if (parts.length > 1) {
        result = parts[0];
    }

    return result === routerName;
};

watch(
    () => route.path,
    () => {

    }
);

onMounted(() => {

})

</script>

<template>
<div class="w-full h-full bg-primary-100">
    <div class="top flex justify-center items-center">
        <RouteButton :to="{ name: 'home' }" class="logo-container">
            <img src="@/assets/images/logo.png" alt="" class="object-cover">
        </RouteButton>
    </div>
    <div class="bottom flex justify-center items-start">
        <ul class="ml-4">

            <li v-for="(item, i) in menuItems" :key="i" class="mb-6">
                <RouteButton :to="item.path" @mouseover="showSubMenu(item.path)" class="group text-start">
                    <div v-if="isMainMenuItemActive(item)" class="flex flex-col">
                        <span class="text-2xl text-zinc-100 english-font stretch">{{ item.englishText }}</span>
                        <span class="text-md text-zinc-100">{{ item.chineseText }}</span>
                    </div>
                    <div v-else class="flex flex-col">
                        <span class="text-2xl text-zinc-400 english-font stretch group-hover:text-zinc-100 transition-300-out">{{ item.englishText }}</span>
                        <span class="text-md text-zinc-400 group-hover:text-zinc-100 transition-300-out">{{ item.chineseText }}</span>
                    </div>
                </RouteButton>

                <div v-if="isActive(item.path) || isMainMenuItemActive(item)" class="mt-2">
                    <ul>

                        <li v-for="(subItem, j) in item.subItems" :key="j" class="flex flex-row items-center mb-1">
                            <div class="w-6 mr-4">
                                <img v-if="isSubActive(subItem.name)" src="@/assets/images/selector.svg" alt="" class="object-cover">
                            </div>
                            <RouteButton :to="subItem.path" class="text-start">
                                <span v-if="isSubActive(subItem.name)" class="text-md text-zinc-100 tracking-wider">{{ subItem.text }}</span>
                                <span v-else class="text-md text-zinc-400 tracking-wider hover:text-zinc-100 transition-300-out">{{ subItem.text }}</span>
                            </RouteButton>
                        </li>

                    </ul>
                </div>
            </li>

        </ul>
    </div>
</div>
</template>

<style scoped>
.logo-container {
    width: 38%;
    margin-top: 10%;
    margin-left: 8%;
}

.top {
    width: 100%;
    height: 40%;
}

.bottom {
    width: 100%;
    height: 50%;
}

.stretch {
    transform-origin: left center;
    transform: scaleX(1.16) scaleY(0.98);
}
</style>