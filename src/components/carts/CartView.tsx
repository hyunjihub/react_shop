import BreadCrumb from "../common/Breadcrumb";
import CartList from "./CartList";
import Confirm from "../common/Confirm";
import { ICartItems } from "../../store/cart";
import { Link } from "react-router-dom";
import { useState } from "react";

const CartView = ({ items }): JSX.Element => {
  const [isConfirm, setIsConfirm] = useState(false);

  return (
    <>
      <BreadCrumb category="홈" crumb="장바구니" />
      <div className="mt-6 md:mt-14 px-2 lg:px-0">
        {items.length === 0 && (
          <div>
            <h1 className="text-2xl">장바구니에 물품이 없습니다.</h1>
            <Link to="/" className="btn btn-primary mt-10">
              담으러 가기
            </Link>
          </div>
        )}
        <div className="flex flex-col md:flex-row md:justify-between items-start mt-6">
          <div>
            {items.length !== 0 &&
              items.map((item: ICartItems) => (
                <div key={item.id} className="flex mb-4">
                  <CartList item={item} />
                </div>
              ))}
          </div>

          <div className="flex gap-8 items-center p-5">
            <p className="text-2xl">
              총 : ${items.reduce((total: number, item: ICartItems) => total + item.price * item.count, 0).toFixed(2)}
            </p>
            <button className="btn btn-primary" onClick={() => setIsConfirm(true)}>
              구매하기
            </button>
          </div>
        </div>
      </div>
      <Confirm isConfirm={isConfirm} setIsConfirm={setIsConfirm} />
    </>
  );
};

export default CartView;
