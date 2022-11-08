import Person from "./components/Person";
import Header from "./components/Header";
import React, { useState } from "react";
import "./App.css";
import { GlobalProvider } from "./Context/GlobalState";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PeopleView from "./components/PeopleView";
function App() {
  const [person, setPerson] = useState([]);
  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [copyPerson, setCopyPerson] = useState([]);
  return (
    <div>
      <Header
        modal={addModal}
        setModal={setAddModal}
        person={person}
        setPerson={setPerson}
        copyPerson={copyPerson}
        setCopyPerson={setCopyPerson}
      />
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route
              index
              element={
                <Person
                  person={person}
                  setPerson={setPerson}
                  modal={editModal}
                  setModal={setEditModal}
                  setCopyPerson={setCopyPerson}
                />
              }
            />
            <Route path="peopleView" element={<PeopleView />} />
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </div>
  );
}
export default App;
