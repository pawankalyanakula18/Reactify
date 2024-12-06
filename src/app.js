import React, { useEffect, useState, lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
// These are found in node_modules only...
import Header from "./components/Header";
import Body from "./components/Body";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserLoginContext from "./common_utils/UserLoginContext";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import appStore from "./common_utils/appStore";
import Cart from "./components/Cart";

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
<Provider store={appStore}>
     <UserLoginContext.Provider value={{ loggedInUser: userName, setUserName }}>
          <div className="app">
               <Header/>
               <Outlet/>
          </div>
     </UserLoginContext.Provider>
</Provider>
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
                    element:(
                         <Suspense fallback={<div>Loading...</div>}>
                              <About/>
                         </Suspense>
                    )      
               },
               {    
                    path: "contact",     
                    element: <ContactUs/>      
               },
               {    
                    path: "restaurants/:resId",  
                    element: <RestaurantMenu/>    
               },
               {    
                    path: "cart",     
                    element: <Cart/>      
               },
          ],
          errorElement: <Error/>,
     },
    
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <RouterProvider router={appRouter} />
               );    