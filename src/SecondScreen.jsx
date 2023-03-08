import { GiCottonFlower } from "react-icons/gi";
import useName from "./hooks/useName";
import "./SecondScreen.scss";

function SecondScreen() {
  const { name } = useName();
  return (
    <div className="min-h-[100vh] flex items-center justify-center">
      <div className="text-xl sm:text-2xl lg:text-4xl textHiddenContainer">
        <span className="text-cyan-500">{"<"} </span>
        Поздравляю тебя, {name.replace(/"/gi, "")}, с 8 марта{" "}
        <GiCottonFlower className="inline-block text-red-500" />
        <span className="textHidden">
          . Если ты оказался парнем, то, увы, сегодня не твой день {":)"}
        </span>
        <span className="text-cyan-500"> {"/>"}</span>
      </div>
    </div>
  );
}

export default SecondScreen;
