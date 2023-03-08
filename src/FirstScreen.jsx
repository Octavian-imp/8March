import { useState } from "react";
import useName from "./hooks/useName";
import "./FirstScreen.scss";

function FirstScreen() {
  const { isName, setName, setIsName } = useName();
  const [inputName, setInputName] = useState("");
  function onClick() {
    setName(inputName);
    setIsName(!isName);
    localStorage.setItem("name", inputName);
    localStorage.setItem(
      "isName",
      `${!JSON.parse(localStorage.getItem("isName"))}`
    );
  }

  return (
    <div
      className={`hiddenFirstScreen absolute h-full w-full bg-[#131313] top-0 left-0 duration-300 ${
        isName && "active"
      }`}
    >
      <div className="flex items-center justify-center h-full ">
        <div className="flex flex-col gap-[1rem_0]">
          <div className="self-center text-3xl">
            <span className="text-cyan-500"> {"<"}</span>
            Enter data
            <span className="text-cyan-500"> {"/>"}</span>
          </div>
          <div className="flex flex-col mt-3 items-start">
            <label htmlFor="name">Enter your name</label>
            <input
              id="name"
              type="text"
              className="w-full px-2 py-1 mt-2 rounded-xl border-2 border-gray-400 hover:border-gray-500 focus:border-cyan-500 duration-150"
              value={inputName}
              onChange={(e) => {
                setInputName(e.target.value);
              }}
            />
          </div>
          <button
            type="button"
            className="rounded-xl border-0 bg-cyan-400 hover:bg-cyan-500 p-3 text-center font-bold"
            onClick={onClick}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default FirstScreen;
