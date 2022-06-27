const CartReducer = (state, action) => {
    if (action.type === "ADD_TO_CART") {
        return {
            ...state,
            cartItem: [...state.cartItem, { ...action.payload }]
        }
    }


    if (action.type === "REMOVE_FROM_CART") {
        return {
            ...state,
            cartItem: state.cartItem.filter((item) => item.id !== action.payload)
        }
    }

    if (action.type === "INCREASE") {
        let updatedCart = state.cartItem.map((val) => {
            if (val.id === action.payload) {
                return { ...val, quantity: val.quantity + 1 }
            }
            return val
        });
        return { ...state, cartItem: updatedCart }
    }

    if (action.type === "DECREASE") {
        let updatedCart = state.cartItem.map((val) => {
            if (val.id === action.payload) {
                return { ...val, quantity: val.quantity - 1 }
            }
            return val
        });
        return { ...state, cartItem: updatedCart }
    }

    if (action.type === "GET_TOTAL") {
        let { totalAmount } = state.cartItem.reduce(
            (acc, curVal) => {
                let { price, quantity } = curVal
                let updatedTotalAmount = price * quantity
                acc.totalAmount += updatedTotalAmount
                return acc
            },
            {
                totalAmount: 0
            }
        )
        return { ...state, totalAmount }
    }
    return state

}

export default CartReducer