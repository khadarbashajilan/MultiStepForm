import './index.css'
import React from 'react';
import Layout from './layouts/Layout';
import NotFound from './pages/NotFound';
import PersonalInfo from './pages/PersonalInfo';
import Address from './pages/Address';
import Preferences from './pages/Preferences';
import Summary from './pages/Summary';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const routes = [
  {
    path: "/",
    element: <Layout/>,
    errorElement:<NotFound/>,
  children: [
    {
      path:"/",
      element: <PersonalInfo/>
    },
    {
      path: "/address",
      element: <Address/>
    },
    {
      path: "/preferences",
      element: <Preferences/>
    },
    {
      path: "/summary",
      element: <Summary/>
    }
  ]
}
]

const router = createBrowserRouter(routes)

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
