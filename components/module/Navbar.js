import React, { useState } from "react";
import Image from "next/image";
import Bell from "assets/logo/bell.png";
import NavbarPhoto from "assets/img/navbar-poto.png";
import { connect } from "react-redux";
import DefaultPhoto from "assets/img/default.png";

const Navbar = (props) => {
  const user = props.user;
  // console.log(user.user.data.firstName, "dari navbar");
  const fullName = `${user.user.firstName} ${user.user.lastName}`;
  const userPhone = user.user.noTelp;
  return (
    <nav className="navbar">
      <div className="wrapper-navbar d-flex justify-content-between">
        <div className="navbar-logo">Lewallet</div>
        <div className="navbar-profile d-flex justify-content-between">
          <div className="navbar-photo-profile me-4">
            <Image
              className="user-photo-navbar"
              src={user.user.image ? DefaultPhoto : DefaultPhoto}
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
