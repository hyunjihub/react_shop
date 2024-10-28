import { cartList, cartState } from "../store/cart";
import { useRecoilValue, useSetRecoilState } from "recoil";

import BreadCrumb from "../components/common/Breadcrumb";
import CartList from "../components/carts/CartList";
import { Link } from "react-router-dom";
import { MENUS } from "../constants/category";
import { Suspense } from "react";

const Cart = (): JSX.Element => {
  const items = useRecoilValue(cartList);
  const setCartState = useSetRecoilState(cartState);

  const handlePurchase = () => {
    if (confirm("정말로 구매하시겠습니까?")) {
      setCartState({ items: {} });
    }
  };

  return (
    <section className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
      <BreadCrumb category={MENUS.HOME} crumb={"장바구니"} />
      <article className="pt-2 lg:pt-4 pb-4 lg:pb-8 px-4 xl:px-2 mb-20 xl:container mx-auto">
        <div className="mt-10 flex flex-col gap-10">
          {items.length === 0 && (
            <>
              <p className="text-2xl">장바구니에 물품이 없습니다.</p>
              <Link
                to="/"
                className="w-max p-3 rounded-lg bg-[#5D3587] hover:bg-[#392467] text-sm text-white font-semibold"
                role="button"
              >
                담으러가기
              </Link>
            </>
          )}
        </div>
        <div className="flex justify-between items-start mt-6">
          <div>
            {items.length !== 0 &&
              items.map((item) => (
                <div key={item.id} className="flex mb-4">
                  <CartList item={item} />
                </div>
              ))}
          </div>

          <div className="flex gap-8 items-center">
            <p className="text-2xl">
              총 : ${items.reduce((total, item) => total + item.price * item.count, 0).toFixed(2)}
            </p>
            <button
              className="p-3 rounded-lg bg-[#5D3587] hover:bg-[#392467] text-sm text-white font-semibold"
              onClick={handlePurchase}
            >
              구매하기
            </button>
          </div>
        </div>
      </article>
    </section>
  );
};

const CartWithSuspense = () => (
  <Suspense fallback={<div>로딩 중...</div>}>
    <Cart />
  </Suspense>
);

export default CartWithSuspense;
