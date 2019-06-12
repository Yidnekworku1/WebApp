import Vue from 'vue'
import Router from 'vue-router'
import ShowQRcode from '@/components/ShowQRcode.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ShowQRcode',
      component: ShowQRcode
    }
  ]
})
