import React from "react";
import { useState } from "react";
import ModalExample from "./ModalExample";
import { TextField, Button, Stack } from "@mui/material";
function Header({
  setModal,
  modal,
  person,
  setPerson,
  setCopyPerson,
  copyPerson,
}) {
  const [textModal, setTextModal] = useState();
  const [modalShow, setModalShow] = useState(false);

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
      <Stack spacing={2} ml={5} direction="row">
        <Button
          variant="contained"
          color="primary"
          onClick={() => personNew()}
          style={{ width: "120px" }}
        >
          Yeni Kişi
        </Button>
        <TextField
          label="Ara..."
          id="outlined-size-small"
          name="search"
          size="small"
          type="text"
          onChange={(e) => onChange(e.target.value)}
        />
      </Stack>
    </div>
  );
}
export default Header;
