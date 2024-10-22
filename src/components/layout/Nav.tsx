import { Theme, themeState } from "../../store/theme";
import { useEffect, useState } from "react";

import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { IoMenuSharp } from "react-icons/io5";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { useRecoilState } from "recoil";

const Nav = ({ isDrawerOpen, setIsDrawerOpen }): JSX.Element => {
  const [theme, setTheme] = useRecoilState<Theme>(themeState);
  const [isRotated, setIsRotated] = useState(false);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      if (newTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      return newTheme;
    });
    setIsRotated((prev) => !prev);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <nav className="h-16 sticky top-0 flex justify-between items-center py-2 px-3 z-10 transition-colors duration-300 bg-white dark:bg-black">
      <div className="flex items-center gap-2 dark:text-white">
        <button
          className="p-1 rounded-lg text-2xl block md:hidden hover:bg-[#B7B7B7]/40 dark:hover:bg-[#FCFAEE]/40"
          onClick={() => setIsDrawerOpen(!isDrawerOpen)}
        >
          <IoMenuSharp />
        </button>
        <h1 className="text-lg font-bold cursor-pointer">React Shop</h1>
        <ul className="hidden md:flex">
          <li className="py-1 px-2 rounded-lg cursor-pointer text-sm font-semibold hover:bg-[#B7B7B7]/40 dark:hover:bg-[#FCFAEE]/40">
            패션
          </li>
          <li className="py-1 px-2 rounded-lg cursor-pointer text-sm font-semibold hover:bg-[#B7B7B7]/40 dark:hover:bg-[#FCFAEE]/40">
            액세서리
          </li>
          <li className="py-1 px-2 rounded-lg cursor-pointer text-sm font-semibold hover:bg-[#B7B7B7]/40 dark:hover:bg-[#FCFAEE]/40">
            디지털
          </li>
        </ul>
      </div>

      <div className={`flex items-center gap-3 dark:text-white`}>
        <button
          className={`text-2xl transition-transform duration-500 ${isRotated ? "" : "rotate-45"}`}
          onClick={toggleTheme}
        >
          {theme === "light" ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
        </button>
        <input
          className="hidden sm:block p-3 rounded outline-none bg-[#B7B7B7]/50 placeholder:text-[#B7B7B7]/70 dark:bg-[#FCFAEE]/50 placeholder:text-[#FCFAEE]/70"
          placeholder="검색"
        />
        <button className="text-2xl block sm:hidden">
          <IoIosSearch />
        </button>
        <div className="relative">
          <button className="text-2xl mr-2 mt-2">
            <HiOutlineShoppingBag />
          </button>
          <span className="px-1.5 absolute right-0 bg-red-500 text-white text-sm rounded-full">0</span>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
