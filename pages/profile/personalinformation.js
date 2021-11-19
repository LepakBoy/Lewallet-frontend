import React, { useState } from "react";
import Navbar from "components/module/Navbar";
import Sidebar from "components/module/Sidebar";
import Footer from "components/module/Footer";
import PersonalInformationComponent from "components/module/PersonalInformationComponent";

export default function Profile() {
  return (
    <body>
      <Navbar />
      <main className="d-flex align-items-center">
        <div className="wrapper-main-home mx-auto d-flex">
          <Sidebar />
          <PersonalInformationComponent />
        </div>
      </main>
      <Footer />
    </body>
  );
}
