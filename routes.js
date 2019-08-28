// COMPONENTS
import App from './app/App'
import Home from './app/components/Home'
import About from './app/components/About'

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
        exact: true,
        component: About
      },
    ]
  }
]

export default Routes
