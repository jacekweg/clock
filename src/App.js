function App() {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-2 px-4 border-4 border-black">
      <div className="grid grid-cols-4 grid-rows-6 gap-1">
        <h1
          id="session-label"
          className="text-4xl font-bold underline col-span-2 text-center"
        >
          Session Length
        </h1>
        <h1
          id="break-label"
          className="text-4xl font-bold underline col-span-2 text-center"
        >
          Break Length
        </h1>

        <button id="session-increment" className="btn-blue">
          Increment
        </button>
        <button id="session-decrement" className="btn-blue">
          Decrement
        </button>
        <button id="break-increment" className="btn-blue">
          Increment
        </button>
        <button id="break-decrement" className="btn-blue">
          Decrement
        </button>
        <p
          id="session-length"
          className="text-2xl font-bold col-span-2 text-center"
        >
          25
        </p>
        <p
          id="break-length"
          className="text-2xl font-bold col-span-2 text-center"
        >
          5
        </p>
        <h1
          id="timer-label"
          className="text-3xl text-center font-bold col-span-4"
        >
          Session
        </h1>
        <p id="time-left" className="text-2xl text-center font-bold col-span-4">
          25:00
        </p>
        <button id="start_stop" className="btn-blue col-span-2">
          Start/Stop
        </button>
        <button id="reset" className="btn-blue col-span-2">
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
