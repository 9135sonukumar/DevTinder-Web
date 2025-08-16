/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import TextInput from "../../components/TextInput";
import { useAppDispatch } from "../../hooks";
import Toast from "../../components/Toast";
import axiosInstance from "../../services/axiosInstance";
import { saveUser } from "../../features/Auth/authSlice";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
    password: "",
  });

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const [error, setError] = useState("");

  const [toast, setToast] = useState("");

  const setProfileData = (key: string, value: string) => {
    setError("");
    setProfile({ ...profile, [key]: value });
  };

  const signUpUser = async () => {
    try {
      const res = await axiosInstance.post("singup", profile);
      if (res.status === 200) {
        dispatch(saveUser(res.data.data));
        setToast(res.data.message);
        setError("");
        navigate("/profile");
      }
    } catch (error: any) {
      setError(error.response.data);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card bg-base-300 w-96 shadow-sm">
        <div className="card-body flex flex-col items-center">
          <h2 className="card-title justify-center">DevTinder</h2>
          <TextInput
            lable="First Name"
            value={profile.firstName}
            onChange={(value) => {
              setProfileData("firstName", value);
            }}
          />
          <TextInput
            lable="Last Name"
            value={profile.lastName}
            onChange={(value) => {
              setProfileData("lastName", value);
            }}
          />
          <TextInput
            lable="Email Id"
            value={profile.emailId}
            onChange={(value) => {
              setProfileData("emailId", value);
            }}
          />
          <TextInput
            lable="Password"
            value={profile.password}
            onChange={(value) => {
              setProfileData("password", value);
            }}
          />
          {error && <p className="text-red-500">{error}</p>}
          <div className="card-actions justify-center">
            <button className="btn btn-primary" onClick={signUpUser}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
      {toast && <Toast message={toast} onClose={() => setToast("")} />}
    </div>
  );
};

export default SignUp;
