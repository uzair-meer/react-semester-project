import React from 'react'
import Home from './pages/Home'
import Cart from "./components/Cart"
import Header from './components/Header'
import Footer from './components/Footer'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Product from './components/Product'
import Men from './pages/Men'
import Women from './pages/Women'
import Blog from './pages/Blog'
  
const App = () => {

  const Layout = () => {
    return (
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    )
  }
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
        path: "/",
        element: <Home /> 
      },
      {
        path:"/cart",
        element: <Cart />
      },
      {
        path:"/product/:id",
        element: <Product />
      },
      {
        path:"/men",
        element: <Men />
      },
      {
        path:"/women",
        element: <Women />
      },
      {
        path:"/blog",
        element: <Blog />
      }
    ]
    }])
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App