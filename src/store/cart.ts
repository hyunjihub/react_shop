import { atom, selector, useSetRecoilState } from "recoil";

import { CART_ITEM } from "../constants/category";
import CONSTANTS from "../constants/constants";
import { IProduct } from "./products";

const productsURL = `${CONSTANTS.IS_DEV ? `/proxy` : `${import.meta.env.VITE_FAKE_STORE_API}`}/products`;

export interface ICartInfo {
  readonly id: number;
  readonly count: number;
}

export interface ICartItems {
  readonly id: string;
  readonly title: string;
  readonly price: number;
  readonly count: number;
  readonly image: string;
}

export interface ICartState {
  readonly items?: Record<string | number, ICartInfo>;
}

/**
 * 카트의 상태는 localStorage 기준으로 초기화 됩니다.
 * 카트의 상태는 새로고침해도 유지되어야 하기 때문입니다.
 */
export const cartState = atom<ICartState>({
  key: "cart",
  default: {},
  effects: [
    ({ setSelf, onSet }) => {
      localStorage.getItem(CART_ITEM) && setSelf(JSON.parse(localStorage.getItem(CART_ITEM) as string));
      onSet((value) => localStorage.setItem(CART_ITEM, JSON.stringify(value)));
    },
  ],
});

export const cartList = selector<ICartItems[]>({
  key: "cartList",
  get: async ({ get }) => {
    const cart = get(cartState);
    try {
      const response = await fetch(productsURL);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const products: IProduct[] = await response.json();
      const cartItemIds = Object.keys(cart.items || {});

      // 장바구니에 있는 아이템들만 필터링
      const matchingProducts = products.filter((product) => cartItemIds.includes(product.id.toString()));

      return matchingProducts.map((product) => ({
        id: product.id.toString(),
        title: product.title,
        price: product.price,
        count: cart.items![product.id.toString()]?.count || 0,
        image: product.image,
      }));
    } catch (error) {
      console.log(`Error: \n${error}`);
      return [];
    }
  },
});

export const addToCart = (cart: ICartState, item: ICartItems) => {
  const tempCart = { ...cart.items };
  const itemId = Number(item.id);

  if (tempCart[itemId]) {
    // 이미 장바구니에 있는 경우, 새로운 객체 생성
    return {
      items: {
        ...tempCart,
        [itemId]: { ...tempCart[itemId], count: tempCart[itemId].count + 1 },
      },
    };
  } else {
    // 장바구니에 없는 경우
    return {
      items: { ...tempCart, [itemId]: { id: itemId, count: 1 } },
    };
  }
};

export const removeFromCart = (cart: ICartState, id: string) => {
  const tempCart = { ...cart.items };

  // 해당 id가 tempCart에 존재하는지 확인
  if (tempCart[id]?.count === 1) {
    delete tempCart[id];
    return { items: tempCart };
  } else {
    return {
      items: {
        ...tempCart,
        [id]: { ...tempCart[id], count: tempCart[id].count - 1 },
      },
    };
  }
};

/**
 * 그 외에 화면을 참고하며 필요한 기능들을 구현 하세요.
 */
