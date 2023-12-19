import { Product } from "../api/products";

type Props = {
  details: Product;
  addToCart: (product: Product) => void;
};
export const ProductCard = ({ details, addToCart }: Props) => {
  const { title, price, description, image } = details;

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="h-12 w-12 m-auto" src={image} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 line-clamp-1" title={title}>
          {title}
        </div>
        <p className="text-gray-700 text-sm line-clamp-2" title={description}>
          {description}
        </p>
      </div>
      <div className="p-4">
        <h3 className="my-2">Price: {price}</h3>
        <button className="action-button" onClick={() => addToCart(details)}>
          Add to cart
        </button>
      </div>
    </div>
  );
};
