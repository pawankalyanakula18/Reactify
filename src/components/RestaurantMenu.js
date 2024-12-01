import Shimmer from "./Shimmer";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useRestaurantMenu }  from "../common_utils/useRestaurantMenu";
//The above is a Custom Hook
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () =>{
    const { resId } = useParams();
    
    const ResInfo =  useRestaurantMenu(resId);

    const [showIndex, setShowIndex] = useState(null);

    // IF var-> Single Object ==> if(Res===null); IF var-> List of Obj.s ==> if(Res.length==0);
    if(ResInfo === null){
        return <Shimmer/>;
    }

    const { name, cuisines, avgRating 
          } = ResInfo?.cards[2]?.card?.card?.info;

    const { carousel } = ResInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    const { itemCards } = ResInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    const categories = ResInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => 
            c?.card?.["card"]?.["@type"] === 
                "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        
    );

    return (
        <div className="menu text-center">
            <h2 className="font-bold my-7 text-2xl">{ name }</h2>
            <h3>{ avgRating }</h3>
            <p className="font-bold mt-4 mb-2 text-lg">
                {cuisines.join(", ")}
            </p>
            {/*categories accordian below*/}
            {categories.map((category, index) => (
                        <RestaurantCategory 
                        key={category?.card?.card.title} 
                        data={category?.card?.card}
                        showItems={index === showIndex ? true : false}
                        setShowIndex ={ ()=> setShowIndex(index) } />
                    ))}
        </div>
    );
};

export default RestaurantMenu;