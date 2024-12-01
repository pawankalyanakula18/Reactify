import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({data, showItems, setShowIndex}) => {
    ///Our own ACCORDIAN Function below...
    const handleClick = () => {
      setShowIndex();
    }
    
return (
    <div>
        <div className="w-6/12 mx-auto my-4 p-4 bg-gray-50 shadow-xl">
            <div className="flex justify-between cursor-pointer" onClick={ handleClick }>
                <span className="font-bold text-lg">
                {   data?.title} ({data.itemCards.length})</span>
                { showItems ? <span>🔼</span> : <span>🔽</span> }
            </div>
            <div>
                {showItems && <ItemList data={data?.itemCards}/>}
            </div>
        </div>
        
    </div>
)


};

export default RestaurantCategory;