import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
// import About from "./components/About";
import Contact from "./components/Contact";
import {createBrowserRouter,Outlet,RouterProvider} from "react-router-dom";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import { useContext } from "react";
import UserContext from "./utils/UserContext";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";



// Chunking
// Code Splitting
// dynamic Bundling
// lazy loading 
// on demand  loading
// dynamic import

const About = lazy(()=> import("./components/About"));

const AppLayout = () => {
  const [userInfo,setUserInfo] = useState();
  const {loggedUserName} = useContext(UserContext);

  useEffect(()=>{
    // Make an API call and send username and password
   const data =  {
      userName:"Aditya Bhai"
    }
    setUserInfo(data.userName);
    },[])
  console.log(loggedUserName);
    return (
      <Provider store={appStore}>
          < UserContext.Provider value={{loggedUserName:userInfo,setUserInfo}}>
              <div className="app">
                <Header/>
                <Outlet/>
              </div>
          </UserContext.Provider>
      </Provider>
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
          },
          {
            path:"/Cart",
            element:<Cart/>
          }
        ],
        errorElement:<Error/>
      },
      
    ]);




const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);


