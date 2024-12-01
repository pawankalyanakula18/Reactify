import React, { useEffect, useState, lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
// These are found in node_modules only...
import Header from "./components/Header";
import Body from "./components/Body";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserLoginContext from "./common_utils/UserLoginContext";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const About = lazy(() => import("./components/About"));

//one restaurant objects contains three parts as objects: Info, Analytics & Cta...
const AppInterface = () => {
     console.log("AppInterface Rendered");
     const [userName, setUserName] = useState("");

     useEffect(() => {
          //make an API call and send username & password.
          const data = {
               name: "Pawan Kalyan Akula",
          };
          console.log(data.name);
          setUserName(data.name);
          
     }, []);

     return (
     //Default Value
     <UserLoginContext.Provider value={{ loggedInUser: userName, setUserName }}>
          { /* Pawan Kalyan akula */ }
          <div className="app">
               <Header/>
               <Outlet/>
          </div>
     </UserLoginContext.Provider>
     );
}; 

const appRouter = createBrowserRouter([
     {    path: "/",    
          element:  <AppInterface/>,     
          children: [
               {    
                    path: "",     
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
          errorElement: <Error/>,
     },
    
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <Suspense fallback={<div>Loading...</div>}>
     <RouterProvider router={appRouter} />
               </Suspense>);    