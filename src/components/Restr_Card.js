import { CDN_URL } from "../common_utils/constant";
const Restr_Card = (props) =>{
    const { ResData } = props;
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
         <div className="restr_card" style={{backgroundColor: "#f0f0f0"}}>
         <img alt="Restaurant Image" className="restr_img"
         src={CDN_URL + cloudinaryImageId}/>
         <h3>{name}</h3>
         <h4>{cuisines.join(", ")}</h4>
         <h4>{locality}</h4>
         <h4>{avgRating}</h4>
         <h4>{costForTwo}</h4>
         <h4>{sla.slaString}</h4>
         </div>
    )
};
export default Restr_Card;