import { ICartState, cartState } from "../../store/cart";

import { useRecoilState } from "recoil";

const Confirm = ({ isConfirm, setIsConfirm }): JSX.Element => {
  const [cart, setCart] = useRecoilState<ICartState>(cartState);
  const buyItems = () => {
    setCart({} as ICartState);
    setIsConfirm(false);
  };
  return (
    <>
      <input type="checkbox" id="confirm-modal" className="modal-toggle" checked={isConfirm} readOnly />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">정말로 구매하시겠습니까?</h3>
          <p className="py-4">장바구니의 모든 상품들이 삭제됩니다.</p>
          <div className="modal-action">
            <label htmlFor="confirm-modal" className="btn btn-primary" data-cart={cart} onClick={buyItems}>
              네
            </label>
            <label htmlFor="confirm-modal" className="btn btn-outline" onClick={() => setIsConfirm(false)}>
              아니오
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Confirm;
