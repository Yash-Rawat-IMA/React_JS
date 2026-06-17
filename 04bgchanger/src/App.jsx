import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");
  function changeColor(color) {
    setColor(color);
  }
  return (
    <div
      className="w-full h-screen duration-2000 "
      style={{
        backgroundColor: color,
      }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0">
        <div className="flex flex-wrap justify-center gap-2 shadow-lg px-3 py-2 bg-pink-100 rounded-full text-lg font-bold text-white">
          <button
            onClick={() => changeColor("red")}
            className="px-5 py-1 mx-5 my-1 shadow-lg outline-none rounded-full bg-red-500 cursor-pointer"
          >
            Red
          </button>

          <button
            onClick={() => setColor("green")}
            className="px-5 py-1 mx-5 my-1 shadow-lg outline-none rounded-full bg-green-500 cursor-pointer"
          >
            Green
          </button>
          <button
            onClick={() => setColor("orange")}
            className="px-5 py-1 mx-5 my-1 shadow-lg outline-none rounded-full bg-orange-500 cursor-pointer"
          >
            Orange
          </button>
          <button
            onClick={() => setColor('pink')}
            className="px-5 py-1 mx-5 my-1 shadow-lg outline-none rounded-full bg-pink-500 cursor-pointer"
          >
            Pink
          </button>

          <button
            onClick={() => setColor("blue")}
            className="px-5 py-1 mx-5 my-1 shadow-lg outline-none rounded-full bg-blue-500 cursor-pointer"
          >
            {/* In this button we have used directly set color function to change the color directly instead of using a separate function */}
            Blue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;