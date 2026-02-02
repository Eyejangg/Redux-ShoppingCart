import { ADD_PRODUCT, ADD_QUANTITY, REMOVE_QUANTITY } from "./actionTypes";
import { initialState } from "./intialState";

const nextId = (items) => {
    return items.reduce((id, item) => Math.max(id, item.id), - 1) + 1;
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return [...state, { 
                id: nextId(state), // ส่ง state เข้าไปด้วยเพื่อให้คำนวณ id ใหม่ได้
                ...action.payload, 
                price: parseFloat(action.payload.price), 
                quantity: parseInt(action.payload.quantity), 
            }]; 

        case ADD_QUANTITY:
            return state.map((product) => { // ส่ง state เข้าไปด้วยเพื่อให้คำนวณ id ใหม่ได้
                if (product.id === action.payload.productId) { // ถ้า product.id เท่ากับ action.payload.productId
                    return { // คืนค่า product ใหม่
                        ...product, // คืนค่า product เดิม
                        quantity: product.quantity + 1, // เพิ่มจำนวน 1
                    };
                }
                return product;
            });

        case REMOVE_QUANTITY:
            return state.map((product) => {
                if (product.id === action.payload.productId) {
                    return {
                        ...product,
                        quantity: Math.max(0, product.quantity - 1), // ป้องกันไม่ให้ติดลบ เหมือนด้านบน แค่ -1
                    };
                }
                return product;
            });

        default:
            return state; // สำคัญมาก: ต้องมีเพื่อคืนค่า state เดิมกลับไป
    }
}

export default productReducer;