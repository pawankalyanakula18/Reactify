import { useDispatch } from "react-redux";
import { addItem } from "../common_utils/cartSlice";
import { CDN_URL } from "../common_utils/constant";

const ItemList = ({data}) => {

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        //dispatch an Action
        dispatch(addItem(item));
    }

    return (
        <div>
            {data.map((item) => (

            <div 
            data-testid= "foodItems"
            key={item.card.info.id} className="flex justify-between  border-gray-200 border-b-2">

                <div key={item.card.info.id} 
                className="p-2 w-9/12">
                    
                    <div className="text-left">
                        <span>{item.card.info.name}</span>
                        <span>{"- ₹"} {item.card.info.price 
                                        ? item.card.info.price/100
                                        : item.card.info.defaultPrice/100}</span>
                    </div>

                    <p className="pl-2 text-xs text-left">{item.card.info.description}</p>
                </div>

                    <div className="w-3/12 h-auto">
                        <div className="absolute">
                            <button className="p-1 m-1 bg-yellow-600 shadow-lg rounded-lg"
                             onClick={() => handleAddItem(item)}>
                                ADD+
                            </button>
                        </div>
                        <img src={CDN_URL + item.card.info.imageId}
                            className="mr-2 p-2 rounded-lg"/>                    
                    </div>
                
            </div>
                    ))};
                               
        </div>
    );
};

export default ItemList;