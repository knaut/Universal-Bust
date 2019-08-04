// IMPORT
import Hapi from 'hapi';
import React from 'react';
import initialState from './initialState.js';

// SETUP
const server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: 8000
});

// SERVER UTILS
import renderHead from './src/Utils/renderHead.js';
import renderRoute from './src/Utils/renderRoute.js'

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
    path: '/assets/{param*}',
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
      renderRoute( request.path, initialState, reply );
    }
  });

  server.route({
    method: 'GET',
    path: '/{param*}',
    handler: function(request, reply) {
      renderRoute( request.path, initialState, reply );
    }
  });

  server.start(function() {
    console.log('Server started: ' + server.info.uri);
  });

});
