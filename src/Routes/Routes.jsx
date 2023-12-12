import {
    createBrowserRouter,
  } from "react-router-dom";
 
import About from "../Pages/About/About";
import Home from "../Home/Home";
import Main from "../LayOut/Main";
import Contact from "../Pages/Contact/Contact";

 export const router = createBrowserRouter([
    {
      path: "/",
      element:  <Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
            path:'about',
            element:<About></About>
        },
        {
          path:'contact',
          element:<Contact></Contact>
        }
      ]
    },
  ]);
 