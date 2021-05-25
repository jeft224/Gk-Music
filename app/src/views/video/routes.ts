const routes: RouteConfig[] = [
  {
    key: 'Video',
    path: '/video',
    windowOptions: {
      title: '视频',
    },
    createConfig: {
      showTitlebar: false,
      saveWindowBounds: true,
    },
  },
]

export default routes
