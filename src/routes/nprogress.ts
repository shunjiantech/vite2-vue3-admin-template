import { useNProgress } from '@vueuse/integrations'
import 'nprogress/nprogress.css'
import './nprogress.css'
import router from './router'

const { isLoading } = useNProgress()

router.beforeEach(() => {
  isLoading.value = true
})

router.afterEach(() => {
  isLoading.value = false
})
