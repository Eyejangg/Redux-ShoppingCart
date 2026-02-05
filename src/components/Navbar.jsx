import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch(); // เรียกใช้ useDispatch hook
  const handlePageChange = (pageType) => {
    dispatch({ type: pageType });
  };
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl"> SE SHOPPING CART</a>
      </div>
      <div className="flex-none">
        <div className="flex items-center gap-2">
          <div className="flex gap-4 items-center mr-4">
            <button onClick={() => handlePageChange("HOME")} className="btn btn-ghost btn-sm">Home</button>
            <button onClick={() => handlePageChange("MYCART")} className="btn btn-ghost btn-sm">My Cart</button>
          </div>
          <div tabIndex={0} className="btn btn-ghost btn-circle">
            <button className="btn btn-ghost btn-circle"></button>

          </div>
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >

          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
