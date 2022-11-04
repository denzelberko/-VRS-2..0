import Vue from 'vue'
import Router from 'vue-router'
import Recomendations from '@/components/Recomendations'


Vue.use(Router)

export default new Router({
  routes: [
    
    {
      path: '/',
      name: 'Recomendations',
      component: Recomendations

    }
    
  ]
})
