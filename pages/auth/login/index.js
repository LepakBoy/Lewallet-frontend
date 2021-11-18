import React, { useState } from "react";
import Image from "next/image";
import Email from "assets/logo/mail.png";
import Lock from "assets/logo/lock.png";
import Jumbotron from "components/module/JumbotronAuth";
import axios from "utils/axios";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/auth/login", form)
      .then((res) => {
        console.log(res, "berhasil");
        router.push("/home/dashboard");
      })
      .catch((err) => {
        console.log(err, "err");
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
            <div className="input-form-login d-flex align-items-center">
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
              <span className="forgot-password-login">Forgot Password?</span>
            </div>
            <button
              name="login"
              type="submit"
              className="w-100 mt-5 btn-login btn-auth"
            >
              Login
            </button>
            <div className="register-login-page text-center mt-3">
              Don’t have an account?
              <span className="register-login">Let’s Sign Up</span>
            </div>
          </form>
        </div>
      </div>
    </body>
  );
}