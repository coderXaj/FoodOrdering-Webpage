import { useEffect, useReducer } from "react";
import CartContext from "./CartContext";
import CartReducer from "./CartReducer";
import { ADD_TO_CART, REMOVE_FROM_CART, INCREASE, DECREASE, GET_TOTAL } from "./Types"

const CartState = ({ children }) => {
    const intialState = {
        cartItem: [],
        totalAmount: 0
    }

    const [state, dispatch] = useReducer(CartReducer,
        intialState)

    const addToCart = (item) => {
        dispatch({ type: ADD_TO_CART, payload: item })
    }

    const increase = (id) => {
        dispatch({ type: INCREASE, payload: id })
    }

    const decrease = (id) => {
        dispatch({ type: DECREASE, payload: id })
    }

    const removeFromCart = (id) => {
        dispatch({ type: REMOVE_FROM_CART, payload: id })
    }

    useEffect(() => {
        dispatch({ type: GET_TOTAL })
        console.log('fuck you');
    }, [state.cartItem])

    return <CartContext.Provider value={{
        cartItem: state.cartItem,
        addToCart,
        removeFromCart,
        increase,
        decrease,
    }}>{children}</CartContext.Provider>
}

export default CartState