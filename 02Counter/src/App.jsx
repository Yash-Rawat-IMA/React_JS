import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(15);
  //the useState returns two things, a value and a function to update that value
  // useState takes a value which can be an integer, [], {}, or methods
  // let counter = 15;

  const addValue = () => {
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // They all use the SAME stale value (counter)
    // So result becomes:
    // counter + 1 (repeated 4 times but same base value)
    console.log(counter);
    //React will patch and see them as a single unit updating counter single time
    //to avoid this use the following:
    setCounter((prevCounter) => prevCounter + 1);
    console.log(counter);
    setCounter((prevCounter) => prevCounter + 1);
    console.log(counter);
    setCounter((prevCounter) => prevCounter + 1);
    console.log(counter);
    setCounter((prevCounter) => prevCounter + 1);
    //these four will update the counter value 4 times
    console.log(counter);
    //each console.log(counter) will print 15 as setCounter is calculated first in a batch because: State updates are async
    //React hasn't re-rendered yet, So counter is still old value.
    //prevCounter always gives latest state
    //React batching means: multiple updates are grouped
  };

  const decValue = () => {
    if (counter <= 0) {
      return;
    }
    // setCounter(counter-1);
    // setCounter(counter-1);
    // setCounter(counter-1);
    // setCounter(counter-1);
    console.log(counter);
    setCounter((prevCounter) => Math.max(prevCounter - 1, 0));
    setCounter((prevCounter) => Math.max(prevCounter - 1, 0));
    setCounter((prevCounter) => Math.max(prevCounter - 1, 0));
    setCounter((prevCounter) => Math.max(prevCounter - 1, 0));
    console.log(counter);
  };

  return (
    <>
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Hello! I am Counter 02</h1>
        <h2>Counter Value: {counter}</h2>
        {counter <= 0 && (
          <p
            style={{
              fontWeight: "bold",
              color: "red",
            }}
          >
            Counter can not be less than 0
          </p>
        )}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px",
            margin: "5px",
            gap: "10px",
          }}
        >
          <button onClick={addValue} style={{ padding: "5px", margin: "10px" }}>
            Add Value{" "}
          </button>
          <button onClick={decValue} style={{ padding: "5px", margin: "10px" }}>
            Remove Value
          </button>
        </div>
        <p>footer: {counter}</p>
      </div>
    </>
  );
}

export default App;
