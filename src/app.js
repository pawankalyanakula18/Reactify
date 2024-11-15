import React from "react";
import ReactDOM from "react-dom/client";
// These are found in node_modules only...
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";



//one restaurant objects contains three parts as objects: Info, Analytics & Cta...

const AppInterface = () => {
     return <div className="app">
          <Header/>
          <Outlet/>
     </div>
}; 

const appRouter = createBrowserRouter([
     {    path: "/",    
          element:  <AppInterface/>,     
          children: [
               {    
                    path: "/",     
                    element: <Body/>     
               },
               {    
                    path: "about",     
                    element: <About/>     
               },
               {    
                    path: "contact",     
                    element: <ContactUs/>      
               },
               {    
                    path: "restaurants/:resId",  
                    element: <RestaurantMenu/>    
               },
          ],
          errorElement: <Error/>
     },
    
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);    