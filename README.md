# React Shop

TypeScript + React + Vite를 이용한 쇼핑몰

![](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![](https://img.shields.io/badge/ReactRouter-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)
![](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![](https://img.shields.io/badge/Recoil-3578E5?style=for-the-badge&logo=recoil&logoColor=white)
![](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

[React Shop 바로가기](https://react-shop-seven-sigma.vercel.app/)

## 디렉토리 구조

```
📦api
 ┗ 📜handler.ts
📦public
📦src
 ┣ 📂assets
 ┃ ┣ 📂css
 ┃ ┃ ┗ 📜tailwind.css
 ┃ ┣ 📂img
 ┃ ┃ ┣ 📂carousel
 ┃ ┃ ┣ 📂favicon
 ┃ ┃ ┗ 📂svg
 ┣ 📂components
 ┃ ┣ 📂carts
 ┃ ┃ ┣ 📜CartList.tsx
 ┃ ┃ ┗ 📜CartView.tsx
 ┃ ┣ 📂common
 ┃ ┃ ┣ 📜Breadcrumb.tsx
 ┃ ┃ ┣ 📜Confirm.tsx
 ┃ ┃ ┣ 📜Drawer.tsx
 ┃ ┃ ┣ 📜Rating.tsx
 ┃ ┃ ┣ 📜Search.tsx
 ┃ ┃ ┗ 📜Slider.tsx
 ┃ ┣ 📂layout
 ┃ ┃ ┣ 📜Footer.tsx
 ┃ ┃ ┗ 📜Nav.tsx
 ┃ ┣ 📂products
 ┃ ┃ ┣ 📜ItemList.tsx
 ┃ ┃ ┣ 📜ProductDetail.tsx
 ┃ ┃ ┣ 📜ProductItem.tsx
 ┃ ┃ ┗ 📜ProductsLoad.tsx
 ┣ 📂constants
 ┃ ┣ 📜category.ts
 ┃ ┗ 📜constants.ts
 ┣ 📂helpers
 ┃ ┗ 📜helpers.ts
 ┣ 📂router
 ┃ ┗ 📜router.tsx
 ┣ 📂store
 ┃ ┣ 📜cart.ts
 ┃ ┣ 📜products.ts
 ┃ ┗ 📜theme.ts
 ┣ 📂views
 ┃ ┣ 📜Accessory.tsx
 ┃ ┣ 📜Cart.tsx
 ┃ ┣ 📜Digital.tsx
 ┃ ┣ 📜Error.tsx
 ┃ ┣ 📜Fashion.tsx
 ┃ ┣ 📜Index.tsx
 ┃ ┗ 📜Product.tsx
 ┣ 📜App.tsx
 ┣ 📜main.tsx
 ┗ 📜vite-env.d.ts
📜.gitignore
📜.prettierrc
📜index.html
📜package-lock.json
📜package.json
📜postcss.config.cjs
📜tailwind.config.cjs
📜tsconfig.json
📜tsconfig.node.json
📜vercel.json
📜vite.config.ts
```

## Cart

- cartState : Recoil의 atom으로, 장바구니 상태를 로컬 스토리지에 저장하여 새로고침 시에도 유지합니다.
- cartList : Recoil의 selector로, 장바구니에 담긴 상품 목록을 가져옵니다. cartState의 항목 ID에 맞는 제품만 필터링하여 장바구니에 표시할 데이터를 반환합니다.
- addToCart : Recoil 상태의 cart에 상품 데이터를 추가하는 함수입니다. 이미 장바구니에 있는 상품이라면 개수를 1 증가시키고, 없는 상품이라면 새로운 항목으로 추가합니다.
- removeFromCart : Recoil 상태의 cart에서 상품 데이터를 제거하는 함수입니다. 상품의 개수가 1이면 해당 상품을 삭제하고, 1보다 많으면 개수를 1 감소시킵니다.
