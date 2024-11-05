import { addToCart, cartState } from "../../store/cart";

import { IProduct } from "../../store/products";
import { Link } from "react-router-dom";
import ProductsLoad from "./ProductsLoad";
import Rating from "../common/Rating";
import { Suspense } from "react";
import { useSetRecoilState } from "recoil";

interface IProductDetail {
  product?: IProduct;
}

const ProductDetail = ({ product }: IProductDetail): JSX.Element => {
  const setCart = useSetRecoilState(cartState);

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = () => {
    setCart((prevCart) =>
      addToCart(prevCart, {
        id: product.id.toString(),
        title: product.title,
        price: product.price,
        count: 1,
        image: product.image,
      })
    );
  };

  return (
    <div className="flex flex-col items-center md:flex-row mt-10">
      <figure className="w-72 h-72 p-5 rounded-2xl mx-auto bg-white flex justify-center items-center">
        <img className="h-64 object-contain" src={product.image} alt={product.title} />
      </figure>
      <div className="flex-[4] py-0 px-0 md:px-10 mt-10 md:mt-0">
        <div className="flex items-center gap-3">
          <h2 className="text-xl font-bold">{product.title}</h2>
          <div className="px-2 bg-emerald-400 rounded-xl text-sm text-black font-semibold dark:text-white">NEW</div>
        </div>

        <p className="py-3">{product.description}</p>
        <Rating rate={product.rating.rate} count={product.rating.count} />
        <p className="py-5 text-3xl font-medium">${product.price}</p>
        <div className="flex gap-5">
          <button className="btn btn-primary" onClick={handleAddToCart}>
            장바구니에 담기
          </button>
          <Link
            to="/cart"
            className="p-3 rounded-lg hover:bg-black border border-black hover:text-white text-sm font-semibold dark:border-white/70 dark:hover:bg-white/70 dark:hover:text-black/70"
            role="button"
          >
            장바구니로 이동
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
