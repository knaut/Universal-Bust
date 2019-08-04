// COMPONENTS
import App from './Components/App.js';

// PAGES
import Home from './Pages/Home.js';
import About from './Pages/About.js';
import Contact from './Pages/Contact.js';
import Counter from './Pages/Counter.js';

const Routes = [
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
      },
      {
        path: '/counter',
        component: Counter
      }
    ]
  }
];

export default Routes;