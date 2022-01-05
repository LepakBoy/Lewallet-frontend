import React, { useState } from "react";
import Image from "next/image";
import Email from "assets/logo/mail.png";
import Lock from "assets/logo/lock.png";
import Jumbotron from "components/module/JumbotronAuth";
import { Modal, Button } from "react-bootstrap";
import axios from "utils/axios";

export default function TR() {
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    email: "",
    linkDirect: `https://lewallet.vercel.app/auth/forgot-password`,
  });

  const handleClose = () => {
    setShow(false);
  };

  const handleChangeText = (e) => {
    setForm({ ...form, email: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    if (!form.email) {
      setError("Please type your email first");
      setShow(true);
      return;
    }
    axios
      .post(`/auth/forgot-password`, form)
      .then((res) => {
        setError(res.data.msg);
        setShow(true);
        setForm({ ...form, email: "" });
      })
      .catch((err) => {
        setError(err.response.data.msg);
        setShow(true);
      });
  };

  return (
    <body className="body-login d-flex">
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>
            {error.split(" ")[0] === "Success" ? "Success.." : "Oopss.."}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{error}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
      <Jumbotron />
      <div className="form-login d-flex justify-content-center">
        <div className="wrapper-login mt-4">
          <div className="header-login pt-4">
            Start Accessing Banking Needs With All Devices and All Platforms
            With 30.000+ Users
          </div>
          <div className="content-login pt-4">
            Transfering money is eassier than ever, you can access Zwallet
            wherever you are. Desktop, laptop, mobile phone? we cover all of
            that for you!
          </div>
          <form action="" className="form-login w-100 pt-3 mt-4">
            <div className="input-form-login d-flex align-items-center">
              <Image src={Email} alt="" className="email-logo" />
              <input
                type="email"
                placeholder="Enter your e-mail"
                className="input-email input-login w-100 border-0 ps-4"
                onChange={handleChangeText}
              />
            </div>
            <button
              name="login"
              type="submit"
              className="w-100 mt-5 btn-login btn-auth"
              onClick={submit}
            >
              Confirm
            </button>
          </form>
        </div>
      </div>
    </body>
  );
}
