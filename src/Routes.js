import App from './components/App.jsx';
import Index from './components/Index.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';

const routes = [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: Index
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