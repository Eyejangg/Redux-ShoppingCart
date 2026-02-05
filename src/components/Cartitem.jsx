import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart, increaseQuantity, decreaseQuantity } from "../redux/carts/action";

const Cartitem = ({ product }) => {
    const dispatch = useDispatch();

    const handleIncreaseQuantity = () => {
        dispatch(increaseQuantity(product.id));
    }

    const handleDecreaseQuantity = () => {
        if (product.quantity <= 1) {
            dispatch(removeFromCart(product.id));
        } else {
            dispatch(decreaseQuantity(product.id));
        }
    }

    return (
        <div className="bg-white rounded-lg p-4 flex flex-col sm:flex-row items-center gap-4 text-gray-800 shadow-md">
            {/* Image */}
            <div className="w-24 h-24 flex-shrink-0 bg-gray-200 rounded-md overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>

            {/* Details */}
            <div className="flex-1 flex flex-col justify-between h-full w-full">
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="font-bold text-lg">{product.name}</h3>
                        <p className="text-sm text-gray-500">Price: ${product.price}</p>
                        <p className="text-sm text-gray-500">Category: {product.category}</p>
                    </div>

                    {/* Quantity Controls  ส่วนของ การ + การ ลบ item id ลบ แบบ item id เดียว product.id*/}
                    <div className="flex items-center gap-2">
                        <div className="join bg-gray-100 rounded-md">
                            <button onClick={handleDecreaseQuantity} className="join-item btn btn-xs btn-ghost text-gray-500">-</button>
                            <span className="join-item px-3 flex items-center bg-white text-gray-700">{product.quantity}</span>
                            <button onClick={handleIncreaseQuantity} className="join-item btn btn-xs btn-ghost text-gray-500">+</button>
                        </div>
                    </div>
                </div>

                {/* Price & Remove */}
                <div className="flex justify-end gap-4 mt-2 items-center">
                    <span className="font-semibold text-gray-400">${product.price * product.quantity}</span>
                    <button
                        onClick={() => dispatch(removeFromCart(product.id))}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cartitem;