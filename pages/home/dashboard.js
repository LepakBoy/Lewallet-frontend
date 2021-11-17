import React, { useState } from "react";
import Navbar from "components/module/Navbar";
import Sidebar from "components/module/Sidebar";
import DashboardComponent from "components/module/DashboardComponent";
import Footer from "components/module/Footer";

export default function HomeDashboard() {
  return (
    <body>
      <Navbar />
      <main className="d-flex align-items-center">
        <div className="wrapper-main-home mx-auto d-flex">
          <Sidebar />
          <DashboardComponent />
        </div>
      </main>
      <Footer />
    </body>
  );
}
