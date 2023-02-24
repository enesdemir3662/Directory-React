import React,{ useState }  from "react";

function Header({
  person,
  setPerson,
  copyPerson,
  setModalShow
}) {
  const [textModal, setTextModal] = useState();

  //Search Change
  const onChange = (text) => {
    setTextModal(text);
    person = person.filter((people) => people.peopleName.includes(text) || people.peopleSurname.includes(text) || people.peopleTel.includes(text));
    text == "" ? setPerson(copyPerson) : setPerson(person);
    if (person.length == 0) {
      setPerson(copyPerson)
    }
  };

  return (
    <div>
      <br/>
      <div style={{display:"flex"}}>
        <button 
            onClick={() => setModalShow(true)}
            style={{ width: "120px" ,marginLeft:"4rem"}}
            className="newPerson btn">Yeni Kişi</button>
        <div style={{width:"15rem"}}>
            <input type="text" id="outlined-size-small" name="search" placeholder="Ara.."
            style={{marginLeft:"4rem"}} onChange={(e) => onChange(e.target.value)}/>
        </div>
      </div>
    </div>
  );
}
export default Header;
