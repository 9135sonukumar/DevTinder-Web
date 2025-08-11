import EditProfile from "../../components/EditProfile";
import { useAppSelector } from "../../hooks";

const Profile = () => {
  const user = useAppSelector((state) => state.auth);

  return (
    <div className="flex justify-center">
      <EditProfile user={user} />
    </div>
  );
};

export default Profile;
