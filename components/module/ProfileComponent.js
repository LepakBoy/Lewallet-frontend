import React, { useState } from "react";
import Image from "next/image";
import ImageNavbar from "assets/img/navbar-poto.png";
import ArrowLeft from "assets/logo/arrow-left.png";
import Link from "next/link";
import { useRouter } from "next/router";

export default function ProfileComponent(props) {
  const router = useRouter();
  const personalInfo = () => {
    router.push("/profile/personalinformation");
  };

  return (
    <div className="profile-content w-100 ms-3 ms-2 p-4 pt-5">
      <div className="user-profile-header text-center mt-4">
        <Image
          src={ImageNavbar}
          alt="user-photo"
          className="user-profile-photo"
        />
        <span className="user-profile-name d-block mt-4">Robert Chandler</span>
        <span className="user-profile-phone d-block mt-3">
          +62 813-9387-7946
        </span>
      </div>
      <div className="user-profile-options w-50 mx-auto mt-4">
        <div
          onClick={personalInfo}
          className="
                profile-menu-list
                personal-information
                p-3
                my-2
                d-flex
                justify-content-between
              "
        >
          <span className="personal-information-text">
            Persenoal Information
          </span>
          <Image src={ArrowLeft} alt="arrow-left" className="arrow-left" />
        </div>
        <div
          className="
                profile-menu-list
                personal-information
                p-3
                my-2
                d-flex
                justify-content-between
              "
        >
          <span className="personal-information-text">Change Password</span>
          <Image src={ArrowLeft} alt="arrow-left" className="arrow-left" />
        </div>
        <div
          className="
                profile-menu-list
                personal-information
                p-3
                my-2
                d-flex
                justify-content-between
              "
        >
          <span className="personal-information-text">Change PIN</span>
          <Image src={ArrowLeft} alt="arrow-left" className="arrow-left" />
        </div>
        <div className="profile-menu-list personal-information p-3 my-2">
          <span className="personal-information-text">Logout</span>
        </div>
      </div>
    </div>
  );
}
