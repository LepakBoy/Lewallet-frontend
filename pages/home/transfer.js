import React, { useState } from "react";
import Navbar from "components/module/Navbar";
import Sidebar from "components/module/Sidebar";
import TransferComponent from "components/module/TransferComponent";
import TransferSummary from "components/module/TransferSummaryComponent";
import TransferByIdComponent from "components/module/TransferByIdComponent";
import Footer from "components/module/Footer";

export default function HomeDashboard() {
  return (
    <body>
      <Navbar />
      <main className="d-flex align-items-center">
        <div className="wrapper-main-home mx-auto d-flex">
          <Sidebar />
          <TransferComponent />
          {/* <TransferByIdComponent /> */}
          {/* <TransferSummary /> */}
        </div>
      </main>
      <Footer />
    </body>
  );
}
