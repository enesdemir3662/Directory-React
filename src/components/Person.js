import React, { useState, useContext } from "react";
import ModalExample from "./ModalExample";
import { Table, Button } from "@mui/material";
import { GlobalContext } from "../Context/GlobalState";
import { Outlet, Link, useNavigate } from "react-router-dom";

function Person({ person, setPerson, setModal, modal, setCopyPerson }) {
  const removePerson = (id) => {
    setPerson(person.filter((people) => id != people.id));
  };
  console.log("Person render");
  const [peopleId, setPeopleId] = useState(0);
  const [modalShow, setModalShow] = useState(false);
  const { name, setName } = useContext(GlobalContext);
  const { surName, setSurname } = useContext(GlobalContext);
  const { telephone, setTelephone } = useContext(GlobalContext);
  const personEdit = (id) => {
    setModal(true);
    setModalShow(true);
    setPeopleId(id);
  };
  const Navigate = useNavigate();
  const page = (ind) => {
    setName(person[ind].peopleName);
    setSurname(person[ind].peopleSurname);
    setTelephone(person[ind].peopleTel);
    Navigate("/peopleView");
  };

  return (
    <div>
      {modalShow && (
        <ModalExample
          modal={modal}
          setModal={setModal}
          person={person}
          setPerson={setPerson}
          val1={
            person.filter((people) => people.id === peopleId)[0]?.peopleName
          }
          val2={
            person.filter((people) => people.id === peopleId)[0]?.peopleSurname
          }
          val3={person.filter((people) => people.id === peopleId)[0]?.peopleTel}
          peopleId={peopleId}
          setCopyPerson={setCopyPerson}
        />
      )}{" "}
      <div style={{ textAlign: "center" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <thead>
            <tr>
              <th>#</th>
              <th>Adı</th>
              <th>Soyad</th>
              <th>Telefon</th>
              <th>İşlemler</th>
            </tr>
          </thead>
          <tbody>
            {person.map((people, ind) => {
              return (
                <tr key={people.id}>
                  <th scope="row">{ind + 1}</th>
                  <td onClick={() => page(ind)}>{people.peopleName}</td>
                  <td onClick={() => page(ind)}>{people.peopleSurname}</td>
                  <td onClick={() => page(ind)}>{people.peopleTel}</td>
                  <td>
                    <div>
                      <Button
                        sx={{ mr: 2 }}
                        color="error"
                        variant="contained"
                        onClick={() => removePerson(people.id)}
                      >
                        <i className="fa-solid fa-trash"></i>
                      </Button>
                      <Button
                        color="success"
                        variant="contained"
                        onClick={() => personEdit(people.id)}
                      >
                        <i className="fa-solid fa-pen-to-square"></i>
                      </Button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
      <Link to="/peopleView"></Link>
    </div>
  );
}
export default Person;
