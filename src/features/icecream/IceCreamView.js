import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./iceCreamSlice";

const IceCreamView = () => {
  const dispatch = useDispatch();
  const numberOfIceCream = useSelector(
    (state) => state.iceCreaM.numberOfIceCreams
  );
  return (
    <>
      <div className="text-xl font-bold text-center">This is IceCream View</div>
      <div className="flex justify-evenly p-4">
        <button onClick={() => dispatch(ordered())} className="btn">
          Order IceCream
        </button>
        <span>Nuber Of iceCream - {numberOfIceCream}</span>
        <button
          onClick={() => dispatch(restocked(3))}
          className="btn bg-green-600"
        >
          Restock iceCream
        </button>
      </div>
    </>
  );
};

export default IceCreamView;
