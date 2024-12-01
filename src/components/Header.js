import { LOGO_URL } from "../common_utils/constant";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "./useOnlineStatus";
import UserLoginContext from "../common_utils/UserLoginContext";

const Header = () =>{
    const [BtnName, setBtnName] = useState("Login");
    //console.log("Header Rendered");
    const onlineStatus = useOnlineStatus();

    const { loggedInUser } = useContext(UserLoginContext);

    return(
    <div className="flex justify-between bg-red-400 shadow-2xl mb-5">
    
         <div className="w-56">
              <img className="logo" src= {LOGO_URL}/>
         </div>
         <div className="flex items-center">
              <ul className="flex p-5 m-5">
                   <li className="px-5">
                       <h3>Online : {(onlineStatus)? "🟢" : "🔴"}</h3>
                   </li>
                   <li className="px-5">
                         <Link to="/">Home</Link>
                   </li>                  
                   <li className="px-5">
                         <Link to="/about">About us</Link>
                   </li>
                   <li className="px-5">
                         <Link to="/contact">Contact us</Link>
                   </li>
                   <li className="px-5">
                         <button className="login" onClick={()=>{
                                             BtnName==="Login" ? setBtnName("Logout") : setBtnName("Login");
                                             console.log(BtnName);
                                        }
                              }>{BtnName}
                         </button>
                   </li>
                   <li className="font-bold">
                         { loggedInUser }
                   </li>
              </ul>           
         </div>
    </div>
    )
};
export default Header;
