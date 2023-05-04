import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './Main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Landing } from './containers/Landing'
import { Cities } from './containers/Cities'
import { NewCity } from './containers/NewCity'

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
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
