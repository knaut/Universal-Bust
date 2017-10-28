import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import Index from '../components/Index.jsx';
import renderHead from './renderHead.js';

export default function handleRender( store ) {

  console.log(store);

  const html = renderToString(
    <Provider store={store}>
      <Index/>
    </Provider>
  );

  const preloadedState = store.getState();

  return renderHead( html, preloadedState );
}