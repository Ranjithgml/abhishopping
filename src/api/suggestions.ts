import useSwr from "swr";
import { apiInstance } from ".";

export const fetchSuggestions = async (url: string) => {
  const { data } = await apiInstance.get(url);
  return data;
};

export const useSuggestions = () => {
  const { data, error } = useSwr("products/categories", fetchSuggestions, {
    revalidateOnFocus: false,
  });
  return {
    categories: data || [],
    loading: !data && !error,
  };
};
