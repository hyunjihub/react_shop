import "./assets/css/tailwind.css";

import { BrowserRouter } from "react-router-dom";
import Drawer from "./components/common/Drawer";
import Nav from "./components/layout/Nav";
import Router from "./router/router";
import { useState } from "react";

const App = (): JSX.Element => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <BrowserRouter>
      <input type="checkbox" id="side-menu" className="drawer-toggle" checked={isDrawerOpen} />
      <section className="drawer-content">
        <Nav isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
        <section className="main">
          <Router />
        </section>
        {/* Footer를 렌더링 하세요 */}
      </section>
      <Drawer isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
    </BrowserRouter>
  );
};

export default App;
