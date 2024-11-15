import Restr_Card from "./Restr_Card";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () =>{
    const [listOfRestraunts, setlistOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setsearchText] = useState(""); 

     useEffect(()=> {    fetchData();   }
          ,[]); 

     const fetchData = async () => {
          const data_promise = await fetch(
               "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3910717&lng=78.5398204&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
          );
          const json = await data_promise.json();
          setlistOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
          setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
     }
     if(listOfRestraunts.length === 0){
          return <Shimmer/>;
     }

    return (
         <div className="body">
              <div className="filter">
                    <div className="search">
                         <input type="text" 
                         className="search_box" 
                         value={searchText} 
                         onChange={(e)=>{
                              setsearchText(e.target.value);

                         }}/>
                         <button onClick={()=>{
                              console.log(searchText);
                              const filteredRestraunts = listOfRestraunts.filter(
                                   (res)=> (res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                                        );
                              setFilteredRestaurants(filteredRestraunts);

                         }}>Search</button>
                         
                    </div>

                    <button className="filter-btn"
                        onClick={()=>
                        {   const filteredList = 
                            listOfRestraunts.filter((res) => (res.info.avgRating < 4.2));
                            setlistOfRestaurants(filteredList);
                            console.log(filteredList);
                        }}
                    >Top Rated Restaurants</button>
              </div>
              <div className="restr_container">
              {
                    filteredRestaurants.map((restaurant)=>(
                        <Restr_Card key ={restaurant.info.id} ResData={restaurant}/>
                   ))

              };                   
              </div>
         </div>
    )
};
export default Body;