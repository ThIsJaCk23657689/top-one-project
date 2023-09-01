<script setup lang="ts">
import { ref, watch, onMounted  } from 'vue';
import { RouterLink, useRoute } from 'vue-router'

const menuItems = ref([
	{ 
        path:'/location', 
        englishText: 'ONLY ONE', 
        chineseText: '地　段', 
        subItems: [
            { name:'', path: '#', text: '地段' },
            { name:'environment', path: '/location/environment', text: '周邊環境' }
        ]  
    },
	{ 
        path:'/structure',    
        englishText: 'MOST ONE',    
        chineseText: '規　劃', 
        subItems: [
            { name:'apperance', path: '/structure/apperance', text: '外觀3D' },
            { name:'', path: '#', text: '1F全面平圖' },
            { name:'', path: '#', text: 'RF全面平圖' },
            { name:'', path: '#', text: '標準層' },
            { name:'', path: '#t', text: '地下室' }
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
        subItems: []    
    },
]);

const activeSubMenu = ref('');
const route = useRoute();

const showSubMenu = (menuId: any) => {
    activeSubMenu.value = menuId;
};

// 判斷當前路由是否跟主選單裡的其中子選單中有一致的路由（是透過路由名稱比較）
const isMainMenuItemActive = (currentMenuItem: any) => {
    let isActive : boolean = false;
    for ( let i = 0; i < currentMenuItem.subItems.length; i++ ) {
        const subItem = currentMenuItem.subItems[i];
        isActive = isSubActive(subItem.name);
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
        <RouterLink :to="{ name: 'home' }" class="logo-container">
            <img src="@/assets/images/logo.png" alt="" class="object-cover">
        </RouterLink>
    </div>
    <div class="bottom flex justify-center items-start">
        <ul class="ml-4">

            <li v-for="(item, i) in menuItems" :key="i" class="mb-6">
                <RouterLink :to="item.path" @mouseover="showSubMenu(item.path)" class="group">
                    <div v-if="isMainMenuItemActive(item)" class="flex flex-col">
                        <span class="text-2xl text-zinc-100 english-font stretch">{{ item.englishText }}</span>
                        <span class="text-md text-zinc-100">{{ item.chineseText }}</span>
                    </div>
                    <div v-else class="flex flex-col">
                        <span class="text-2xl text-zinc-400 english-font stretch group-hover:text-zinc-100 transition-300-out">{{ item.englishText }}</span>
                        <span class="text-md text-zinc-400 group-hover:text-zinc-100 transition-300-out">{{ item.chineseText }}</span>
                    </div>
                </RouterLink>

                <div v-if="isActive(item.path) || isMainMenuItemActive(item)" class="mt-2">
                    <ul>

                        <li v-for="(subItem, j) in item.subItems" :key="j" class="flex flex-row items-center mb-1">
                            <div class="w-6 mr-4">
                                <img v-if="isSubActive(subItem.name)" src="@/assets/images/selector.svg" alt="" class="object-cover">
                            </div>
                            <RouterLink :to="subItem.path">
                                <span v-if="isSubActive(subItem.name)" class="text-md text-zinc-100 tracking-wider">{{ subItem.text }}</span>
                                <span v-else class="text-md text-zinc-400 tracking-wider hover:text-zinc-100 transition-300-out">{{ subItem.text }}</span>
                            </RouterLink>
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