import React, { useState } from "react";
import Image from "next/image";
import Email from "assets/logo/mail.png";
import Lock from "assets/logo/lock.png";
import Jumbotron from "components/module/JumbotronAuth";

export default function TR() {
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
          <form action="" className="form-login w-100 pt-3 mt-4">
            <div className="input-form-login d-flex align-items-center">
              <Image src={Email} alt="" className="email-logo" />
              <input
                type="email"
                placeholder="Enter your e-mail"
                className="input-email input-login w-100 border-0 ps-4"
              />
            </div>
            <button
              name="login"
              type="submit"
              className="w-100 mt-5 btn-login btn-auth"
            >
              Confirm
            </button>
          </form>
        </div>
      </div>
    </body>
  );
}
