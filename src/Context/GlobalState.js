import { createContext, useState } from "react";
export const GlobalContext = createContext();
export const GlobalProvider = (props) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [telephone, setTelephone] = useState("");
  return (
    <GlobalContext.Provider
      value={{
        name: name,
        surname: surname,
        telephone: telephone,
        setName,
        setSurname,
        setTelephone,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
