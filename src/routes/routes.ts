import DefaultLayout from '~/layouts/default/Layout.vue'
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
