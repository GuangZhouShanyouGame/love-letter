/**
 * home module router
 */

import Router from 'vue-router'

function getView(viewName) {
  return (resolve, reject) => {
    require.ensure([], (require) => {
      let map = {
        'layout': require('views/layout'),
        'loading': require('views/loading'),
        'home': require('views/home'),
        'myLoveLetter': require('views/myLoveLetter'),
        'write': require('views/write'),
        'borrow': require('views/borrow'),
        'browse': require('views/browse'),
        'sendOut': require('views/sendOut'),
        'watchMovie': require('views/watchMovie'),
        'interception': require('views/interception')
        //'defaultView': require('views/home')
      }

      resolve(map[viewName])
    }, reject, 'home')
  }
}

let routes: Router.RouteConfig[] = [
  {
    name: '/',
    path: '/',
    component: getView('layout'),
    redirect: '/loading',
    children:[
      {
        name: 'loading',
        path: '/loading',
        component:getView('loading')
      },
      {
        name: 'home',
        path: '/home',
        component:getView('home')
      },
      {
        name: 'myLoveLetter',
        path: '/myLoveLetter',
        component:getView('myLoveLetter')
      },
      {
        name: 'write',
        path: '/write/:openid',
        component:getView('write')
      },
      {
        name: 'borrow',
        path: '/borrow/:openid',
        component:getView('borrow')
      },
      {
        name: 'browse',
        path: '/browse/:openid',
        component:getView('browse')
      },
      {
        name: 'sendOut',
        path: '/sendOut/:openid',
        component:getView('sendOut')
      },
      {
        name: 'watchMovie',
        path: '/watchMovie/:keys',
        component:getView('watchMovie')
      },
      {
        name: 'interception',
        path: '/interception',
        component: getView('interception')
      }
    ]
  }
]

routes.forEach((v) => {
  if (!v.redirect && !v.component) {
    v.component = getView(v.name)
  }
})

export default routes
