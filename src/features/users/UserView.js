import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./userSlice";

const UserView = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.useR);
  console.log(data.users);
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  if (data.loading) {
    return <div>Loading...</div>;
  }

  if (data.error) {
    return <div>{data.error.message}</div>;
  }

  return (
    <>
      <div className="flex justify-center items-center">
        <div>This is User View</div>
        <div className="grid gap-2 ">
          {data?.users.map((value) => {
            return (
              <div className="bg-black p-4 rounded text-white">
                <span>{value.title}</span>
                <span>{value.body}</span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default UserView;
