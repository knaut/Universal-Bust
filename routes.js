// COMPONENTS
import App from './app/App'
import Home from './app/components/Home'
import Labs from './app/components/Labs'
import Trees from './app/components/Trees'
import Bikes from './app/components/Bikes'

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
        path: '/labs',
        exact: true,
        component: Labs
      },
      {
        path: '/trees',
        exact: true,
        component: Trees
      },
      {
        path: '/bikes',
        exact: true,
        component: Bikes
      }
    ]
  }
]

export default Routes
