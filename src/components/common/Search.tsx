import { useEffect, useState } from "react";

import { Category } from "../../constants/category";
import { IProduct } from "../../store/products";
import { productsList } from "../../store/products";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";

const Search = (): JSX.Element => {
  const products = useRecoilValue(productsList);
  const [matchedProduct, setMatchedProduct] = useState<IProduct[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    // 검색어에 따라 필터링된 상품 리스트 업데이트
    if (searchTerm.length === 0) {
      setMatchedProduct([]);
      return;
    }

    const searchTermLower = searchTerm.toLowerCase();
    const filteredProducts = products.filter((product) => product.title.toLowerCase().includes(searchTermLower));

    setMatchedProduct(filteredProducts);
  }, [searchTerm, products]);

  const handleFindProduct = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleProductClick = (id: number) => {
    setMatchedProduct([]);
    setSearchTerm("");
    navigate(`/product/${id}`);
  };

  const handleBlur = () => {
    setMatchedProduct([]);
  };

  const handleFocus = () => {
    if (searchTerm.length > 0) {
      const searchTermLower = searchTerm.toLowerCase();
      const filteredProducts = products.filter((product) => product.title.toLowerCase().includes(searchTermLower));
      setMatchedProduct(filteredProducts);
    }
  };

  return (
    <div className="relative">
      <input
        className="hidden sm:block p-3 rounded outline-none bg-[#B7B7B7]/50 placeholder:text-[#B7B7B7] dark:bg-[#FCFAEE]/50 placeholder:text-[#FCFAEE]/70"
        placeholder="검색"
        value={searchTerm}
        onChange={handleFindProduct}
        onBlur={handleBlur}
        onFocus={handleFocus}
      />
      {matchedProduct.length > 0 && (
        <div
          className={`h-80 absolute top-14 bg-white drop-shadow-md overflow-y-auto transition-all duration-300 ease-in-out transform ${
            matchedProduct.length > 0 ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul>
            {matchedProduct.map((item, key) => (
              <li className="p-3 hover:bg-gray-200" key={key} onMouseDown={() => handleProductClick(item.id)}>
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Search;
