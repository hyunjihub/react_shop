import { Theme, themeState } from "../../store/theme";

import { useRecoilState } from "recoil";

const Drawer = ({ isDrawerOpen, setIsDrawerOpen }): JSX.Element => {
  const [theme, setTheme] = useRecoilState<Theme>(themeState);

  return (
    <div className="drawer-side">
      <label htmlFor="side-menu" className="drawer-overlay" onClick={() => setIsDrawerOpen(!isDrawerOpen)}></label>
      <ul className="menu w-60 sm:w-80 p-4 overflow-y-auto bg-white dark:bg-base-100">
        <li className="py-3 px-2 rounded-lg cursor-pointer font-semibold hover:bg-[#B7B7B7]/40 dark:hover:bg-[#FCFAEE]/40">
          패션
        </li>
        <li className="py-3 px-2 rounded-lg cursor-pointer font-semibold hover:bg-[#B7B7B7]/40 dark:hover:bg-[#FCFAEE]/40">
          액세서리
        </li>
        <li className="py-3 px-2 rounded-lg cursor-pointer font-semibold hover:bg-[#B7B7B7]/40 dark:hover:bg-[#FCFAEE]/40">
          디지털
        </li>
      </ul>
    </div>
  );
};

export default Drawer;
