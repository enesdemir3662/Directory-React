import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../Context/GlobalState";
function PeopleView() {
  const { name, setName } = useContext(GlobalContext);
  const { surname, setSurname } = useContext(GlobalContext);
  const { telephone, setTelephone } = useContext(GlobalContext);
  return (
    <div>
      <Link to="/">Ana Sayfa</Link>
      <div className="container">
        <p className="people">Ad : {name}</p>
        <p className="people">Soyad : {surname}</p>
        <p className="people">Telefon : {telephone}</p>
      </div>
    </div>
  );
}
export default PeopleView;
