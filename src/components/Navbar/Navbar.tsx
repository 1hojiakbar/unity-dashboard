import { Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div>
        <h1>Navbar</h1>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Navbar;
