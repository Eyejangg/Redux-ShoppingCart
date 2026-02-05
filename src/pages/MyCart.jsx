import React from "react";
import { useSelector } from "react-redux";
import Cartitem from "../components/Cartitem";

const MyCart = () => {
    const cartItems = useSelector((state) => state.carts); // ดึงค่าจาก store.js (carts)

    // Calculate Subtotal
    const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    const shipping = 4.99;
    const total = subtotal + shipping;

    return (
        <div className="bg-gray-900 min-h-screen text-gray-100 p-8 font-sans">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-2xl font-semibold mb-6 text-gray-400">Shopping Cart</h1>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left Column: Cart Items */}
                    <div className="flex-1 space-y-4">
                        {cartItems.map((item) => (
                            <Cartitem key={item.id} product={item} />
                        ))}
                    </div>

                    {/* Right Column: Order Summary */}
                    <div className="lg:w-96">
                        <div className="bg-white rounded-lg p-6 text-gray-800 shadow-md">

                            <div className="space-y-3 mb-6">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500">Subtotal</span>
                                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500">Shipping</span>
                                    <span className="font-medium">${shipping.toFixed(2)}</span>
                                </div>
                            </div>

                            <div className="border-t border-gray-200 my-4 pt-4">
                                <div className="flex justify-between items-end mb-1">
                                    <span className="font-bold text-lg text-gray-900">Total</span>
                                    <span className="font-bold text-lg text-gray-900">${total.toFixed(2)} USD</span>
                                </div>
                                <div className="text-right text-xs text-gray-400 mb-6">including VAT</div>
                            </div>

                            <button className="btn btn-primary w-full bg-blue-500 hover:bg-blue-600 border-none text-white rounded-md h-12 text-base font-normal">
                                Check out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCart;
