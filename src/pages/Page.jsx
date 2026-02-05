import React from "react";
import { useSelector } from "react-redux";
import MyCart from "./MyCart.jsx";
import Home from "./Home.jsx";

const Page = () => {
  const page = useSelector((state) => state.pages); // ดึงค่ามาจาก store ใช้ useSelector ในการ เรียกดูค่า state
  return <div>{page.home ? <Home /> : <MyCart />}</div>; // เช็คค่า ถ้า home เป็น true ให้แสดงหน้า Home ถ้า false ให้แสดงหน้า MyCart
};

export default Page;
