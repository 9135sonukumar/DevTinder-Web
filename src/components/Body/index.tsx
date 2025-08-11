import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../NavBar";
import Footer from "../Footer";
import axiosInstance from "../../services/axiosInstance";
import { useEffect } from "react";
import { useAppDispatch } from "../../hooks";
import { saveUser } from "../../features/Auth/authSlice";

const Body = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const fetchUser = async () => {
    try {
      const res = await axiosInstance.get("/profile/view");
      if (res.status === 200) {
        dispatch(saveUser(res.data));
      }
    } catch (err) {
      if (err?.status === 401) {
        navigate("/login");
      }
      console.log("ERROR ====>>", err);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

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
