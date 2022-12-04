import Vue from 'vue'
import Router from 'vue-router'
import Recommendations from '@/components/Recomendations'
import SearchTrips from '@/components/SearchTrips'
import TripPage from '@/components/TripPage'
import AdminPage from '@/components/AdminPage'
import Home from '@/components/Home'
import Login from '@/components/Login'




Vue.use(Router)

export default new Router({
  routes: [
    
    {
      path: '/',
      name: 'Home',
      component: Home

    },
    {
      path: '/searchtrips',
      name: 'SearchTrips',
      component: SearchTrips

    },
    {
      path: '/trippage/:id',
      name: 'TripPage',
      component: TripPage

    },
    {
      path: '/adminpage',
      name: 'AdminPage',
      component: AdminPage

    },
    {
      path: '/recommendations',
      name: 'Recommendations',
      component: Recommendations

    },
    {
      path: '/login',
      name: 'login',
      component: Login

    }
    
    
  ]
})
