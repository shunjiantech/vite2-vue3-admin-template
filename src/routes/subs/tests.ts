import DefaultLayout from '~/layouts/default/Layout.vue'

const route = {
  path: '/tests',
  component: DefaultLayout,
  meta: {
    menuTitle: '功能实验',
  },
  children: [
    {
      path: 'siderControl',
      component: () => import('~/views/Tests/SiderControl.vue'),
      meta: {
        menuTitle: '侧边栏收缩Menu',
        tabTitle: '侧边栏收缩Tab',
      },
    },
    {
      path: 'routerViewReload',
      component: () => import('~/views/Tests/RouterViewReload.vue'),
      meta: {
        menuTitle: '刷新页面Menu',
        tabTitle: '刷新页面Tab',
      },
    },
    {
      path: 'antdv',
      component: () => import('~/views/Tests/Antdv.vue'),
      meta: {
        menuAndTabTitle: 'antdv组件测试',
      },
    },
    {
      path: 'modal',
      component: () => import('~/views/Tests/ModalTest.vue'),
      meta: {
        menuAndTabTitle: '弹窗',
      },
    },
    {
      path: 'dayjsFormat',
      component: () => import('~/views/Tests/DayjsFormat.vue'),
      meta: {
        menuAndTabTitle: 'Dayjs组件测试',
      },
    },
  ],
}

export default route
