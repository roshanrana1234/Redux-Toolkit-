import React from "react";
import CakeView from "../features/cake/CakeView";
import IceCreamSlice from "../features/icecream/iceCreamSlice";
import IceCreamView from "../features/icecream/IceCreamView";
import UserView from "../features/users/UserView";

const HomePage = () => {
  return (
    <>
      <h1 className="text-center text-xl font-bold">
        This is All Redux Toolkit
      </h1>
      <CakeView />
      <IceCreamView />
      <UserView />
    </>
  );
};

export default HomePage;
