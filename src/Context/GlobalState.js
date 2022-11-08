import { createContext, useState } from "react";
export const GlobalContext = createContext();
export const GlobalProvider = (props) => {
  const [val, setVal] = useState("Enes");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [telephone, setTelephone] = useState("");
  return (
    <GlobalContext.Provider
      value={{
        val: val,
        name: name,
        surname: surname,
        telephone: telephone,
        links: ["a", "b"],
        setVal,
        setName,
        setSurname,
        setTelephone,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
