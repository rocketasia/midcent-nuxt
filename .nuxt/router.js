import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _bfa6c932 = () => interopDefault(import('../pages/blog/author/_author.vue' /* webpackChunkName: "pages/blog/author/_author" */))
const _2d0ba731 = () => interopDefault(import('../pages/blog/tag/_tag.vue' /* webpackChunkName: "pages/blog/tag/_tag" */))
const _744fa559 = () => interopDefault(import('../pages/blog/_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _c8c13cf4 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/blog/author/:author?",
    component: _bfa6c932,
    name: "blog-author-author"
  }, {
    path: "/blog/tag/:tag?",
    component: _2d0ba731,
    name: "blog-tag-tag"
  }, {
    path: "/blog/:slug?",
    component: _744fa559,
    name: "blog-slug"
  }, {
    path: "/",
    component: _c8c13cf4,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
