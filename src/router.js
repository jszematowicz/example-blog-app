/*Routing na stronie - szczególnie ważna jest ścieżka do konkretnego wpisu, bazująca na parametrze entryID*/

import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import AboutMe from './views/AboutMe.vue'
import Contact from './views/Contact.vue'
import Entry from './views/Entry.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/aboutme/',
      name: 'about',
      component: AboutMe
    },
    {
      path: '/contact/',
      name: 'contact',
      component: Contact
    },
    {
      path: '/entry/:entryID',
      name: 'entry',
      component: Entry,
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
