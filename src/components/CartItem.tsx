import { useState } from "react";

import { Product } from "../api/products";

type Props = {
  item: Product;
  handleOnChange: (qty: number) => void;
};

export const CartItem = ({ item, handleOnChange }: Props) => {
  const { price, title } = item;
  const [quantity, setQuantity] = useState(1);

  const onChange = (value: number) => {
    setQuantity(value);
    handleOnChange(value);
  };

  return (
    <div className="p-4 space-y-4">
      <h2>{title}</h2>
      <h2 className="pl-3">Price : {+price}</h2>
      <div className="flex gap-4 pl-3 align-baseline">
        <h2>Quantity</h2>
        <input
          value={quantity}
          onChange={({ target }) => onChange(+target.value)}
          type="number"
          min={1}
          max={10}
          className="w-20 h-10 form-input"
        />
      </div>
      <h2 className="pl-3">
        Total: {quantity} * {+price} = {+price * quantity}
      </h2>
    </div>
  );
};
