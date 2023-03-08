import { createContext, useMemo, useState } from "react";

export const NameContext = createContext({
  name: localStorage.getItem("name"),
  isName: localStorage.getItem("isName"),
});

export const NameProvider = ({ children }) => {
  const [name, setName] = useState(
    JSON.stringify(localStorage.getItem("name"))
  );
  const [isName, setIsName] = useState(
    JSON.parse(localStorage.getItem("isName"))
  );
  const value = useMemo(
    () => ({ name, isName, setName, setIsName }),
    [name, isName, setName, setIsName]
  );
  return <NameContext.Provider value={value}>{children}</NameContext.Provider>;
};
