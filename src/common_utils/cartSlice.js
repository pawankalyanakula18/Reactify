import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            //mutating the existing state here...
            state.items.push(action.payload);
        },
        removeItem: (state) => {
            state.items.pop()
        },
        clearCart: (state) => {
            state.items.length = 0; //state = []
            //We can also do-> return [];
        },
    },
});

/*
{   name: xxxx
   state: [---, ---]
   actions: {
        addItem, removeItem, clearCart
   }
}
*/

export const { addItem, removeItem, clearCart } = cartSlice.actions;  
export default cartSlice.reducer;