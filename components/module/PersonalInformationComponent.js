import React, { useState } from "react";
import { connect } from "react-redux";

const PersonalInformationComponent = (props) => {
  const user = props.user;
  const fullName = `${user.user.firstName} ${user.user.lastName}`;
  const userPhone = user.user.noTelp;

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
          <span className="personal-list-value">{user.user.firstName}</span>
        </div>
        <div className="card personal-card personal-first-name p-2 my-3">
          <span className="personal-list-title">Last Name</span>
          <span className="personal-list-value">{user.user.lastName}</span>
        </div>
        <div className="card personal-card personal-first-name p-2 my-3">
          <span className="personal-list-title">Email</span>
          <span className="personal-list-value">{user.user.email}</span>
        </div>
        <div className="card personal-card personal-first-name p-2 my-3 d-flex">
          <div className="phone-detail-list w-50">
            <span className="personal-list-title d-block">Phone Number</span>
            <span className="personal-list-value">
              {user.user.noTelp ? userPhone : "no phone number"}
            </span>
          </div>
          {/* <span class="manage-phone-option">Manage</span>  */}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.dataUser,
});

export default connect(mapStateToProps)(PersonalInformationComponent);
