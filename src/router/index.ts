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
import FirstFloorView from '@/views/Structure/FirstFloorView.vue'
import RoofView from '@/views/Structure/RoofView.vue'
import StandardView from '@/views/Structure/StandardView.vue'
import StandardIndividualView from '@/views/Structure/StandardIndividualView.vue'
import BasementView from '@/views/Structure/BasementView.vue'

// Material 選材

// About 業績實景

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView
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
						{
							path: '1-floor',
							name: '1-floor',
							component: FirstFloorView,
						},
						{
							path: 'roof',
							name: 'roof',
							component: RoofView,
						},
						{
							path: 'standard',
							name: 'standard',
							component: StandardView,
						},
						{
							path: 'standard-individual/:type?',
							name: 'standard-individual',
							component: StandardIndividualView,
							props: true,
						},
						{
							path: 'basement',
							name: 'basement',
							component: BasementView,
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
