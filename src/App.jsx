import React from 'react'
import Login from './pages/Login'
import Home from './pages/Home'
import Navbar from './pages/Navbar'
import MyTerminal from './pages/Terminal'
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
      element: <><Navbar/><Home/></>,
    },
    {
      path: '/terminal',
      element:<><div style={{ display: 'flex', width:'100%'}}>
      <Navbar/><MyTerminal/>
    </div> </>,
    },
  ]);
  return (
    <>
    {/* {path !== '/login' && <Navbar />} */}
    <RouterProvider router={router}/>
    </>
  )
}
