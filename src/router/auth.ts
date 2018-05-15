/**
 * auth module router
 */

import Router from 'vue-router'

function getView(viewName) {
  return (resolve, reject) => {
    require.ensure([], (require) => {
      let map = {
        'auth': require('views/auth'),
        'defaultView': require('views/auth')
      }

      resolve(map[viewName])
    }, reject, 'auth')
  }
}

let routes: Router.RouteConfig[] = [
  {
    name: 'auth',
    path: '/auth',
    component: getView('auth')
  }
]

routes.forEach((v) => {
  if (!v.redirect && !v.component) {
    v.component = getView(v.name)
  }
})

export default routes
