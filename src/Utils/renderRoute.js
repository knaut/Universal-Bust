import React from 'react';
import { renderToString } from 'react-dom/server';

import { Provider } from 'react-redux';

import StaticRouter from 'react-router-dom/StaticRouter';
import { matchRoutes, renderRoutes } from 'react-router-config';

import Routes from '../Routes.js';
import generateStore from './generateStore.js';


const renderRoute = function(url) {
  const branch = matchRoutes(Routes, url);
  const promises = branch.map( ({ route }) => {
    
    console.log(route);
    let fetchData = route.component.fetchData;
    
    console.log(fetchData)
  });
};

export default renderRoute;