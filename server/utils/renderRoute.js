// IMPORTS
import React from 'react'

// COMPONENTS
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router'

// UTILS
import { renderToString } from 'react-dom/server'
import { matchRoutes, renderRoutes } from 'react-router-config'
import generateStore from './utils/generateStore.js'

// import renderHead from './renderHead.js'

// CONFIG
import Routes from '../../Routes.js'

const renderRoute = function (url, state, reply) {
  const store = generateStore(state)
  const branch = matchRoutes(Routes, url)
  const promises = branch.map(({ route }) => {
    let fetchData = route.component.fetchData

    return fetchData instanceof Function ? fetchData(store) : Promise.resolve(null)
  })

  return Promise.all(promises).then((data) => {
    let context = {}

    const content = renderToString(
      <Provider store={store}>
        <StaticRouter location={url} context={context}>
          {renderRoutes(Routes)}
        </StaticRouter>
      </Provider>
    )

    // const html = renderHead(content, state)


    // reply(html)

    return content
  })
}

export default renderRoute
