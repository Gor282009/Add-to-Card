import { combineReducers, createStore } from "redux";

const store = createStore(function reducer(state,action){
    if (action.type === "ADD_TO_CART") {
        return {
            cart: [...state.cart, action.product]
        }
    }
},
 {
    initialState: {
        cart: []
    }
 }
)

export default store