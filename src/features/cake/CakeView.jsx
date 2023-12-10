import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./cakeSlice";

const CakeView = () => {
  const dispatch = useDispatch();
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  return (
    <div>
      <p>Number of Cakes - {numOfCakes}</p>
      <button
        onClick={() => {
          dispatch(ordered());
        }}>
        order Cake
      </button>
      <button
        onClick={() => {
          dispatch(restocked(5));
        }}>
        Restock Cake
      </button>
    </div>
  );
};

export default CakeView;
