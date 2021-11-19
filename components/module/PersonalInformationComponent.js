import React, { useState } from "react";

export default function PersonalInformationComponent() {
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
          <span className="personal-list-value">Robert</span>
        </div>
        <div className="card personal-card personal-first-name p-2 my-3">
          <span className="personal-list-title">Last Name</span>
          <span className="personal-list-value">Chandler</span>
        </div>
        <div className="card personal-card personal-first-name p-2 my-3">
          <span className="personal-list-title">Email</span>
          <span className="personal-list-value">chandler@gmail.com</span>
        </div>
        <div className="card personal-card personal-first-name p-2 my-3 d-flex">
          <div className="phone-detail-list w-50">
            <span className="personal-list-title d-block">Phone Number</span>
            <span className="personal-list-value">+62 813-9387-7946</span>
          </div>
          {/* <span class="manage-phone-option">Manage</span>  */}
        </div>
      </div>
    </div>
  );
}
