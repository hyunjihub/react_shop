import { useEffect, useState } from "react";

import { Category } from "../constants/category";
import { IProduct } from "../store/products";
import ItemList from "../components/products/ItemList";
import Slider from "../components/common/Slider";
import { productsList } from "../store/products";
import { useRecoilValue } from "recoil";

const Index = (): JSX.Element => {
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

  return (
    <>
      <Slider />
      <section className="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 mt-10 xl:container mx-auto">
        <ItemList menu="패션" products={categorizedProducts["패션"] ? categorizedProducts["패션"].slice(0, 4) : []} />
      </section>
      <section className="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
        <ItemList
          menu="액세서리"
          products={categorizedProducts["액세서리"] ? categorizedProducts["액세서리"].slice(0, 4) : []}
        />
      </section>
      <section className="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 mb-20 xl:container mx-auto">
        <ItemList
          menu="디지털"
          products={categorizedProducts["디지털"] ? categorizedProducts["디지털"].slice(0, 4) : []}
        />
      </section>
    </>
  );
};

export default Index;
