import React, { useState } from "react";
import Image from "next/image";
import Bell from "assets/logo/bell.png";
import NavbarPhoto from "assets/img/navbar-poto.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="wrapper-navbar d-flex justify-content-between">
        <div className="navbar-logo">Lewallet</div>
        <div className="navbar-profile d-flex justify-content-between">
          <div className="navbar-photo-profile pe-4">
            <Image src={NavbarPhoto} alt="photo" />
          </div>
          <div className="navbar-contact-profile pe-4">
            <div className="navbar-porfile-name">Robert Chandler</div>
            <div className="navbar-porfile-phone">+62 8139 3877 7946</div>
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
}
