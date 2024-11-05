import { Link } from "react-router-dom";

const ProductItem = ({ product }): JSX.Element => {
  return (
    <Link to={`/product/${product.id}`} className="border rounded-lg h-full flex flex-col dark:border-transparent">
      <figure className="bg-white h-80 rounded-lg overflow-hidden flex items-center justify-center">
        <img
          className="w-36 max-h-36 rounded-lg object-contain transition-transform duration-500 ease-in-out transform hover:scale-125"
          src={product.image}
          alt={product.title}
        />
      </figure>
      <div className="flex flex-col gap-5 py-10 px-5 bg-gray-200 flex-1 justify-between dark:bg-gray-800">
        <strong className="whitespace-normal break-words">{product.title}</strong>
        <p>${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductItem;
