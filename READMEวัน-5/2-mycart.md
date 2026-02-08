# โปรเจกต์ Redux Shopping Cart - บันทึกการอัปเดต

## อัปเดตล่าสุด (การรวม Redux & การปรับโครงสร้างโค้ด)

การอัปเดตนี้เน้นไปที่การรวมตรรกะของตะกร้าสินค้า (Shopping Cart) เข้ากับ Redux, การปรับโครงสร้างคอมโพเนนต์เพื่อให้ดูแลรักษาได้ง่ายขึ้น, และการนำการคำนวณแบบพลวัต (Dynamic Calculations) มาใช้

### 1. ฟีเจอร์ใหม่ & ตรรกะการทำงาน

- **การเชื่อมต่อ Redux**: เชื่อมต่อ `MyCart.jsx` และ `ProductCard.jsx` เข้ากับ Redux store
- **การคำนวณตะกร้าสินค้าแบบพลวัต**: ใช้การคำนวณราคา "ยอดรวมย่อย (Subtotal)" และ "ยอดรวม (Total)" ในตะกร้าสินค้าแบบเรียลไทม์
- **ลบสินค้าอัตโนมัติ**: เพิ่มตรรกะในการลบสินค้าออกจากตะกร้าอัตโนมัติหากจำนวนสินค้าลดลงเหลือ 0
- **Named Event Handlers**: ปรับแก้ฟังก์ชัน inline ที่ไม่มีชื่อ ให้เป็นฟังก์ชันที่มีชื่อ (`handleIncreaseQuantity`, `handleDecreaseQuantity`) เพื่อให้อ่านง่ายขึ้นและสะดวกต่อการแก้ไขบั๊ก

### 2. การปรับโครงสร้างคอมโพเนนต์

- **คอมโพเนนต์ใหม่ (`<Cartitem />`)**: แยกส่วนการแสดงผลรายการสินค้าในตะกร้าจาก `MyCart.jsx` ออกมาเป็นคอมโพเนนต์ที่นำกลับมาใช้ใหม่ได้ที่ `src/components/Cartitem.jsx` ช่วยลดความซับซ้อนของหน้าหลักและส่งเสริมการใช้โค้ดซ้ำ
- **เปลี่ยนชื่อ Prop**: อัปเดต `Cartitem` ให้ใช้ prop ชื่อ `product` แทน `item` เพื่อความชัดเจน

### 3. การแก้ไข Redux Store & Reducers

- **แก้ไข `cartReducer`**:
  - แก้ไขตรรกะสำหรับการเพิ่มสินค้าที่มีอยู่แล้ว (อัปเดตจำนวนแทนที่จะเพิ่มรายการซ้ำ)
  - แก้ไขฟังก์ชันช่วย `findProductInCart`
  - ตรวจสอบให้แน่ใจว่าการเปลี่ยนแปลง `state` เป็นแบบ Immutably (ไม่แก้ไขค่าเดิมโดยตรง)
- **แก้ไข `productReducer`**:
  - แก้ไขการเข้าถึง payload ใน action `REMOVE_QUANTITY`
- **แก้ไข Action Types**: แก้ไขปัญหาความไม่ตรงกันในการ import `actionTypes.js` ระหว่าง products และ carts

### 4. การแก้ไขบั๊ก

- **แก้ไข Import Errors**: แก้ไข path ไฟล์สำหรับการ import `MyCart` ใน `Page.jsx`
- **แก้ไข Reference Errors**: แก้ไข error `dispatch is not defined` และ `item is not defined`
- **แก้ไข Prop ไม่ตรงกัน**: ปรับชื่อ prop ให้ตรงกันระหว่างคอมโพเนนต์แม่ (`MyCart`) และลูก (`Cartitem`)

---

### การเปลี่ยนแปลงโครงสร้างไฟล์

- `src/components/Cartitem.jsx` (ใหม่)
- `src/pages/MyCart.jsx` (แก้ไข)
- `src/redux/carts/cartsreducer.js` (แก้ไข)
- `src/redux/products/productReducer.js` (แก้ไข)
