import React, { useState } from "react";
import Image from "next/image";
import Email from "assets/logo/mail.png";
import Lock from "assets/logo/lock.png";
import Jumbotron from "components/module/JumbotronAuth";
import { useRouter } from "next/router";
import Link from "next/link";
import Cookie from "js-cookie";
import { getUserById } from "stores/action/dataUser";
import { authLogin } from "stores/action/auth";
import { connect } from "react-redux";
import { getDataCookie } from "middleware/authorizationPage";
import { Modal, Button } from "react-bootstrap";

export async function getServerSideProps(context) {
  const dataCookie = await getDataCookie(context);

  if (dataCookie.isLogin) {
    return {
      redirect: {
        destination: "/home/dashboard",
        permanent: false,
      },
    };
  }
  return {
    props: { data: dataCookie },
  };
}

const Login = (props) => {
  const user = props.user;
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const auth = props.auth;
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [invalidAuth, setInvalidAuth] = useState(false);
  const handleClose = () => {
    setShow(false);
  };

  const handleSubmit = () => {
    props
      .authLogin(form)
      .then((res) => {
        Cookie.set("token", res.value.data.data.token);
        Cookie.set("id", res.value.data.data.id);
        props.getUserById(res.value.data.data.id);
        if (res.value.data.data.pin === null) {
          router.push("/auth/create-pin");
        } else {
          router.push("/home/dashboard");
        }
      })
      .catch((err) => {
        setError(err.response.data.msg);
        setShow(true);
        // setInvalidAuth(err.response.msg);
        console.log(err);
        return;
      });
  };

  const handleChageText = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const toResetPassword = () => {
    router.push("/auth/reset-password");
  };

  return (
    <div className="body-login d-flex">
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

          <div className="input-form-login d-flex align-items-center mt-4">
            <Image src={Email} alt="" className="email-logo" />
            <input
              name="email"
              type="email"
              placeholder="Enter your e-mail"
              className="input-email input-login w-100 border-0 ps-4"
              onChange={handleChageText}
            />
          </div>
          <div className="input-form-login d-flex align-items-center mt-5">
            <Image src={Lock} alt="" className="email-logo" />
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              className="input-password input-login w-100 border-0 ps-4"
              onChange={handleChageText}
            />
          </div>
          <div className="forgot-password text-end pt-3">
            <span className="forgot-password-login" onClick={toResetPassword}>
              Forgot Password?
            </span>
          </div>
          {invalidAuth ? (
            <div className="invalid-auth text-center ">
              <span>{invalidAuth}</span>
            </div>
          ) : null}
          <button
            onClick={handleSubmit}
            name="login"
            type="submit"
            className="w-100 mt-5 btn-login btn-auth"
          >
            Login
          </button>
          <div className="register-login-page text-center mt-3">
            Don’t have an account?
            <span className="register-login">
              <Link href="/auth/register">Let’s Sign Up</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.dataUser,
  auth: state.authData,
});

const mapDispatchToProps = {
  getUserById,
  authLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
