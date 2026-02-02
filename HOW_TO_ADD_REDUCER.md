# วิธีการเพิ่ม Reducer ใหม่เข้าในโปรเจกต์

เมื่อคุณสร้าง Reducer ใหม่ (เช่น `productReducer.js`) คุณต้องนำไปลงทะเบียนในไฟล์กลางของ Redux เพื่อให้แอปพลิเคชันมองเห็น State นั้นๆ

## 1. ตรวจสอบ Reducer ของคุณ

ตรวจสอบให้แน่ใจว่าในไฟล์ Reducer มีการ `export default` ออกมา เพื่อให้ไฟล์อื่นสามารถนำไปใช้งานได้

**ตัวอย่างในไฟล์ `src/redux/products/productReducer.js`:**

```javascript
// ... โค้ดอื่นๆ ...

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    // ... cases ...
    default:
      return state; // สำคัญ: ต้องมี default case คืนค่าเดิม
  }
};

export default productReducer; // ต้องมีบรรทัดนี้!
```

---

## 2. นำไปเพิ่มในไฟล์ `src/redux/store.js`

ไฟล์นี้คือหัวใจหลักที่รวบรวม Reducer ทั้งหมดเข้าด้วยกัน (โดยใช้ `configureStore`)

### ขั้นตอนการทำ:

1. **Import** Reducer ตัวใหม่เข้ามา
2. เพิ่มชื่อ State และ Reducer ลงใน object `reducer`

**ตัวอย่างการแก้ไขไฟล์ `src/redux/store.js`:**

```javascript
import { configureStore } from "@reduxjs/toolkit";
import pageReducer from "./pages/pagereducer";
import cartReducer from "./carts/cartsreducer";
// 1. Import ตัวที่สร้างใหม่เข้ามาที่นี่
import productReducer from "./products/productReducer";

export const store = configureStore({
  reducer: {
    pages: pageReducer,
    cart: cartReducer,
    // 2. เพิ่มชื่อที่เราจะใช้เรียกใน useSelector (เช่น store.products)
    products: productReducer,
  },
  devTools: true,
});
```

---

## สรุป

ทุกครั้งที่มี Reducer ใหม่:

1. สร้างไฟล์ Reducer และ **export default**
2. ไปที่ **`src/redux/store.js`**
3. **Import** และเพิ่มเข้าช่อง **`reducer: { ... }`**

เพียงเท่านี้ คุณก็จะสามารถเรียกใช้ข้อมูลผ่าน `useSelector((state) => state.products)` ใน Component ต่างๆ ได้แล้วครับ!
