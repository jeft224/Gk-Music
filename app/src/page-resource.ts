/**
 * 页面资源集合，请不要在主进程中引用
 */

// 设为 undefined 将不会创建路由，一般用于重定向页面
export const Home = undefined

export const Recommend = import('./views/recommend/recommend')
export const Transceiver = import('./views/transceiver/transceiver')
export const PageParams = import('./views/recommend/page-params')
export const LogViewer = import('./views/log-viewer/log-viewer')
export const About = import('./views/about/about')
export const Video = import('./views/video/video')

export const NoMatch = import('./views/no-match/no-match')

// 同步引用，注意这不会出发 beforeRouter
export { default as AlertModal } from './views/modals/alert-modal'
