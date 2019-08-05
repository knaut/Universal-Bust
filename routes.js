// COMPONENTS
import App from './app'

// SCREENS
import Home from './app/components/Home'

const Routes = [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home
      },
      /*
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
      */
    ]
  }
]

export default Routes
