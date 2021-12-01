import defaultLayout from '~/layouts/default.vue'

const routes = [
  {
    path: '/',
    component: defaultLayout,
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
