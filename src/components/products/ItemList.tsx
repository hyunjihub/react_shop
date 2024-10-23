import { IProduct } from "../../store/products";
import ProductItem from "./ProductItem";

const ItemList = ({ menu, products }): JSX.Element => {
  return (
    <>
      <h1 className="mb-6 text-4xl font-bold text-center">{menu}</h1>
      <div className="max-w-[1340px] flex gap-6">
        {products.map((item: IProduct, index: number) => (
          <ProductItem key={index} product={item} />
        ))}
      </div>
    </>
  );
};

export default ItemList;
