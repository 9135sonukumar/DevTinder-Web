/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useAppDispatch } from "../../hooks";
import { saveUser } from "../../features/Auth/authSlice";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../services/axiosInstance";

const Login = () => {
  const [emailId, setEmailId] = useState("sonu@gmail.com");
  const [password, setPassword] = useState("Sonu@123");
  const [error, setError] = useState<string>("");

  const navigation = useNavigate();

  const dispatch = useAppDispatch();

  const login = async () => {
    if (!emailId || !password) {
      return setError("Email & password required");
    }
    try {
      const res = await axiosInstance.post("login", { emailId, password });
      if (res.status === 200) {
        dispatch(saveUser(res.data.data));
        navigation("/feed");
      }
    } catch (error: any) {
      setError(error?.response?.data ?? "Something went wrong");
    }
  };

  return (
    <div
      className="flex justify-center"
      style={{
        backgroundImage:
          "url('https://techcrunch.com/wp-content/uploads/2023/10/tinder-matchmaker.png')",
      }}
    >
      <div className="card bg-base-100 image-full w-96 shadow-sm my-10">
        <div className="card-body">
          <h2 className="card-title justify-center text-[#E94579]">
            DevTinder
          </h2>
          <label className="input validator my-3">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </g>
            </svg>
            <input
              type="email"
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
              placeholder="mail@site.com"
              required
              className="text-black"
            />
          </label>
          <label className="input validator">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
              </g>
            </svg>
            <input
              type="password"
              required
              placeholder="Password"
              value={password}
              className="text-black"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <p className="text-red-500">{error}</p>
          <div className="card-actionsn my-4 flex justify-center">
            <button className="btn bg-[#E94579] text-white" onClick={login}>
              Login
            </button>
          </div>
          <div className="flex justify-center">
            <Link to="/signup" className="text-black">
              New User? Sign Up here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
