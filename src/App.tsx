import "./assets/css/tailwind.css";

import { BrowserRouter } from "react-router-dom";
import Drawer from "./components/common/Drawer";
import Footer from "./components/layout/Footer";
import Nav from "./components/layout/Nav";
import Router from "./router/router";
import { useState } from "react";

const App = (): JSX.Element => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <BrowserRouter>
      <input
        type="checkbox"
        id="side-menu"
        className="drawer-toggle"
        onChange={() => setIsDrawerOpen((prev) => !prev)}
        checked={isDrawerOpen}
      />
      <section className="drawer-content flex flex-col min-h-screen">
        <Nav isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
        <section className="main flex-grow">
          <Router />
        </section>
        <Footer />
      </section>
      <Drawer isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
    </BrowserRouter>
  );
};

export default App;
