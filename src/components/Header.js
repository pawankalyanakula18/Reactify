import { LOGO_URL } from "../common_utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () =>{
    const [BtnName, setBtnName] = useState("Login");

    console.log("Header Rendered");

    return(
    <div className="header">
    
         <div className="logo_container">
              <img className="logo" src= {LOGO_URL}/>
         </div>
         <div className="nav_items">
              <ul>
                   <li>
                         <Link to="/">Home</Link>
                   </li>                  
                   <li>
                         <Link to="/about">About us</Link>
                   </li>
                   <li>
                         <Link to="/contact">Contact us</Link>
                   </li>
                   <li>
                         <button className="login" onClick={()=>{
                                             BtnName==="Login" ? setBtnName("Logout") : setBtnName("Login");
                                             console.log(BtnName);
                                        }
                              }>{BtnName}
                         </button>
                   </li>
              </ul>           
         </div>
    </div>
    )
};
export default Header;
