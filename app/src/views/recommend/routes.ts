const routes: RouteConfig[] = [
  {
    key: 'Recommend',
    path: '/recommend',
    createConfig: {
      single: false,
    },
  },
  {
    key: 'PageParams',
    path: '/page-params/:test',
  },
]

export default routes
