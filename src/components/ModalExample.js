import React, { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
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

function ModalExample({
  person,
  setPerson,
  val1,
  val2,
  val3,
  peopleId,
  modal,
  setModal,
  setCopyPerson,
}) {
  const toggle = () => setModal(!modal);
  console.log("Model RENDER EDİLDİ");
  const [textModal, setTextModal] = useState({
    peopleName: "",
    peopleSurname: "",
    peopleTel: "",
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = (data) => {
    resetModal();
    {
      if (val1 == undefined) {
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
        person.filter((people) => people.id === peopleId)[0].peopleName =
          textModal.peopleName;
        person.filter((people) => people.id === peopleId)[0].peopleSurname =
          textModal.peopleSurname;
        person.filter((people) => people.id === peopleId)[0].peopleTel =
          textModal.peopleTel;
        setPerson(person);
      }
      setTextModal({
        peopleName: "",
        peopleSurname: "",
        peopleTel: "",
      });
      setCopyPerson(person);
    }
    console.log({ data });
  };
  const resetModal = () => {
    reset();
    toggle();
    {
      errors.peopleName = "";
    }
    {
      errors.peopleSurname = "";
    }
    {
      errors.peopleTel = "";
    }
  };
  useEffect(() => {
    val1 != undefined
      ? setTextModal({
          peopleName: val1,
          peopleSurname: val2,
          peopleTel: val3,
        })
      : setTextModal({
          peopleName: "",
          peopleSurname: "",
          peopleTel: "",
        });
  }, [val1]);

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
        console.log("error modal");
        break;
    }
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} onClick={() => resetModal()}>
          {val1 == undefined ? "Yeni Kişi" : "Düzenleme"}
        </ModalHeader>
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <ModalBody>
            <br />
            <input
              {...register("peopleName")}
              name="peopleName"
              placeholder="İsim"
              type="text"
              onChange={(e) => onChange(e.target.value, "peopleName")}
              defaultValue={val1 != undefined ? val1 : ""}
              className="form-control"
              required
            />
            <p className="error">{errors.peopleName?.message}</p>
            <br />
            <input
              {...register("peopleSurname")}
              name="peopleSurname"
              placeholder="Soyisim"
              type="text"
              onChange={(e) => onChange(e.target.value, "peopleSurname")}
              defaultValue={val1 != undefined ? val1 : ""}
              className="form-control"
              required
            />
            <p className="error">{errors.peopleSurname?.message}</p>
            <br />
            <input
              {...register("peopleTel")}
              name="peopleTel"
              placeholder="Telefon"
              type="number"
              onChange={(e) => onChange(e.target.value, "peopleTel")}
              defaultValue={val1 != undefined ? val1 : ""}
              className="form-control"
              required
            />
            <p className="error">{errors.peopleTel?.message}</p>
            <br />
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={() => resetModal()}>
              kapat
            </Button>
            <Button color="primary" type="submit">
              Kaydet
            </Button>{" "}
          </ModalFooter>
        </form>
      </Modal>
    </div>
  );
}
export default ModalExample;
