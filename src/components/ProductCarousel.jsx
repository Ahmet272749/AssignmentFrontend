import React, { useEffect, useState } from "react";
import { fetchProducts } from "../api";
import ProductCard from "./ProductCard";
import { useSwipeable } from "react-swipeable";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function ProductCarousel() {
    const [products, setProducts] = useState([]);
    const [start, setStart] = useState(0);
    const visibleCount = 3;

    useEffect(() => {
        fetchProducts().then((data) => {
            console.log("API’den gelen veri:", data);
            setProducts(data);
        });
    }, []);

    const next = () => {
        setStart((prev) =>
            Math.min(prev + visibleCount, products.length - visibleCount)
        );
    };

    const prev = () => {
        setStart((prev) => Math.max(prev - visibleCount, 0));
    };

    const swipeHandlers = useSwipeable({
        onSwipedLeft: next,
        onSwipedRight: prev
    });

    return (
        <div className="relative w-full" {...swipeHandlers}>
            <h2 className="text-2xl font-bold mb-4">Product List</h2>
            <div className="flex gap-4 overflow-hidden">
                {products.slice(start, start + visibleCount).map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            <button
                onClick={prev}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 shadow rounded-full"
            >
                <FaArrowLeft />
            </button>

            <button
                onClick={next}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 shadow rounded-full"
            >
                <FaArrowRight />
            </button>
        </div>
    );
}

export default ProductCarousel;
