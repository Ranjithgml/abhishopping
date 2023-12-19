import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useStore } from "../store";
import { Product, useProducts } from "../api/products";
import { ProductCard } from "../components";

export const Home = () => {
  const { products } = useProducts();

  const setCartItems = useStore((state) => state.setItems);
  const items = useStore((state) => state.items);

  const [selectedItems, setSelectedItems] = useState<Product[]>(items);

  const addToCart = (product: Product) => {
    setSelectedItems((prev) => [...prev, product]);
  };

  const navigate = useNavigate();

  return (
    <div>
      {!!selectedItems.length && (
        <div
          className="text-center text-blue-500 font-bold text-3xl underline mt-4 cursor-pointer"
          onClick={() => {
            setCartItems(selectedItems);
            navigate("/cart");
          }}
        >
          {selectedItems.length} items in cart
        </div>
      )}
      <div className="flex flex-wrap gap-4 p-8 space-y-4">
        {products.map((product: Product) => (
          <div key={product.id}>
            <ProductCard details={product} addToCart={addToCart} />
          </div>
        ))}
      </div>
    </div>
  );
};
