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
  ],
}

export default route
