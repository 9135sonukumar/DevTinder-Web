/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import TextInput from "../TextInput";
import UserCard from "../UserCard";
import axiosInstance from "../../services/axiosInstance";
import { useAppDispatch } from "../../hooks";
import { saveUser } from "../../features/Auth/authSlice";
import Toast from "../Toast";
import Dropdown from "../Dropdown";

interface Props {
  user: {
    [key: string]: any;
  };
}

const EditProfile = ({ user }: Props) => {
  const [profile, setProfile] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    age: user.age ?? "",
    gender: user.gender ?? "",
    photoUrl: user.photoUrl,
    about: user.about,
  });

  const dispatch = useAppDispatch();

  const [error, setError] = useState("");

  const [toast, setToast] = useState("");

  useEffect(() => {
    setProfile({
      firstName: user.firstName,
      lastName: user.lastName,
      age: user.age,
      gender: user.gender,
      photoUrl: user.photoUrl,
      about: user.about,
    });
  }, [user]);

  const setProfileData = (key: string, value: string) => {
    setProfile({ ...profile, [key]: value });
  };

  const saveProfile = async () => {
    setError("");
    try {
      const res = await axiosInstance.patch("/profile/edit", {
        firstName: profile.firstName,
        lastName: profile.lastName,
        age: profile.age,
        gender: profile.gender,
        photoUrl: profile.photoUrl,
        about: profile.about,
      });
      if (res.status === 200) {
        dispatch(saveUser(res.data.data));
        setToast(res.data.message);
      }
    } catch (error: any) {
      console.log(error);
      setError(error?.response?.data);
    }
  };

  return (
    <div className="flex">
      <div className="card bg-base-300 w-96 shadow-sm mx-5">
        <div className="card-body flex flex-col items-center">
          <h2 className="card-title justify-center">Edit Profile</h2>
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
            lable="Age"
            value={profile.age}
            onChange={(value) => {
              setProfileData("age", value);
            }}
          />
          <Dropdown
            label="Gender"
            defaultValue={profile.gender ?? "Select gender"}
            placeholder={"Select gender"}
            onSelect={(value) => {
              setProfileData("gender", value);
            }}
          />
          <TextInput
            lable="Photo Url"
            value={profile.photoUrl}
            onChange={(value) => {
              setProfileData("photoUrl", value);
            }}
          />
          <TextInput
            lable="About"
            type="textarea"
            value={profile.about}
            onChange={(value) => {
              setProfileData("about", value);
            }}
          />
          {error && <p className="text-red-500">{error}</p>}
          <div className="card-actions justify-center">
            <button className="btn btn-primary" onClick={saveProfile}>
              Save
            </button>
          </div>
        </div>
      </div>
      <UserCard
        user={{
          firstName: profile.firstName,
          lastName: profile.lastName,
          age: profile.age,
          gender: profile.gender,
          photoUrl: profile.photoUrl,
          about: profile.about,
        }}
        showButton={false}
      />
      {toast && <Toast message={toast} onClose={() => setToast("")} />}
    </div>
  );
};

export default EditProfile;
