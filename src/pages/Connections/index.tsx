import { useEffect, useState } from "react";
import axiosInstance from "../../services/axiosInstance";

const Connections = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getConnections();
  }, []);

  const getConnections = async () => {
    try {
      const res = await axiosInstance.get("/user/connections");
      if (res.status === 200) {
        setData(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (data.length === 0) {
    return (
      <p className=" text-black text-center font-medium">No Connection found</p>
    );
  }

  return (
    <div className="">
      <h1 className=" text-black text-center text-3xl font-semibold">
        Connections
      </h1>
      {data.map((connection) => {
        const { _id, firstName, lastName, photoUrl, age, gender, about } =
          connection;
        return (
          <div
            key={_id}
            className="flex bg-base-300 my-4 p-4 w-1/3 rounded-box mx-auto"
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
          </div>
        );
      })}
    </div>
  );
};

export default Connections;
