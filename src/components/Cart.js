import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../common_utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store) => store?.cart?.items);
    console.log(cartItems);

    const dispatch = useDispatch();

    const handleClearCart = () =>{
        dispatch(clearCart());
    }

    return (
        <div className="m-5 p-5 text-center font-bold">
            <h1 className="font-bold text-center text-2xl m-4 p-4">Cart</h1>
        
        <div className="w-6/12 mx-auto my-4 p-4 bg-gray-50 shadow-xl">
            <button className="m-2 p-2 bg-black text-white rounded-xl"
              onClick={handleClearCart}>
                Clear Cart
            </button>
            {cartItems.length === 0 && 
                (<h1 className="my-5">Cart is Empty!... Shop NOW!!!</h1>)}
            <ItemList data={cartItems}/>
        </div>
        </div>
    )
};

export default Cart;