import Restr_Card, { with_IsOpen_Label } from "./Restr_Card";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "./useOnlineStatus";
import UserLoginContext from "../common_utils/UserLoginContext";


const Body = () =>{
    const [listOfRestraunts, setlistOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setsearchText] = useState(""); 

    const Restr_Card_IsOpen = with_IsOpen_Label(Restr_Card);

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
     const onlineStatus = useOnlineStatus(); 
     if(onlineStatus === false){
          console.log("NO INTERNET!!!");
          return (
               <h1>NO INTERNET, Check your Internet connection and try again...</h1>
          )
     };
     const { loggedInUser, setUserName } = useContext(UserLoginContext);

     return (listOfRestraunts.length === 0)? <Shimmer/>
     : (
         <div className="body">
              <div className="filter flex items-center">
                    <div className="search m-4 p-4">
                         <input type="text" 
                         data-testid="searchInput"
                         className="border border-solid border-black" 
                         value={searchText} 
                         onChange={(e)=>{
                              setsearchText(e.target.value);

                         }}/>
                         <button className="px-4 py-2 bg-red-500 mx-4 rounded-xl"
                              onClick={()=>{
                              console.log(searchText);
                              const filteredRestraunts = listOfRestraunts.filter(
                                   (res)=> (res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                                        );
                              setFilteredRestaurants(filteredRestraunts);

                         }}>Search</button>
                         
                    </div>
                    <div className="search m-4 py-1 px-4 flex bg-gray-300 rounded-lg">
                         <button className="filter-btn"
                              onClick={()=>
                              {   const filteredList = 
                                   listOfRestraunts.filter((res) => (res.info.avgRating > 4.3));
                                   setFilteredRestaurants(filteredList);
                              }}
                         >Top Rated Restaurants</button>

                    </div>
                    <div className="m-4 p-4 flex items-center">
                         <label>UserName: </label>
                         <input className="m-3 p-1 border border-black"
                          value={loggedInUser || ""} 
                          onChange={(e) => setUserName(e.target.value) }
                          /> 
                    </div>
              </div>
              <div className="flex flex-wrap">
              {
                    filteredRestaurants.map((restaurant)=>(
                        <Link className="flex"
                        key ={restaurant.info.id}
                        to={"restaurants/"+ restaurant.info.id}>

                         {    restaurant.info.isOpen ? (<Restr_Card_IsOpen ResData={restaurant}/>)
                                                     : (<Restr_Card  ResData={restaurant}/>)
                         }
                              
                        </Link> 
                   ))

              };                   
              </div>
         </div>
    )
};
export default Body;