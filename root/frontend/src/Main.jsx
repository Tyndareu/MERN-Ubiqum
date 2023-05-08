import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './Main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Landing } from './containers/Landing'
import { Cities } from './containers/Cities'
import { NewCity } from './containers/NewCity'
import { Provider } from 'react-redux'
import { store } from './app/store'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />
  },
  {
    path: '/cities',
    element: <Cities />
  },
  {
    path: '/newCity',
    element: <NewCity />
  },
  {
    path: '/newcity/:name',
    element: <NewCity />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
