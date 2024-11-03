import Restr_Card from "./Restr_Card";
import Res_list from "../common_utils/mockData";
import { useState } from "react";

const Body = () =>{
    const [listOfRestraunts, setlistOfRestaurants] = useState(Res_list);

    return (
         <div className="body">
              <div className="filter">
                <button className="filter-btn"
                        onClick={()=>
                        {   const filteredList = 
                            listOfRestraunts.filter((res) => (res.info.avgRating < 4.2));
                            setlistOfRestaurants(filteredList);
                            console.log(filteredList);
                        }}
                >Search</button>
              </div>
              <div className="restr_container">
              {
                   listOfRestraunts.map((restaurant)=>(
                        <Restr_Card key ={restaurant.info.id} ResData={restaurant}/>
                   ))

              };                   
              </div>
         </div>
    )
};
export default Body;