import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'index',
      component: require('@/pages/index').default
    },
    {
      path: '/about',
      name: 'about',
      component: require('@/pages/about').default
    },
    {
      path: '/watermark',
      name: 'watermark',
      component: require('@/pages/watermark').default,
    },
    {
      path: '/watermark/editor',
      name: 'watermarkEditor',
      component: require('@/pages/watermark/editor').default
    },
    {
      path: '/watermark/template',
      name: 'watermarkTemplate',
      component: require('@/pages/watermark/template').default
    },
    {
      path: '/splicer',
      name: 'splicer',
      component: require('@/pages/splicer').default,
    },
    {
      path: '/splicer/editor',
      name: 'splicerEditor',
      component: require('@/pages/splicer/editor').default
    },
    {
      path: '/splicer/template',
      name: 'splicerTemplate',
      component: require('@/pages/splicer/template').default
    },
    {
      path: '/textToImage',
      name: 'textToImage',
      component: require('@/pages/textToImage').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
