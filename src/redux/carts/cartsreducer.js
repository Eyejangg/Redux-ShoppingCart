import { ADD_TO_CART, REMOVE_FROM_CART, INCREASE_QUANTITY, DECREASE_QUANTITY } from "./actionTypes";
import { initialState } from "./intialState";

const nextId = (items) => {
    return items.reduce((id, item) => Math.max(id, item.id), - 1) + 1;
}



// หา state find product ใน state
const findProductInCart = (state, action) => {
    return state.find((product) => product.id === action.payload.id);
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const product = findProductInCart(state, action);
            if (product) {
                return state.map((p) => {
                    if (p.id === product.id) {
                        return { ...p, quantity: p.quantity + 1 };
                    } else {
                        return p;
                    }
                });
            } else {
                return [
                    ...state,
                    {
                        ...action.payload,
                        quantity: 1,
                    }
                ];
            }

        case REMOVE_FROM_CART:
            return state.filter((product) => product.id != action.payload);

        case INCREASE_QUANTITY:
            return state.map((product) => {
                if (product.id === action.payload) {
                    return { ...product, quantity: product.quantity + 1 };
                } else {
                    return product;
                }
            });

        case DECREASE_QUANTITY:
            return state.map((product) => {
                if (product.id === action.payload) {
                    return { ...product, quantity: product.quantity - 1 };
                } else {
                    return product;
                }
            });

        default:
            return state;

    }
}
export default cartReducer;