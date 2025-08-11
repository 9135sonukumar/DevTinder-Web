import { useEffect, useState } from "react";
import axiosInstance from "../../services/axiosInstance";

const Requests = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getRequests();
  }, []);

  const getRequests = async () => {
    try {
      const res = await axiosInstance.get("/user/requests/received");
      if (res.status === 200) {
        setData(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const reviewRequest = async (status: string, id: string) => {
    try {
      const res = await axiosInstance.post(`request/review/${status}/${id}`);
      if (res.status === 200) {
        getRequests();
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (data.length === 0) {
    return (
      <p className=" text-black text-center font-medium">No Requests found</p>
    );
  }

  return (
    <div className="">
      <h1 className=" text-black text-center text-3xl font-semibold">
        Requests
      </h1>
      {data.map((request: any) => {
        const { _id, firstName, lastName, photoUrl, age, gender, about } =
          request.fromUserId;
        return (
          <div
            key={_id}
            className="flex bg-base-300 my-4 p-4 w-1/2 rounded-box mx-auto items-center"
          >
            <div
              className="w-20 aspect-square rounded-full overflow-hidden border-gray-300 shrink-0"
              style={{
                width: "80px",
                height: "80px",
              }}
            >
              <img
                src={photoUrl}
                alt="photo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mx-3">
              <h1 className="font-bold">
                {firstName} {lastName}
              </h1>
              {age && gender && (
                <p className="font-light from-stone-50">
                  {age}, {gender}
                </p>
              )}
              <p className="font-normal text-1xl line-clamp-2">{about}</p>
            </div>
            <div className="flex justify-around gap-3">
              <button
                className="btn btn-primary"
                onClick={() => reviewRequest("accepted", request._id)}
              >
                Accept
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => reviewRequest("rejected", request._id)}
              >
                Reject
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Requests;
