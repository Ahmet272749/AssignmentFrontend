import React from "react";
import ProductCarousel from "./components/ProductCarousel";

function App() {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">React Frontend</h1>
      <ProductCarousel />
    </div>
  );
}

export default App;