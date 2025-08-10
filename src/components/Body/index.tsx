import { Outlet } from "react-router-dom";
import Navbar from "../NavBar";
import Footer from "../Footer";

const Body = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 p-4">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Body;
