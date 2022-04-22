import React from "react";

const Break = (props) => {
  return (
    <>
      <h1
        id="break-label"
        className="text-4xl font-bold underline col-span-2 text-center"
      >
        Break Length
      </h1>

      <button
        id="break-increment"
        className="btn-blue row-start-2"
        onClick={props.increment}
        value="break"
      >
        Increment
      </button>
      <button
        id="break-decrement"
        className="btn-blue row-start-2"
        onClick={props.decrement}
        value="break"
      >
        Decrement
      </button>
      <p
        id="break-length"
        className="text-2xl font-bold col-span-2 row-start-3 text-center"
      >
        {props.length}
      </p>
    </>
  );
};

export default Break;
