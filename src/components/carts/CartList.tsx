import { ICartState, addToCart, cartState, removeFromCart } from "../../store/cart";

import { Link } from "react-router-dom";
import { toCurrencyFormat } from "../../helpers/helpers";
import { useRecoilState } from "recoil";

const CartItem = ({ item }): JSX.Element => {
  const [cart, setCart] = useRecoilState<ICartState>(cartState);

  const removeFromCartHandler = () => {
    setCart(removeFromCart(cart, item.id));
  };

  const addToCartHandler = () => {
    setCart(addToCart(cart, item));
  };

  return (
    <div className="lg:flex lg:items-center mt-4 px-2 lg:px-0">
      <Link to={`/product/${item.id}`}>
        <img src={item.image} alt={item.title} className="w-44 h-44 object-contain" />
      </Link>
      <div className="flex flex-col gap-4 p-5">
        <Link to={`/product/${item.id}`} className="text-xl font-semibold hover:underline">
          {item.title}
        </Link>
        <span className="flex items-center gap-3 text-3xl">
          {toCurrencyFormat(item.price * item.count)} <p className="text-2xl">({toCurrencyFormat(item.price)})</p>
        </span>
        <div className="flex">
          <button className="rounded-r-md btn btn-primary" onClick={removeFromCartHandler}>
            -
          </button>
          <p className="py-3 px-4 font-semibold hover:bg-gray-300">{item.count}</p>
          <button className="rounded-l-md btn btn-primary" onClick={addToCartHandler}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

const CartList = ({ item }): JSX.Element => {
  return (
    <div>
      <CartItem item={item} />
    </div>
  );
};

export default CartList;
