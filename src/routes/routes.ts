import DefaultLayout from '~/layouts/Layout.vue'

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '/',
        component: () => import('~/views/Home.vue'),
      },
      {
        path: '/other',
        component: () => import('~/views/Other.vue'),
      },
    ],
  },
]

export default routes
