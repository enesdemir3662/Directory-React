import Person from "./components/Person";
import Header from "./components/Header";
import React, { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";

function App() {

  const [person, setPerson] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [values, setValues] = useState({name:"",surname:"",telephone:"",peopleId:1});
  const [copyPerson, setCopyPerson] = useState([]);

  return (
    <div>
     {modalShow && (
        <Modal
         setModalShow={setModalShow}
          person={person}
          setPerson={setPerson}
          setCopyPerson={setCopyPerson}
          values={values}
          setValues={setValues}
        />
      )}
      <Header
        setModalShow={setModalShow}
        setPerson={setPerson}
        copyPerson={copyPerson}
        setCopyPerson={setCopyPerson}
        person={person}
      />
      <br/>
      <Person
        person={person}
        setPerson={setPerson}
        setValues={setValues}
        setModalShow={setModalShow}
      />
    </div>
  );
}
export default App;
