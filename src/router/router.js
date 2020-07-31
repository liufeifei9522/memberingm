const routes = [
	{
		path: '', redirect:'/home' 
	},
	{
		path: '/home',
		name: 'home',
		component: () => import('@/views/home/home')
	},
	{
		path: '/shopping',
		name: 'shopping',
		component: () => import('@/views/shopping/shopping')
	},
	{
		path: '/wecht',
		name: 'wecht',
		component: () => import('@/views/wecht/wecht')
	},
	{
		path: '/car',
		name: 'car',
		component: () => import('@/views/car/car')
	},
	{
		path: '/user',
		name: 'user',
		component: () => import('@/views/user/user')
	},
]
export default routes