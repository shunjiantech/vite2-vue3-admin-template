import DefaultLayout from '~/layouts/Layout.vue'
import {
  tests,
} from './subs'

const routes = [
  {
    path: '/',
    component: DefaultLayout,
  },
  tests,
]

export default routes
