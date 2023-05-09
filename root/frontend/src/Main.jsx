import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Landing } from './containers/Landing'
import { Cities } from './containers/Cities'
import { NewCity } from './containers/NewCity'
import { Itineraries } from './containers/Itineraries'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import './Main.css'

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
    path: '/newCity/:id',
    element: <NewCity />
  },
  {
    path: '/Itineraries/:name',
    element: <Itineraries />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
