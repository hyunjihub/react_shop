import App from "./App";
import { CART_ITEM } from "./constants/category";
import React from "react";
import { RecoilRoot } from "recoil";
import { cartState } from "./store/cart";
import { createRoot } from "react-dom/client";

const container: HTMLElement = document.getElementById("app")!;
const root = createRoot(container);
const initialValue = JSON.parse(localStorage.getItem(CART_ITEM) as string) ?? {};

root.render(
  <React.StrictMode>
    <RecoilRoot initializeState={() => Object.assign(cartState, initialValue)}>
      <App />
    </RecoilRoot>
  </React.StrictMode>
);
