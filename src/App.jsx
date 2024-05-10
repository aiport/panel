import React from 'react'
import Login from './pages/Login'
import Home from './pages/Home'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
export default function App() {
  const path = window.location.pathname;
  const router = createBrowserRouter([
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/',
      element: <Home />,
    }
  ]);
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}
