import Pos from '../components/page/Pos.vue'
import Hello from '../components/page/Hello.vue'

export default[
	// {
	// 	path:'/hello',
	// 	component:Hello
	// },
	{
		path:'/pos',
		component:Pos
	},
	{
		path:'/',
		redirect:'/pos'
	}
]