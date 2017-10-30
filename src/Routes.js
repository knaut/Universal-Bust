import App from './components/App.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Contact from './components/Contact.js';

const routes = [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home
      },
      {
        path: '/about',
        component: About
      },
      {
        path: '/contact',
        component: Contact
      }
    ]
  }
];

export default routes;