// IMPORT
import Hapi from 'hapi';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import * as Store from './src/Store.js';
const store = Store.store;

// SETUP
const server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: 8000
});

// SERVER UTILS
import renderHead from './src/utils/renderHead.js';
import renderBody from './src/utils/renderBody.js';

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

      const appHtml = renderHead(
        renderToString( renderBody( Index ) ),
        store.getState()
      );
      console.log(appHtml)

      reply( appHtml );
    }
  });

  server.start(function() {
    console.log('Server started: ' + server.info.uri);
  });

});
