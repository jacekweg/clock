import React from "react";
import useWindowWidth from "../useWindowWidth";

const Break = (props) => {
  const width = useWindowWidth();
  return (
    <>
      <h1
        id="break-label"
        className="text-base md:text-4xl font-bold underline col-span-2 text-center"
      >
        Break Length
      </h1>

      <button
        id="break-increment"
        className="btn-blue row-start-2"
        onClick={props.increment}
        value="break"
      >
        {width > 1100 ? "Increment" : "+"}
      </button>
      <button
        id="break-decrement"
        className="btn-blue row-start-2"
        onClick={props.decrement}
        value="break"
      >
        {width > 1100 ? "Decrement" : "-"}
      </button>
      <p
        id="break-length"
        className="text-base md:text-2xl font-bold col-span-2 row-start-3 text-center"
      >
        {props.length}
      </p>
    </>
  );
};

export default Break;
