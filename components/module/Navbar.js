/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Image from "next/image";
import Bell from "assets/logo/bell.png";
import { connect, useSelector } from "react-redux";

const Navbar = (props) => {
  // const dataUser = useSelector((state) => state.dataUser);
  const user = props.user;
  const fullName = `${user.user.firstName} ${user.user.lastName}`;
  const userPhone = user.user.noTelp;

  // console.log(dataUser.user.id, "nmavbart");

  return (
    <nav className="navbar">
      <div className="wrapper-navbar d-flex justify-content-between">
        <div className="navbar-logo">Lewallet</div>
        <div className="navbar-profile d-flex justify-content-between">
          <div className="navbar-photo-profile me-4">
            <img
              className="user-photo-navbar"
              src={
                user.user.image
                  ? `${process.env.URL_BACKEND_LOCAL}/uploads/${user.user.image}`
                  : "/img/default.png"
              }
              alt="photo"
            />
          </div>
          <div className="navbar-contact-profile pe-4">
            <div className="navbar-porfile-name">{fullName}</div>
            <div className="navbar-porfile-phone">
              {user.user.noTelp ? userPhone : "no phone number"}
            </div>
          </div>
          <div className="navbar-notification d-flex align-items-center">
            <Image
              src={Bell}
              alt="notif"
              className="navbar-notification-logo"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  user: state.dataUser,
});

export default connect(mapStateToProps)(Navbar);
