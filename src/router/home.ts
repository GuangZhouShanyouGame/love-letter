/**
 * home module router
 */

import Router from 'vue-router'

function getView(viewName) {
  return (resolve, reject) => {
    require.ensure([], (require) => {
      let map = {
        'loading': require('views/loading'),
        'home': require('views/home'),
        'myLoveLetter': require('views/myLoveLetter'),
        'write': require('views/write'),
        'sendOut': require('views/sendOut'),
        'watchMovie': require('views/watchMovie'),
        'defaultView': require('views/home')
      }

      resolve(map[viewName])
    }, reject, 'home')
  }
}

let routes: Router.RouteConfig[] = [
  {
    name: '/',
    path: '/',
    redirect: '/loading'
  },
  {
    name: 'loading',
    path: '/loading'
  },
  {
    name: 'home',
    path: '/home'
  },
  {
    name: 'myLoveLetter',
    path: '/myLoveLetter'
  },
  {
    name: 'write',
    path: '/write'
  },
  {
    name: 'sendOut',
    path: '/sendOut'
  },
  {
    name: 'watchMovie',
    path: '/watchMovie'
  },
  {
    name: 'defaultView',
    path: '*'
  }
  // {
  //   name: 'todo',
  //   path: '/todo/:filter?'
  // },
  // {
  //   name: 'scoped',
  //   path: '/scoped'
  // }
]

routes.forEach((v) => {
  if (!v.redirect && !v.component) {
    v.component = getView(v.name)
  }
})

export default routes
