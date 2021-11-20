import React, { useState } from "react";
import Image from "next/image";
import Email from "assets/logo/mail.png";
import Lock from "assets/logo/lock.png";
import Jumbotron from "components/module/JumbotronAuth";
import Vector from "assets/logo/Vector.png";
import { useRouter } from "next/router";
import axios from "utils/axios";
import Link from "next/link";

export default function Register() {
  const [invalidAuth, setInvalidAuth] = useState(false);
  const router = useRouter();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/auth/register", form)
      .then((res) => {
        console.log(res, "res");
        router.push("/auth/create-pin");
      })
      .catch((err) => {
        console.log(err.response.data.msg, "err");
        setInvalidAuth(err.response.data.msg);
      });
  };

  const handleChageText = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <body className="body-login d-flex">
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
          <form
            action=""
            className="form-login w-100 pt-3 mt-4"
            onSubmit={handleSubmit}
          >
            <div className="input-form-login d-flex align-items-center mt-4">
              <Image src={Vector} alt="" className="email-logo" />
              <input
                name="firstName"
                onChange={handleChageText}
                type="text"
                placeholder="Enter your firstname"
                className="input-email input-login w-100 border-0 ps-4"
              />
            </div>
            <div className="input-form-login d-flex align-items-center mt-4">
              <Image src={Vector} alt="" className="email-logo" />
              <input
                name="lastName"
                onChange={handleChageText}
                type="text"
                placeholder="Enter your Lastname"
                className="input-email input-login w-100 border-0 ps-4"
              />
            </div>
            <div className="input-form-login d-flex align-items-center mt-4">
              <Image src={Email} alt="" className="email-logo" />
              <input
                name="email"
                onChange={handleChageText}
                type="email"
                placeholder="Enter your e-mail"
                className="input-email input-login w-100 border-0 ps-4"
              />
            </div>
            <div className="input-form-login d-flex align-items-center mt-4">
              <Image src={Lock} alt="" className="email-logo" />
              <input
                name="password"
                onChange={handleChageText}
                type="password"
                placeholder="Enter your password"
                className="input-password input-login w-100 border-0 ps-4"
              />
            </div>
            {invalidAuth ? (
              <div className="invalid-auth text-center mt-2">
                <span>{invalidAuth}</span>
              </div>
            ) : null}
            <button
              name="login"
              type="submit"
              className="w-100 mt-5 btn-login btn-auth"
            >
              Register
            </button>
            <div className="register-login-page text-center mt-3">
              Already have an account?
              <span className="register-login">
                <Link href="/auth/login"> Let’s Login</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </body>
  );
}
