const routes = [
  {
    path: '/',
    component: () => import('~/views/Home.vue'),
  },
  {
    path: '/other',
    component: () => import('~/views/Other.vue'),
  },
]

export default routes
