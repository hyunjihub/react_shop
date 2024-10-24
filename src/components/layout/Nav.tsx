import { Link, NavLink } from "react-router-dom";
import { Theme, themeState } from "../../store/theme";
import { useEffect, useState } from "react";

import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { IoMenuSharp } from "react-icons/io5";
import { MENUS } from "../../constants/category";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import Search from "../common/Search";
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
    <nav className="h-16 sticky top-0 z-10 transition-colors duration-300 bg-white dark:bg-black drop-shadow-lg">
      <div className="max-w-[1360px] flex justify-between items-center mx-auto p-2">
        <div className="flex items-center gap-1 dark:text-white">
          <button
            className="p-1 rounded-lg text-2xl block md:hidden hover:bg-[#B7B7B7]/40 dark:hover:bg-[#FCFAEE]/40"
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          >
            <IoMenuSharp />
          </button>
          <ul className="flex gap-[12px]">
            {Object.entries(MENUS).map(([key, value]) => (
              <>
                {value === "홈" ? (
                  <h1 key={key} className="text-lg font-bold cursor-pointer">
                    <Link to={"/"}>React Shop</Link>
                  </h1>
                ) : (
                  <li
                    key={key}
                    className="hidden md:block py-1 px-2 rounded-lg cursor-pointer text-sm font-semibold hover:bg-[#B7B7B7]/40 dark:hover:bg-[#FCFAEE]/40"
                  >
                    <NavLink to={`/${key.toLowerCase()}`}>{value}</NavLink>
                  </li>
                )}
              </>
            ))}
          </ul>
        </div>

        <div className={`flex items-center gap-3 dark:text-white`}>
          <button
            className={`text-2xl transition-transform duration-500 ${isRotated ? "" : "rotate-45"}`}
            onClick={toggleTheme}
          >
            {theme === "light" ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
          </button>
          <Search />
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
      </div>
    </nav>
  );
};

export default Nav;
