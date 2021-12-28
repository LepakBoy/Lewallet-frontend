import React from "react";
import { useRouter } from "next/router";

export default function PersonalInformationComponent(props) {
  const router = useRouter();
  const dataUser = props.data;
  const userPhone = dataUser.noTelp;

  const toManagePhone = () => {
    router.push("/profile/managePhone");
  };

  return (
    <div className="profile-content w-100 ms-3 ms-2 p-4 pt-5">
      <div className="personal-header">
        <span className="personal-header-title d-block">
          Personal Information
        </span>
        <span className="personal-header-notes d-block w-50 mt-3 pt-2">
          We got your personal information from the sign up proccess. If you
          want to make changes on your information, contact our support.
        </span>
      </div>
      <div className="personal-detail-information">
        <div className="card personal-card personal-first-name p-2 my-3">
          <span className="personal-list-title">First Name</span>
          <span className="personal-list-value">{dataUser.firstName}</span>
        </div>
        <div className="card personal-card personal-first-name p-2 my-3">
          <span className="personal-list-title">Last Name</span>
          <span className="personal-list-value">{dataUser.lastName}</span>
        </div>
        <div className="card personal-card personal-first-name p-2 my-3">
          <span className="personal-list-title">Email</span>
          <span className="personal-list-value">{dataUser.email}</span>
        </div>
        <div className="card personal-card personal-first-name p-2 my-3 d-flex ">
          <span className="personal-list-title d-block">Phone Number</span>
          <div className="phone-detail-list w-100 d-flex">
            <span className="personal-list-value w-100">
              {dataUser.noTelp ? userPhone : "no phone number"}
            </span>
            <button className="manage-phone-option" onClick={toManagePhone}>
              Manage
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
