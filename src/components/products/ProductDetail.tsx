import { addToCart, cartState } from "../../store/cart";

import { Link } from "react-router-dom";
import Rating from "../common/Rating";
import { useSetRecoilState } from "recoil";

const ProductDetail = ({ product }): JSX.Element => {
  const setCart = useSetRecoilState(cartState);

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
    <div className="flex flex-col md:flex-row mt-10">
      <figure className="flex-1 p-5 mx-auto">
        <img className="h-72 object-contain" src={product.image} alt={product.title} />
      </figure>
      <div className="flex-[4] py-0 px-0 md:py-10 md:px-20">
        <div className="flex items-center gap-3">
          <h2 className="text-xl font-bold">{product.title}</h2>
          <div className="px-2 bg-[#77E4C8] rounded-xl text-sm text-black font-semibold">NEW</div>
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
            className="p-3 rounded-lg hover:bg-black border border-black hover:text-white text-sm font-semibold"
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
