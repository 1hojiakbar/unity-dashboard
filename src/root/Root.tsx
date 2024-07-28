import Navbar from "../components/Navbar/Navbar";
import Overview from "../pages/Overview/Overview";
import Products from "../pages/Products/Products";
import Campaigns from "../pages/Campaigns/Campaigns";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          <Route path={"/"} element={<Overview />} />
          <Route path={"/products"} element={<Products />} />
          <Route path={"/campaigns"} element={<Campaigns />} />
        </Route>
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
