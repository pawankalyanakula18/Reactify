import { CDN_URL } from "../common_utils/constant";
import UserLoginContext from "../common_utils/UserLoginContext";
import { useContext } from "react";

const Restr_Card = (props) =>{
    const { ResData } = props;
     const { loggedInUser } = useContext(UserLoginContext);
     console.log(ResData);

    const {
         name,
         cuisines,
         locality,
         avgRating,
         costForTwo,
         cloudinaryImageId,
         sla
    } = ResData?.info;


    return (
         <div 
         data-testid="ResCard"
         className="restr_card m-4 p-4 w-[200px] rounded-xl" style={{backgroundColor: "#f0f0f0"}}>
         <img alt="Restaurant Image" className="restr_img w-[200px] h-32 rounded-2xl"
         src={CDN_URL + cloudinaryImageId}/>
         <h3 className="py-4 font-bold text-bold">{name}</h3>
         <h4>{cuisines.join(", ")}</h4>
         <h4>{locality}</h4>
         <h4>{avgRating}</h4>
         <h4>{costForTwo}</h4>
         <h4>{sla.slaString}</h4>
         <h4>User: { loggedInUser }</h4>
         </div>
    )
};
export default Restr_Card;

export const with_IsOpen_Label = (Restr_Card) =>{
     return (props) =>{
               return(
                    <div>
                         <label className="absolute m-3 p-1 bg-black text-white rounded-lg">OPEN</label>
                         <Restr_Card {...props}/>
                    </div>
               );
          }
};