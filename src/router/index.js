import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index/index.vue';
Vue.use(Router);

const router = new Router({
	mode: "",//默认hash
	scrollBehavior(to, from, savePosition) {
		if (savePosition) {
			return savePosition;
		} else {
			return { x: 0, y: 0 }
		}
	},
	routes: [{
		path: '/',
		name: '主页',
		component: index,
		redirect: '/',
		children: [
			{
			path: '/',
			name: 'main',
			component: resolve => require(['../components/main/index.vue'], resolve),
			children: [{
					path: '/',
					name: '法院导入',
					component: resolve => require(['../components/fyNameExport/index.vue'], resolve)	
				},{
					path: '/fyAhExport',
					name: '案号导入',
					component: resolve => require(['../components/fyAhExport/index.vue'], resolve)
				},{
					path: '/fyAjbsExport',
					name: '案标导入',
					component: resolve => require(['../components/fyAjbsExport/index.vue'], resolve)
				},{
					path: '/fyCodeExport',
					name: '法标导入',
					component: resolve => require(['../components/fyCodeExport/index.vue'], resolve)
				},{
					path: '/excelExport',
					name: 'excel导入',
					component: resolve => require(['../components/excelExport/index.vue'], resolve)
				},{
					path: '/sourceExport',
					name: '导出资源',
					component: resolve => require(['../components/sourceExport/index.vue'], resolve)
				},{
					path: '/sourceSize',
					name: '资源大小',
					component: resolve => require(['../components/sourceSize/index.vue'], resolve)
				},{
					path: '/singlePersonExport',
					name: '单个人员',
					component: resolve => require(['../components/singlePersonExport/index.vue'], resolve)
				},{
					path: '/fyPersonExport',
					name: '法院人员',
					component: resolve => require(['../components/fyPersonExport/index.vue'], resolve)
				}
			]
		}
	]
	}
	]
});
export default router;