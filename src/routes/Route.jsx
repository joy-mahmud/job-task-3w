import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Root";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/signup",
            element:<SignUp></SignUp>
        },
        {
            path:"/signin",
            element:<SignIn></SignIn>
        },

      ]
    },
  ]);