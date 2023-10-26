import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./cakeSlice";

const CakeView = () => {
  const dispatch = useDispatch();
  const numberOfCake = useSelector((state) => state.cakE.numberOfCakes);
  return (
    <>
      <div className="text-xl font-bold text-center">This is Cake View</div>
      <div className="flex justify-evenly p-4">
        <button onClick={() => dispatch(ordered())} className="btn">
          Order Cake
        </button>
        <span>Nuber Of Cake - {numberOfCake}</span>
        <button
          onClick={() => dispatch(restocked(3))}
          className="btn bg-green-600"
        >
          Restock Cake
        </button>
      </div>
    </>
  );
};

export default CakeView;
