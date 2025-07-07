import React, { useState } from "react";
import ColorPicker from "./ColorPicker";

function ProductCard({ product }) {
    const [selectedColor, setSelectedColor] = useState("yellow");

    const popularityOutOf5 = (product.popularityScore / 1).toFixed(1);

    return (
        <div className="w-72 border rounded-xl shadow-sm p-4 bg-white">
            <img
                src={product.images[selectedColor]}
                alt={product.name}
                className="w-full h-48 object-cover rounded"
            />

            <h3 className="mt-2 text-lg font-bold">{product.name}</h3>
            <p className="text-gray-600">${product.price.toFixed(2)} USD</p>

            <ColorPicker selectedColor={selectedColor} onChange={setSelectedColor} />

            <p className="text-sm text-gray-500 mt-2">
                ⭐ {popularityOutOf5}/5
            </p>
        </div>
    );
}

export default ProductCard;

