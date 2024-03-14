import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
// import About from "./components/About";
import Contact from "./components/Contact";
import {createBrowserRouter,Outlet,RouterProvider} from "react-router-dom";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";

// Chunking
// Code Splitting
// dynamic Bundling
// lazy loading 
// on demand  loading
// dynamic import

const About = lazy(()=> import("./components/About"));

const AppLayout = () => {

    return (
          <div className="app">
            <Header/>
            <Outlet/>
            
          </div>
    )};

    const appRouter = createBrowserRouter([
      {
        path:"/",
        element:<AppLayout/>,
        children:[
          {
            path:"/",
            element:<Body/>
          },
          {
            path:"/about",
            element:<Suspense fallback={<Shimmer/>}><About/></Suspense>
          },
          {
            path:"/Contact",
            element:<Contact/>
          },
          {
            path:"/RestaurantMenu/:resId",
            element:<RestaurantMenu/>
          }
        ],
        errorElement:<Error/>
      },
      
    ]);




const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);


