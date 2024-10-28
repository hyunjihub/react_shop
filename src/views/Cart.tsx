import CartView from "../components/carts/CartView";
import { Suspense } from "react";
import { cartList } from "../store/cart";
import { useRecoilValue } from "recoil";

const Cart = (): JSX.Element => {
  const items = useRecoilValue(cartList);
  return (
    <section className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
      <CartView items={items} />
    </section>
  );
};

const CartWithSuspense = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Cart />
  </Suspense>
);

export default CartWithSuspense;
