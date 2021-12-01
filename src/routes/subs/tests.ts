import DefaultLayout from '~/layouts/default/Layout.vue'

const route = {
  path: '/tests',
  component: DefaultLayout,
  children: [
    {
      path: 'siderControl',
      component: () => import('~/views/Tests/SiderControl.vue'),
    },
    {
      path: 'routerViewReload',
      component: () => import('~/views/Tests/RouterViewReload.vue'),
    },
    {
      path: 'antdv',
      component: () => import('~/views/Tests/Antdv.vue'),
    },
  ],
}

export default route
