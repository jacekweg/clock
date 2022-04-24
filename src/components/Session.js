import React from "react";
import useWindowWidth from "../useWindowWidth";

const Session = (props) => {
  const width = useWindowWidth();
  return (
    <>
      <h1
        id="session-label"
        className="text-base md:text-4xl font-bold underline col-span-2 text-center"
      >
        Session Length
      </h1>
      <button
        id="session-increment"
        className="btn-blue row-start-2"
        onClick={props.increment}
        value="session"
      >
        {width > 1100 ? "Increment" : "+"}
      </button>
      <button
        id="session-decrement"
        className="btn-blue row-start-2"
        onClick={props.decrement}
        value="session"
      >
        {width > 1100 ? "Decrement" : "-"}
      </button>
      <p
        id="session-length"
        className="text-base md:text-2xl font-bold col-span-2 row-start-3 text-center"
      >
        {props.length}
      </p>
    </>
  );
};

export default Session;
