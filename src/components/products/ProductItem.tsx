const ProductItem = ({ product }): JSX.Element => {
  return (
    <a className="border rounded-lg bg-gray-200" href="#">
      <figure className="bg-white h-80 rounded-lg overflow-hidden flex items-center justify-center">
        <img
          className="w-36 max-h-36 rounded-lg object-contain transition-transform duration-500 ease-in-out transform hover:scale-125"
          src={product.image}
          alt={product.title}
        />
      </figure>
      <div className="flex flex-col gap-5 py-10 px-5">
        <strong>{product.title}</strong>
        <p>${product.price}</p>
      </div>
    </a>
  );
};

export default ProductItem;
