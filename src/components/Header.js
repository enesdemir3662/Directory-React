import React from "react";
import { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ModalExample from "./ModalExample";
function Header({
  setModal,
  modal,
  person,
  setPerson,
  setCopyPerson,
  copyPerson,
}) {
  const [age, setAge] = React.useState("");
  const [textModal, setTextModal] = useState();
  const [modalShow, setModalShow] = useState(false);
  const [newPerson, setNewPerson] = useState([]);
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const onChange = (text) => {
    setTextModal(text);
    person = person.filter((people) => people.peopleName.includes(text));
    text == "" ? setPerson(copyPerson) : setPerson(person);
    if (person.length == 0) {
    }
  };

  const personNew = () => {
    setModal(true);
    setModalShow(true);
  };
  return (
    <div>
      {modalShow && (
        <ModalExample
          modal={modal}
          setModal={setModal}
          person={person}
          setPerson={setPerson}
          setCopyPerson={setCopyPerson}
        />
      )}
      <Stack spacing={2} direction="row" className="mt-3 mb-3">
        <Button
          variant="contained"
          color="primary"
          className="ms-5"
          onClick={() => personNew()}
          style={{ width: "120px" }}
        >
          Yeni Kişi
        </Button>
        <input
          type="text"
          name="search"
          className="form-control"
          placeholder="Ara..."
          onChange={(e) => onChange(e.target.value)}
        />
      </Stack>
    </div>
  );
}
export default Header;
