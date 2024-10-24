import { useEffect, useState } from "react";

import { Category } from "../../constants/category";
import { IProduct } from "../../store/products";
import { Link } from "react-router-dom";
import { productsList } from "../../store/products";
import { useRecoilValue } from "recoil";

const Search = (): JSX.Element => {
  const products = useRecoilValue(productsList);
  const [matchedProduct, setMatchedProduct] = useState<IProduct[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleFindProduct = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    if (e.target.value.length === 0) {
      setMatchedProduct([]);
      return;
    }
    const searchTerm = e.target.value.toLowerCase();
    const filteredProducts = products.filter((product) => product.title.toLowerCase().includes(searchTerm));
    setMatchedProduct(filteredProducts);
  };

  const handleProductClick = () => {
    setMatchedProduct([]);
    setSearchTerm("");
  };

  return (
    <div className="relative">
      <input
        className="hidden sm:block p-3 rounded outline-none bg-[#B7B7B7]/50 placeholder:text-[#B7B7B7] dark:bg-[#FCFAEE]/50 placeholder:text-[#FCFAEE]/70"
        placeholder="검색"
        value={searchTerm}
        onChange={handleFindProduct}
      />
      {matchedProduct.length > 0 && (
        <div
          className={`h-80 absolute top-14 bg-white drop-shadow-md overflow-y-auto transition-all duration-300 ease-in-out transform ${
            matchedProduct.length > 0 ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul>
            {matchedProduct.map((item, key) => (
              <li className="p-3 hover:bg-gray-200" key={key}>
                <Link to={`/product/${item.id}`} onClick={handleProductClick}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Search;
