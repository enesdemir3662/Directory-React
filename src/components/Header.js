import React from "react";
import TextInput from "./TextInput";
import { useState } from "react";
import { Button, Row } from "reactstrap";
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
      <Row className="row-cols-lg-auto g-3 align-items-center ms-5">
        <Button color="primary" className="ms-5 h1" onClick={() => personNew()}>
          {" "}
          Yeni Kişi
        </Button>
        <TextInput
          name="search"
          type="text"
          placeHolder="Ara..."
          onChange={(e) => onChange(e.target.value)}
        />
      </Row>
    </div>
  );
}
export default Header;
