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

// Facilities 公設
import FacilitiesView from '@/layouts/FacilitiesLayout.vue'
import LobbyView from '@/views/Structure/Facilities/LobbyView.vue'
import MailboxView from '@/views/Structure/Facilities/MailboxView.vue'
import ReadingView from '@/views/Structure/Facilities/ReadingView.vue'
import StairView from '@/views/Structure/Facilities/StairView.vue'
import LoungeView from '@/views/Structure/Facilities/LoungeView.vue'
import GymView from '@/views/Structure/Facilities/GymView.vue'
import OasisView from '@/views/Structure/Facilities/OasisView.vue'
import RelaxView from '@/views/Structure/Facilities/RelaxView.vue'

// Material 選材
import MaterialMenuView from '@/views/Material/MaterialMenuView.vue'
import PanasonicKitchenView from '@/views/Material/PanasonicKitchenView.vue'
import RinnaiView from '@/views/Material/RinnaiView.vue'
// import BoschView from '@/views/Material/BoschView.vue'
import PanasonicBathroomView from '@/views/Material/PanasonicBathroomView.vue'
// import InnociView from '@/views/Material/InnociView.vue'
import HansgroheView from '@/views/Material/HansgroheView.vue'
import LifeGearView from '@/views/Material/LifeGearView.vue'
import WaferlockView from '@/views/Material/WaferlockView.vue'
import KronotexView from '@/views/Material/KronotexView.vue'
import DaikenView from '@/views/Material/DaikenView.vue'
import ElectricCarView from '@/views/Material/ElectricCarView.vue'

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
							path: '1floor',
							name: '1floor',
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
						{
							path: 'facilities',
							name: 'facilities',
							component: FacilitiesView,
							redirect: { name: 'lobby' },
							children: [
								{
									path: 'lobby',
									name: 'lobby',
									component: LobbyView,
								},
								{
									path: 'mailbox',
									name: 'mailbox',
									component: MailboxView,
								},
								{
									path: 'reading',
									name: 'reading',
									component: ReadingView,
								},
								{
									path: 'stair',
									name: 'stair',
									component: StairView,
								},
								{
									path: 'lounge',
									name: 'lounge',
									component: LoungeView,
								},
								{
									path: 'gym',
									name: 'gym',
									component: GymView,
								},
								{
									path: 'oasis',
									name: 'oasis',
									component: OasisView,
								},
								{
									path: 'relax',
									name: 'relax',
									component: RelaxView,
								},
							]
						}
					]
				},
				{
					path: 'material',
					name: 'material',
					component: MaterialView,
					redirect: { name: 'material-menu' },
					children: [
						{
							path: 'menu',
							name: 'material-menu',
							component: MaterialMenuView,
						},
						{
							path: 'panasonickitchen',
							name: 'panasonickitchen',
							component: PanasonicKitchenView,
						},
						{
							path: 'rinnai',
							name: 'rinnai',
							component: RinnaiView,
						},
						{
							path: 'panasonicbathroom',
							name: 'panasonicbathroom',
							component: PanasonicBathroomView,
						},
						{
							path: 'hansgrohe',
							name: 'hansgrohe',
							component: HansgroheView,
						},
						{
							path: 'lifegear',
							name: 'lifegear',
							component: LifeGearView,
						},
						{
							path: 'waferlock',
							name: 'waferlock',
							component: WaferlockView,
						},
						{
							path: 'kronotex',
							name: 'kronotex',
							component: KronotexView,
						},
						{
							path: 'daiken',
							name: 'daiken',
							component: DaikenView,
						},
						{
							path: 'electriccar',
							name: 'electriccar',
							component: ElectricCarView,
						}
					]
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
