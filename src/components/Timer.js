function Timer(props) {
  return (
    <>
      <h1
        id="timer-label"
        className="text-3xl text-center font-bold col-span-4"
      >
        Session
      </h1>
      <time
        id="time-left"
        className="text-2xl text-center font-bold col-span-4"
      >
        {props.minutes < 10 ? "0" + props.minutes : props.minutes}:
        {props.seconds < 10 ? "0" + props.seconds : props.seconds}
      </time>
    </>
  );
}

export default Timer;
