import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Stack from "@mui/material/Stack";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

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
      <Modal
        open={modal}
        onClose={toggle}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <Box sx={{ ...style, width: 400 }}>
            <h2 id="parent-modal-title">
              {val1 == undefined ? "Yeni Kişi" : "Düzenleme"}
            </h2>
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
              defaultValue={val2 != undefined ? val2 : ""}
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
              defaultValue={val3 != undefined ? val3 : ""}
              className="form-control"
              required
            />
            <p className="error">{errors.peopleTel?.message}</p>
            <br />
            <br />
            <Stack spacing={2} direction="row">
              <Button
                color="secondary"
                variant="contained"
                onClick={() => resetModal()}
              >
                Kapat
              </Button>
              <Button color="primary" variant="contained" type="submit">
                Kaydet
              </Button>
            </Stack>
          </Box>
        </form>
      </Modal>
    </div>
  );
}
export default ModalExample;
