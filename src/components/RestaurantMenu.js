import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () =>{
    const [ResInfo, setResInfo] = useState(null);

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.3910717&lng=78.5398204&restaurantId=643183&catalog_qa=undefined&submitAction=ENTER"
        );
        const json = await data.json();
        console.log(json);

        setResInfo(json.data);
    };
    // IF var-> Single Object ==> if(Res===null); IF var-> List of Obj.s ==> if(Res.length==0);
    if(ResInfo === null){
        return <Shimmer/>;
    }

    const { name, cuisines, avgRating , costForTwoMessage 
          } = ResInfo?.cards[2]?.card?.card?.info;

    //const { itemCards } = ResInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.cards.cards
    

    return (
        <div className="menu">
            <h3>{ name }</h3>
            <h3>{ cuisines.join(", ") }</h3>
            <h3>{ costForTwoMessage } </h3>
            <h3>{ avgRating }</h3>
          <ul>
    {/*}        { itemCards.map(item => <li>item.card.info.name</li>) };   */}
            <li>Biryani</li>
            <li>Pizza</li>
            <li>Desserts</li>
          </ul>
        </div>
    );

};
export default RestaurantMenu;