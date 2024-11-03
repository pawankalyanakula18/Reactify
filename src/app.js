import React from "react";
import ReactDOM from "react-dom/client";
// These are found in node_modules only...
import Header from "./components/Header";
import Body from "./components/Body";

//one restaurant objects contains three parts as objects: Info, Analytics & Cta...

const AppInterface = () => {
     return <div className="app">
          <Header/>
          <Body/>
     </div>
}; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppInterface/>);    