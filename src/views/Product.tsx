import BreadCrumb from "../components/common/Breadcrumb";
import ItemList from "../components/products/ItemList";
import { MENUS } from "../constants/category";
import ProductDetail from "../components/products/ProductDetail";
import { productsList } from "../store/products";
import { useParams } from "react-router";
import { useRecoilValue } from "recoil";

const Product = (): JSX.Element => {
  const { id } = useParams();
  const products = useRecoilValue(productsList);
  const findProduct = products.find((products) => products.id === Number(id));

  return (
    <section className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
      <BreadCrumb category={findProduct?.category} crumb={findProduct?.title} />
      <article className="pt-2 lg:pt-4 pb-4 lg:pb-8 px-4 xl:px-2 mb-20 xl:container mx-auto">
        <ProductDetail product={findProduct} />
      </article>
    </section>
  );
};

export default Product;
