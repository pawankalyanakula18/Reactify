import { LOGO_URL } from "../common_utils/constant";

const Header = () =>{
    return(
    <div className="header">
    
         <div className="logo_container">
              <img className="logo" src= {LOGO_URL}/>
         </div>
         <div className="nav_items">
              <ul>
                   <li>Home</li>
                   <li>About</li>
                   <li>Cart</li>
                   <li>SignIn</li>
              </ul>
              
         </div>
    </div>
    )
};
export default Header;
