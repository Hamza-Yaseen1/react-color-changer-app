import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [color, setColor] = useState("olive");
  function Add() {
    setColor(color + 1);
  }
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className=" fixed flex flex-wrap justify-center inset-x-0 bottom-2 px-2 ">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-3xl px-5 py-2">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button onClick={()=>setColor("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button onClick={()=>setColor("blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
            style={{ backgroundColor: "blue" }}
          >
            blue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;