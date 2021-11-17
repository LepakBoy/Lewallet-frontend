import React, { useState } from "react";
import Image from "next/image";
import Dashboard from "assets/logo/grid.png";
import ArrowUp from "assets/logo/arrow-up.png";
import Plus from "assets/logo/plus.png";
import UserLogo from "assets/logo/user.png";
import LogOut from "assets/logo/log-out.png";

export default function Sidebar() {
  return (
    <div className="side-bar">
      <div className="wrapper-side-bar p-4">
        <div className="side-bar-menu pt-2 d-flex align-items-center">
          <Image src={Dashboard} alt="" />
          <span className="side-bar-list side-bar-selected ps-4">
            Dashboard
          </span>
        </div>
        <div className="side-bar-menu pt-5 d-flex align-items-center">
          <Image src={ArrowUp} alt="" />
          <span className="side-bar-list ps-4">Transfer</span>
        </div>
        <div className="side-bar-menu pt-5 d-flex align-items-center">
          <Image src={Plus} alt="" />
          <span className="side-bar-list ps-4">Top Up</span>
        </div>
        <div className="side-ba-menu pt-5 d-flex align-items-center">
          <Image src={UserLogo} alt="" />
          <span className="side-bar-list ps-4">Profile</span>
        </div>
        <div
          className="
                side-bar-menu side-bar-logout
                pt-4
                d-flex
                align-items-center
              "
        >
          <Image src={LogOut} alt="" />
          <span className="side-bar-list ps-4">Logout</span>
        </div>
      </div>
    </div>
  );
}
