// import { useState } from 'react'
import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

const passwordRef = useRef(null)

const copyPasstoKeyboard = () => {
  window.navigator.clipboard.writeText(password)
  passwordRef.current?.select()
  
}


const generatePassword = useCallback(() => {
  let pass = ""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(numberAllowed) str +="0123456789"
  if(charAllowed) str += "!@#$%^&*()_+"

  for(let i=0;i<length;i++){
    const char = Math.floor(Math.random()* str.length + 1);
    pass += str.charAt(char)
  }
  setPassword(pass)
}, [length, numberAllowed, charAllowed])

useEffect(() => {
  generatePassword()
}, [length, numberAllowed, charAllowed])

  return (
    <div className="w-full h-screen bg-gray-800 text-orange-500 rounded-lg px-4 py-3 shadow-md">
      <div className="flex flex-col justify-center items-center outline-none rounded-full bg-gray-700 m-8 p-5">
        <h1 className="text-2xl text-white p-2 mb-2 text-center font-bold">
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 ">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 mr-1 bg-amber-50 rounded-l-1xl text-black font-bold"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button 
          onClick={copyPasstoKeyboard}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 cursor-pointer hover:zoom-105 hover:duration-300">
            Copy
          </button>
        </div>
        <div className="flex flex-row justify-center items-center">
          <input
            type="range"
            min={6}
            max={50}
            value={length}
            className="cursor-pointer mx-5"
            onChange={(e) => setLength(e.target.value)}
            name=""
            id=""
          />
          <label htmlFor="length">Length: {length}</label>
        </div>
        <div className="bg-gray-600 rounded-2xl p-2 m-2">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
            className="hover:cursor-pointer"
            name=""
            id=""
          />
          <label htmlFor="number" className="mr-3">
            Numbers
          </label>

          <input
            type="checkbox"
            defaultChecked={charAllowed}
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
            className="hover:cursor-pointer"
            name=""
            id=""
          />
          <label htmlFor="char">Chars</label>
        </div>
      </div>
    </div>
  );
}

export default App;