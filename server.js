// IMPORT
import Hapi from 'hapi';
import React from 'react';
import { renderToString } from 'react-dom/server';
import StaticRouter from 'react-router-dom/StaticRouter';
import { matchRoutes, renderRoutes } from 'react-router-config';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import * as Store from './src/Store.js';
const store = Store.store;

import routes from './src/Routes.js';

// DUX
import counter from './src/dux/counter.js';

// SETUP
const server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: 8000
});

// SERVER UTILS
import renderHead from './src/utils/renderHead.js';
import renderBody from './src/utils/renderBody.js';

// COMPONENTS
import Navigation from './src/components/Navigation.jsx';
import Index from './src/components/Index.jsx';

// HAPI ENTRANCE
server.register([
  // PLUGINS
  {
    register: require('inert')
  },
  {
    register: require('vision')
  }
], function(err) {
  if (err) {
    return console.error(err);
  }

  // STATIC ASSETS
  server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: 'dist',
        index: ['index.html']
      }
    }
  });

  server.route({
    method: 'GET',
    path: '/css/{param*}',
    handler: {
      directory: {
        path: 'dist',
        index: ['index.html']
      }
    }
  });

  // APP ROUTES
  server.route({
    method: 'GET',
    path: '/',
    handler: function(request, reply) {

      const rootReducer = combineReducers({
        counter
      });

      const store = createStore(
        rootReducer,
        { counter: 0 }
      );

      const branch = matchRoutes( routes, request.url );
      const promises = branch.map( ({ route }) => {
        let fetchData = route.component.fetchData;
        return fetchData instanceof Function ? fetchData( store ) : Promise.resolve(null)
      });

      console.log(branch)

      // return Promise.all(promises).then((data) => {
      //   let context = {};

      //   const content = renderToString(
      //     <Provider store={store}>
      //       <StaticRouter location={request.url} context={context}>
      //         {renderRoutes(routes)}
      //       </StaticRouter>
      //     </Provider>
      //   );

      //   console.log(content)
      // });

      

      // let context = {};

      // const jsxString = renderToString(
      //   <StaticRouter location={request.url} context={context}>
      //     {renderRoutes(routes)}
      //   </StaticRouter>
      // );

      

      // console.log(jsxString)
      // const appHtml = renderHead(
      //   renderToString( renderBody( Index, request.url, store.getState() ) ),
      //   store.getState()
      // );

      // console.log(appHtml)

      reply( 'hello' );
    }
  });

  server.start(function() {
    console.log('Server started: ' + server.info.uri);
  });

});
