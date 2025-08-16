import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks";
import axiosInstance from "../../services/axiosInstance";
import { resetUser } from "../../features/Auth/authSlice";

const Navbar = () => {
  const user = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogoout = async () => {
    try {
      const res = await axiosInstance.get("/logout");
      if (res.status === 200) {
        dispatch(resetUser());
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <Link to="/feed" className="btn btn-ghost text-xl">
          {/* <img
            src="https://cdn-1.webcatalog.io/catalog/tinder/tinder-social-preview.png?v=1751848663224"
            alt="DevTinder Logo"
            className="w-25 h-15"
          /> */}
          DevTinder
        </Link>
      </div>
      {user?.photoUrl && (
        <div className="flex gap-2 items-center">
          <p className="font-medium">{`Welcome, ${user.firstName}`}</p>
          <div className="dropdown dropdown-end mx-5">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="photo" src={user?.photoUrl} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-medium"
            >
              <li>
                <Link to={"/profile"} className="justify-between">
                  Profile
                </Link>
              </li>
              <li>
                <Link to="/connections">Connections</Link>
              </li>
              <li>
                <Link to="/requests">Requests</Link>
              </li>
              <li className="text-red-500">
                <a onClick={handleLogoout}>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
