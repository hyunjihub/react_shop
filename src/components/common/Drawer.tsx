import { MENUS } from "../../constants/category";

const Drawer = ({ isDrawerOpen, setIsDrawerOpen }): JSX.Element => {
  return (
    <div className="drawer-side">
      <label htmlFor="side-menu" className="drawer-overlay" onClick={() => setIsDrawerOpen(!isDrawerOpen)}></label>
      <ul className="menu w-60 sm:w-80 p-4 overflow-y-auto bg-white dark:bg-base-100">
        {Object.entries(MENUS).map(([key, value]) => (
          <>
            {value === "홈" ? (
              <></>
            ) : (
              <li
                key={key}
                className="py-3 px-2 rounded-lg cursor-pointer hover:bg-[#B7B7B7]/40 dark:hover:bg-[#FCFAEE]/40"
              >
                {value}
              </li>
            )}
          </>
        ))}
      </ul>
    </div>
  );
};

export default Drawer;
