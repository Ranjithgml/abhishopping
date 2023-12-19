import useSwr from "swr";
import { apiInstance } from ".";

export interface Product {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

export interface CartItem extends Product {
  quantity?: number;
  totalPrice?: number;
}

export const fetchProducts = async (url: string) => {
  const { data } = await apiInstance.get(url);
  return data;
};

export const useProducts = () => {
  const { data, error } = useSwr("products", fetchProducts, {
    revalidateOnFocus: false,
  });
  return {
    products: data || [],
    loading: !data && !error,
  };
};
