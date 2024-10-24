import { useEffect, useState } from "react";

import { Category } from "../../constants/category";
import { IProduct } from "../../store/products";
import ProductItem from "./ProductItem";
import { productsList } from "../../store/products";
import { useRecoilValue } from "recoil";

const ItemList = ({ category, length }): JSX.Element => {
  const products = useRecoilValue(productsList);
  const [categorizedProducts, setCategorizedProducts] = useState<{ [key: string]: IProduct[] }>({});

  useEffect(() => {
    if (!products) return;

    const newCategorizedProducts = products.reduce((acc: { [key: string]: IProduct[] }, product) => {
      const productCategory = Category[product.category as keyof typeof Category];
      if (productCategory) {
        if (!acc[productCategory]) {
          acc[productCategory] = [];
        }
        acc[productCategory].push(product);
      }
      return acc;
    }, {});

    setCategorizedProducts(newCategorizedProducts);
  }, [products, setCategorizedProducts]);

  const productList = categorizedProducts[category] || [];

  return (
    <>
      <h1 className="mb-6 text-4xl font-bold text-center">{category}</h1>
      <div className="max-w-[1340px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {Array.isArray(productList) &&
          productList
            .slice(0, length ? length : productList.length)
            .map((item: IProduct, index: number) => <ProductItem key={index} product={item} />)}
      </div>
    </>
  );
};

export default ItemList;
