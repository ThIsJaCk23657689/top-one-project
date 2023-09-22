<script setup lang="ts">
import RouteButton from '@/components/RouteButton.vue';

const props = defineProps<{
	active: boolean | false,
	visible: boolean | true,
}>()
</script>

<template>
	<RouteButton to="#" v-if="active" v-show="visible" class="border border-zinc-100 rounded-md text-center 
									px-6 py-1 text-primary-100 bg-zinc-100
							  		transition-300-out">
		<slot></slot>
	</RouteButton>
	<RouteButton to="#" v-else v-show="visible" class="border border-primary-200 rounded-md text-zinc-100 text-center 
							  		 px-6 py-1 bg-primary-200 hover:text-primary-100 hover:bg-zinc-100 hover:border-zinc-100
							  		 transition-300-out">
		<slot></slot>
	</RouteButton>
</template>

<style scoped>
</style>
