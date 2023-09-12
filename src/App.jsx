import React, { Component } from 'react'
import Home from './home'
import About from './About'
import Portofolio from './Portofolio'
import Contact from './Contact'
import Nav from './Nav'
import Footer from './Footer'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'




const router= createBrowserRouter([
  {path:"",element:<Footer/>,children:[
    {path:"/",element:<Home/>},
  {path:"home",element:<Home/>},
  {path:"about",element:<About/>},
  {path:"portfolio",element:<Portofolio/>},
  {path:"contact",element:<Contact/>},
  {path:'*',element:<h1>not found</h1>}
  ]}
])

export default class App extends Component {
  render() {
    return<>
   <RouterProvider   router={router}/>
    </>
  }
}

