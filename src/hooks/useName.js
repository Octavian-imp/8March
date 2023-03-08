import { useContext } from "react";
import { NameContext } from "../providers/NameProvider";

const useName = () => {
  return useContext(NameContext);
};

export default useName;
