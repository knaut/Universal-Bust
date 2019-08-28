// IMPORTS
import React from 'react'

// COMPONENTS
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router'
import { ConnectedRouter, push } from 'react-router-redux';

// UTILS
import { renderToString } from 'react-dom/server'
import { matchRoutes, renderRoutes } from 'react-router-config'
import generateStore from '../../utils/generateStore.js'

import renderHead from './renderHead.js'

// CONFIG
import Routes from '../../routes.js'

const renderRoute = function (url, state, env) {
  const generated = generateStore(state, env)
  console.log(generated)
  
  const { store, history } = generated
  
  const branch = matchRoutes(Routes, url)
  const promises = branch.map(({ route }) => {
    let fetchData = route.component.fetchData

    return fetchData instanceof Function ? fetchData(store) : Promise.resolve(null)
  })

  return Promise.all(promises).then((data) => {
    let context = {}

    const content = renderToString(
      <Provider store={store}>
        <StaticRouter history={history}>
          {renderRoutes(Routes)}
        </StaticRouter>
      </Provider>
    )

    const html = renderHead({
      jsxString: content,
      // preloadedState: store.getState()
    })

    return html
  })
}

export default renderRoute
