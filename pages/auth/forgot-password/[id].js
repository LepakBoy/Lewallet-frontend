import React, { useState } from "react";
import Image from "next/image";
import Lock from "assets/logo/lock.png";
import Jumbotron from "components/module/JumbotronAuth";
import { Modal, Button, FormControl } from "react-bootstrap";
import axios from "utils/axios";
import { useRouter } from "next/router";

export default function ForgotPassword() {
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const router = useRouter();

  const handleClose = () => {
    setShow(false);
  };

  const handleChangeText = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  console.log(form);

  const submit = (e) => {
    e.preventDefault();
    if (!form.newPassword || !form.confirmPassword) {
      setError("Please enter your new password");
      setShow(true);
      return;
    }
    axios
      .patch(`/auth/reset-password`, {
        keysChangePassword: router.query.id,
        ...form,
      })
      .then((res) => {
        console.log(res);
        setError(res.data.msg);
        setShow(true);
        setTimeout(() => {
          router.push("/auth/login");
        }, 2000);
      })
      .catch((err) => {
        console.log(err.response);
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
            <div className="input-form-login d-flex align-items-center mt-5">
              <Image src={Lock} alt="" className="email-logo" />
              <input
                name="newPassword"
                type="password"
                placeholder="Enter your password"
                className="input-password input-login w-100 border-0 ps-4"
                onChange={handleChangeText}
              />
            </div>
            <div className="input-form-login d-flex align-items-center mt-5">
              <Image src={Lock} alt="" className="email-logo" />
              <input
                name="confirmPassword"
                type="password"
                placeholder="Enter your password"
                className="input-password input-login w-100 border-0 ps-4"
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
