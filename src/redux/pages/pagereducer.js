const initialState = {
  home: true, // ใช้ boolean เพื่อเช็คว่าอยู่หน้า home หรือไม่
};

const pageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "HOME":
      return { home: true }; // ไปหน้า Home
    case "MYCART":
      return { home: false }; // ไปหน้า MyCart
    default:
      return state; // คืนค่า state เดิมถ้า action ไม่ตรงกับที่กำหนด
  }
};

export default pageReducer;
