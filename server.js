// IMPORT
import Hapi from 'hapi';
import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';

// COMPONENTS
import Index from './src/components/Index.jsx';
// import Navigation from './src/components/Navigation.jsx';
import App from './src/components/App.jsx';

// REDUCERS
import counter from './src/reducers/counter.js';

// SETUP
const server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: 8000
});

// SERVER UTILS
import renderHead from './src/utils/renderHead.js';

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

      const store = createStore( rootReducer );
      console.log(store.getState())

      const htmlString = renderToString(
        <Provider store={store}>
          <div>
            <Index />
          </div>
        </Provider>
      );

      const renderedHead = renderHead(htmlString, store.getState());

      console.log(renderedHead)

      reply( renderedHead );
    }
  });

  server.start(function() {
    console.log('Server started: ' + server.info.uri);
  });

});
