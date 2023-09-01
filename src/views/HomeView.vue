<script setup lang="ts">
import { ref, watch, onMounted  } from 'vue';
import { RouterLink } from 'vue-router'

const menuItems = ref([
	{
		routeName:'location', 
        englishText: 'ONLY ONE', 
        chineseText: '地　段', 
	},
	{
		routeName:'structure', 
        englishText: 'MOST ONE', 
        chineseText: '規　劃', 
	},
	{
		routeName:'material', 
        englishText: 'TOP ONE', 
        chineseText: '選　材', 
	},
	{
		routeName:'about', 
        englishText: 'GRAND ONE', 
        chineseText: '品　牌', 
	}
]);


</script>

<template>
	<div class="w-full h-full flex flex-row justify-center items-center">
		<div class="w-1/3 h-full flex flex-col">
			<div class="w-full h-4/5 bg-primary-100 relative overflow-hidden">

				<img src="@/assets/images/home-pic.jpg" alt="" class="object-cover w-full h-full">

				<Transition name="scale-down" appear>
					<img src="@/assets/images/one.svg" alt="" class="object-cover h-full absolute right-0 top-0">
				</Transition>

			</div>
			<div class="w-full h-1/5 bg-primary-200">
			</div>
		</div>
		<div class="w-2/3 h-full flex flex-col bg-primary-200">
			<div class="w-full h-4/5 bg-primary-200">
				<div class="w-full h-full flex justify-end items-end relative">

					<Transition name="slide-down" appear>
						<div class="absolute top-0 left-0 bg-primary-300 h-3/4 w-6"></div>
					</Transition>

					<Transition name="slide-fade-up" appear>
						<div class="absolute w-64 h-64" style="top: 30%; left: -1.5%">
							<img src="@/assets/images/home-logo.svg" alt="" class="oject-cover">
						</div>
					</Transition>

					<Transition name="fade" appear>
						<div class="absolute w-24 h-24" style="top: 49%; left: 27%">
							<img src="@/assets/images/builder-logo.svg" alt="" class="oject-cover">
						</div>
					</Transition>

					<ul class="flex flex-row relative w-5/6" style="margin-bottom: 14%;">
						<li v-for="(item, index) in menuItems" :key="index">
							<RouterLink :to="{ name: item.routeName }" class="group relative">
								<div class="flex flex-col mr-16">
									<span class="text-2xl text-zinc-400 english-font stretch group-hover:text-zinc-100 transition-300-out">{{ item.englishText }}</span>
								</div>
								
								<div class="flex flex-col mr-16">
									<span class="text-md text-zinc-400 group-hover:text-zinc-100 transition-300-out">{{ item.chineseText }}</span>
								</div>
							</RouterLink>
						</li>

						<Transition name="stretch-right" appear>
							<div class="absolute w-full h-px bg-zinc-400" style="top: 53%"></div>
						</Transition>
					
					</ul>

				</div>
			</div>

			<Transition name="slide-left" appear>
				<div class="w-full h-1/5 bg-primary-100"></div>
			</Transition>

		</div>
	</div>
</template>

<style scoped>
.stretch {
    transform-origin: left center;
    transform: scaleX(1.16) scaleY(0.98);
}
</style>