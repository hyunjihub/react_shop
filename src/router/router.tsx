import { Route, Routes } from "react-router-dom";

import Accessory from "../views/Accessory";
import Digital from "../views/Digital";
import Error from "../views/Error";
import Fashion from "../views/Fashion";
import Index from "../views/Index";
import Product from "../views/Product";
import { memo } from "react";

const Router = (): JSX.Element => {
  return (
    <Routes>
      <Route path="*" element={<Error />} />
      <Route path="/" element={<Index />} />
      <Route path="/fashion" element={<Fashion />} />
      <Route path="/accessory" element={<Accessory />} />
      <Route path="/digital" element={<Digital />} />
      <Route path="/product/:id" element={<Product />} />
    </Routes>
  );
};

export default memo(Router);
