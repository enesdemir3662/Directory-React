import React, { useState, useEffect } from "react";
import '../Styles/Modal.css'
//npm install react-icons --save
import { RiCloseLine } from "react-icons/ri";
// import toast from "react-hot-toast";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = Yup.object().shape({
  peopleName: Yup.string()
    .min(1)
    .max(10)
    .required("İsim en fazla 10 karakter olabilir"),
  peopleSurname: Yup.string()
    .min(1)
    .max(10)
    .required("Soyisim en fazla 10 karakter olabilir"),
  peopleTel: Yup.string()
    .min(11)
    .max(11)
    .required("Telefon numarası 11 karakter içermeli"),
});



const Modal = ({ 
  setModalShow,
  person,
  setPerson,
  values,
  setValues,
  setCopyPerson,
}) => {

  const [textModal, setTextModal] = useState({
    peopleName: "",
    peopleSurname: "",
    peopleTel: "",
  });

  useEffect(() => {
    values.name !== ""
      ? setTextModal({
          peopleName: values.name,
          peopleSurname: values.surname,
          peopleTel: values.telephone,
        })
      : setTextModal({
          peopleName: "",
          peopleSurname: "",
          peopleTel: "",
        });
  }, [values]);

  const {register,handleSubmit,formState: { errors },reset,} = useForm({resolver: yupResolver(schema),});

  const onSubmitHandler = () => {
      if (values.name === "") {
        person = [
          ...person,
          {
            peopleName: textModal.peopleName,
            peopleSurname: textModal.peopleSurname,
            peopleTel: textModal.peopleTel,
            id: person.length + 1,
          },
        ];
        setPerson(person);
      } else {
        person.filter((people) => people.id === values.peopleId)[0].peopleName =
          textModal.peopleName;
        person.filter((people) => people.id === values.peopleId)[0].peopleSurname =
          textModal.peopleSurname;
        person.filter((people) => people.id === values.peopleId)[0].peopleTel =
          textModal.peopleTel;
        setPerson(person);
      }
      setTextModal({
        peopleName: "",
        peopleSurname: "",
        peopleTel: "",
      });
      setCopyPerson(person);
    resetModal();
  };

  const resetModal = () => {
    reset();
    setValues({name:"",surname:"",telephone:"",peopleId:1})
    {errors.peopleName = "";}{errors.peopleSurname = "";}{errors.peopleTel = "";}
    setModalShow(false)
  };

  const onChange = (text, name_) => {
    switch (name_) {
      case "peopleName":
        setTextModal((prev) => ({ ...prev, peopleName: text }));
        break;
      case "peopleSurname":
        setTextModal((prev) => ({ ...prev, peopleSurname: text }));
        break;
      case "peopleTel":
        setTextModal((prev) => ({ ...prev, peopleTel: text }));
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className="darkBG" onClick={() => resetModal()} />
      <div className="centered">
        <div className="modal_">
          <div className="modalHeader">
            <h5 className="heading"><p className="modal-title">{values.name===""?"Yeni Kişi":"Düzenleme"}</p></h5>
          </div>
          <button className="closeBtn" onClick={() => resetModal()}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className="modalContent">
          <form onSubmit={handleSubmit(onSubmitHandler)}>
            <input type="text" id="fname" name="peopleName" placeholder="İsim.." 
            {...register("peopleName")}
              onChange={(e) => onChange(e.target.value, "peopleName")}  
              defaultValue={values.name != "" ? values.name : ""}/>
            <p className="error">{errors.peopleName?.message}</p>
            
            <input type="text" id="sname" name="peopleSurname" placeholder="Soyisim.." 
            {...register("peopleSurname")}
              onChange={(e) => onChange(e.target.value, "peopleSurname")}
              defaultValue={values.surname != "" ? values.surname : ""}
            />
            <p className="error">{errors.peopleSurname?.message}</p>
            
              <input type="text" id="tel" name="peopleTel" placeholder="Telefon.." 
              {...register("peopleTel")}
              onChange={(e) => onChange(e.target.value, "peopleTel")}
              defaultValue={values.telephone != "" ? values.telephone : ""}
            />
            <p className="error">{errors.peopleTel?.message}</p>
            <div className="modalActions">
            <div className="actionsContainer">
              <button className="Btn1" type="submit">
                Kaydet
              </button>
              <button
                className="Btn2"
                onClick={() => resetModal()}
              >
                İptal
              </button>
            </div>
          </div>
        </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
