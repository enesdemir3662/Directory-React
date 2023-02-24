import React, { useState } from "react";

function Person({ person, setPerson, setValues,setModalShow }) {

  const removePerson = (id) => {
    setPerson(person.filter((people) => id != people.id));
  };

  const personEdit = (id) => {
    setValues({
      name:person.filter((people) => people.id === id)[0]?.peopleName,
      surname:person.filter((people) => people.id === id)[0]?.peopleSurname,
      telephone : person.filter((people) => people.id === id)[0]?.peopleTel,
      peopleId : id
    })
    setModalShow(true);
  };

  return (
    <div>
      <div style={{ textAlign: "center" }}>
      <table id="customers">
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
                  <td>{people.peopleName}</td>
                  <td>{people.peopleSurname}</td>
                  <td>{people.peopleTel}</td>
                  <td>
                    <div>
                    <button 
            onClick={() => removePerson(people.id)}
            style={{backgroundColor:"red",width:"3rem"}}
            className="newPerson btn"><i className="fa-solid fa-trash"></i></button>
                                <button 
            onClick={() => personEdit(people.id)}
            style={{backgroundColor:"green", width:"3rem",marginLeft:"1rem"}}
            className="newPerson btn"><i className="fa-solid fa-pen-to-square"></i></button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Person;
