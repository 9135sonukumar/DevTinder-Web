/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { saveFeed } from "../../features/Feed/feedSlice";
import { useAppDispatch, useAppSelector } from "../../hooks";
import axiosInstance from "../../services/axiosInstance";
import UserCard from "../../components/UserCard";

const Feed = () => {
  const dispatch = useAppDispatch();
  const feed: any = useAppSelector((state) => state.feed);

  useEffect(() => {
    getFeed();
  }, []);

  const getFeed = async () => {
    try {
      const res = await axiosInstance.get("/user/feed");
      if (res.status === 200) {
        dispatch(saveFeed(res.data.data));
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (feed.length === 0) {
    return (
      <p className="text-center font-medium text-gray-600">
        No new feed availbale for you
      </p>
    );
  }

  return (
    <div className="flex justify-center my-10">
      {feed.length && <UserCard user={feed[0]} />}
    </div>
  );
};

export default Feed;
