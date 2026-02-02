import React from "react";
import ProductCard from "../components/ProductCard";
import AddProductForm from "../components/AddProductFrom";
import { useSelector } from "react-redux";

const Home = () => {
    const products = useSelector((state) => state.products);

    return (
        <div className="p-4 min-h-screen bg-[#111827]">
            <h2 className="text-2xl font-bold mb-6 text-white text-center">
                Featured Products
            </h2>
            <div className="flex flex-col lg:flex-row gap-10 max-w-7xl mx-auto">
                {/* Left Side - Product List */}
                <div className="flex-1">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
                        {products.length > 0 ? (
                            products.map((p) => (
                                <ProductCard key={p.id} product={p} />
                            ))
                        ) : (
                            <p className="text-gray-400">No products available.</p>
                        )}
                    </div>
                </div>

                {/* Right Side - AddProductForm (Stay sticky or top on mobile) */}
                <div className="lg:w-96">
                    <div className="lg:sticky lg:top-4">
                        <AddProductForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
