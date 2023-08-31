import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import ContentLayout from '@/layouts/ContentLayout.vue'
import LocationView from '@/views/LocationView.vue'
import StructureView from '@/views/StructureView.vue'
import MaterialView from '@/views/MaterialView.vue'
import AboutView from '@/views/AboutView.vue'

// Location 地段
import EnvironmentView from '@/views/Location/EnvironmentView.vue'

// Structure 規劃
import ApperanceView from '@/views/Structure/ApperanceView.vue'

// Material 選材

// About 業績實景

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			redirect: { name: 'environment' },
			// component: HomeView
		},
		{
			path: '/',
			component: ContentLayout,
			children: [
				{
					path: 'location',
					name: 'location',
					component: LocationView,
					redirect: { name: 'environment' },
					children: [
						{
							path: 'environment',
							name: 'environment',
							component: EnvironmentView,
						},
					]
				},
				{
					path: 'structure',
					name: 'structure',
					component: StructureView,
					redirect: { name: 'apperance' },
					children: [
						{
							path: 'apperance',
							name: 'apperance',
							component: ApperanceView,
						},
					]
				},
				{
					path: 'material',
					name: 'material',
					component: MaterialView,
				},
				{
					path: 'about',
					name: 'about',
					component: AboutView,
				},
			]
		},
	]
})

export default router
