function TimerController(props) {
  return (
    <>
      <button id="start_stop" className="btn-blue col-span-2">
        Start/Stop
      </button>
      <button id="reset" className="btn-blue col-span-2" onClick={props.reset}>
        Reset
      </button>
    </>
  );
}

export default TimerController;
