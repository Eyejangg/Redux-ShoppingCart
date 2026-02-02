import { createSlice } from "@reduxjs/toolkit";

// Initial state สำหรับตะกร้าสินค้า
const initialState = {
    items: [], // รายการสินค้าในตะกร้า
    totalQuantity: 0, // จำนวนสินค้าทั้งหมด
    totalPrice: 0, // ราคารวมทั้งหมด
};

// สร้าง slice สำหรับ cart
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        // เพิ่มสินค้าลงตะกร้า
        addToCart: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.items.find((item) => item.id === newItem.id);

            if (existingItem) {
                // ถ้ามีสินค้านี้อยู่แล้ว เพิ่มจำนวน
                existingItem.quantity += 1;
                existingItem.totalPrice += newItem.price;
            } else {
                // ถ้าไม่มี เพิ่มสินค้าใหม่
                state.items.push({
                    id: newItem.id,
                    name: newItem.name,
                    price: newItem.price,
                    imageUrl: newItem.imageUrl,
                    category: newItem.category,
                    quantity: 1,
                    totalPrice: newItem.price,
                });
            }

            state.totalQuantity += 1;
            state.totalPrice += newItem.price;
        },

        // ลบสินค้าออกจากตะกร้า
        removeFromCart: (state, action) => {
            const id = action.payload;
            const existingItem = state.items.find((item) => item.id === id);

            if (existingItem) {
                state.totalQuantity -= existingItem.quantity;
                state.totalPrice -= existingItem.totalPrice;
                state.items = state.items.filter((item) => item.id !== id);
            }
        },

        // ลดจำนวนสินค้า
        decreaseQuantity: (state, action) => {
            const id = action.payload;
            const existingItem = state.items.find((item) => item.id === id);

            if (existingItem) {
                if (existingItem.quantity === 1) {
                    // ถ้าเหลือ 1 ชิ้น ให้ลบออกเลย
                    state.items = state.items.filter((item) => item.id !== id);
                } else {
                    existingItem.quantity -= 1;
                    existingItem.totalPrice -= existingItem.price;
                }
                state.totalQuantity -= 1;
                state.totalPrice -= existingItem.price;
            }
        },

        // ล้างตะกร้าทั้งหมด
        clearCart: (state) => {
            state.items = [];
            state.totalQuantity = 0;
            state.totalPrice = 0;
        },
    },
});

// Export actions สำหรับใช้ใน components
export const { addToCart, removeFromCart, decreaseQuantity, clearCart } =
    cartSlice.actions;

// Export reducer สำหรับ store
export default cartSlice.reducer;
