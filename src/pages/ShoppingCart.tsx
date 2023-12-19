import { useEffect, useState } from "react";

import { Product } from "../api/products";
import { useStore } from "../store";
import { CartItem } from "../components/CartItem";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const ShoppingCart = () => {
  const navigate = useNavigate();

  const items = useStore((state) => state.items);

  const setItems = useStore((state) => state.setItems);

  const handleOnChange = (qty: number, productID: number) => {
    const index = items.findIndex(({ id }) => id === productID);
    items[index].quantity = qty;
    items[index].totalPrice = +items[index].price * qty;

    setItems(items);

    let total = 0;
    items.forEach((item) => (total = total + (item.totalPrice || +item.price)));
    setTotalAmount(Math.round(total));
  };

  let amount = 0;
  items.forEach((item) => (amount = amount + +item.price!));
  const [totalAmount, setTotalAmount] = useState(amount);

  const [showDeliveryAddress, setShowDeliveryAddress] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>();

  const onSubmit: SubmitHandler<any> = async () => {
    // send Cart info to API

    setItems([]);
    navigate("/products");
  };
  useEffect(() => {
    if (!items.length) navigate("/products");
  }, []);

  return (
    <div className="p-8 flex">
      <div className="bg-slate-50 p-4 w-1/2">
        <h1>Cart</h1>
        {items.map((item: Product) => {
          return (
            <div key={item.id} className="flex items-baseline">
              <CartItem
                item={item}
                handleOnChange={(qty) => handleOnChange(qty, item.id)}
              />
            </div>
          );
        })}
        <div className="p-4 w-1/2 flex flex-col space-y-4 justify-center">
          <h1>Total Amount: {totalAmount}.00 INR</h1>
          <button
            className="action-button w-40"
            onClick={() => setShowDeliveryAddress(true)}
          >
            Continue
          </button>
        </div>
      </div>
      {showDeliveryAddress && (
        <div className="p-4 w-full">
          <h1 className="ml-8">Reciever info</h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-4 w-[80%] px-8 py-12"
          >
            <input
              placeholder="name"
              className="form-input"
              {...register("name", { required: true })}
            />
            {errors.name && <span>This field is required</span>}

            <input
              placeholder="Phone number"
              className="form-input"
              {...register("phone", { required: true })}
            />
            {errors.phone && <span>This field is required</span>}

            <textarea
              placeholder="address"
              className="form-input"
              rows={6}
              {...register("address", { required: true })}
            />
            {errors.address && <span>This field is required</span>}

            <button className="action-button text-xl font-bold" type="submit">
              Buy
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
