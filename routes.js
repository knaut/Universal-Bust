// COMPONENTS
import App from './app/App'
import Home from './app/components/Home'
import Labs from './app/components/Labs'

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
    ]
  }
]

export default Routes
