import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { creamOrdered, creamRestocked } from "./iceCreamSlice";

const IceCreamView = () => {
  const [value, setValue] = useState(1);
  const dispatch = useDispatch();
  const numOfIceCreams = useSelector((state) => state.iceCream.numOfIceCreams);

  return (
    <div>
      <p>Number of Ice Creams - {numOfIceCreams}</p>
      <button
        onClick={() => {
          dispatch(creamOrdered());
        }}>
        order Ice Cream
      </button>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
      />
      <button
        onClick={() => {
          dispatch(creamRestocked(value));
        }}>
        Restock Ice Cream
      </button>
    </div>
  );
};

export default IceCreamView;
