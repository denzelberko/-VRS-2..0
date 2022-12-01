import Vue from 'vue'
import Router from 'vue-router'
import Recomendations from '@/components/Recomendations'
import SearchTrips from '@/components/SearchTrips'
import TripPage from '@/components/TripPage'
import AdminPage from '@/components/AdminPage'
import Home from '@/components/Home'




Vue.use(Router)

export default new Router({
  routes: [
    
    {
      path: '/',
      name: 'Recommendations',
      component: Recomendations

    },
    {
      path: '/searchtrips',
      name: 'SearchTrips',
      component: SearchTrips

    },
    {
      path: '/trippage',
      name: 'TripPage',
      component: TripPage

    },
    {
      path: '/adminpage',
      name: 'AdminPage',
      component: AdminPage

    },
    {
      path: '/Home',
      name: 'Home',
      component: Home

    }
    
    
  ]
})
