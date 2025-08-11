import { removeUserFromFeed } from "../../features/Feed/feedSlice";
import { useAppDispatch } from "../../hooks";
import axiosInstance from "../../services/axiosInstance";

interface CardPorps {
  user: {
    [key: string]: any;
  };
  showButton?: boolean;
}

const UserCard = ({ user, showButton = true }: CardPorps) => {
  const { _id, firstName, lastName, age, gender, about, photoUrl } = user;

  const dispatch = useAppDispatch();

  const sendConnectionReuqet = async (status: string, userId: string) => {
    try {
      const res = await axiosInstance.post(`request/send/${status}/${userId}`);
      if (res.status === 200) {
        dispatch(removeUserFromFeed(userId));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="card bg-base-400 w-96 shadow-sm">
      <figure>
        <img src={photoUrl} alt="photo" className="w-dvh" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {firstName} {lastName ?? ""}
        </h2>
        {age && gender && (
          <p>
            {age}, {gender}
          </p>
        )}
        <p>{about}</p>
        {showButton && (
          <div className="card-actions my-1 justify-center">
            <button
              className="btn btn-primary"
              onClick={() => sendConnectionReuqet("ignored", _id)}
            >
              Ignore
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => sendConnectionReuqet("interested", _id)}
            >
              Interested
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserCard;
