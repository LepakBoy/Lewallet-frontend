import React, { useState } from "react";
import Navbar from "components/module/Navbar";
import Sidebar from "components/module/Sidebar";
import Footer from "components/module/Footer";
import ManagePhoneComponent from "components/module/ManagePhoneComponent";
import { getDataCookie } from "middleware/authorizationPage";

export async function getServerSideProps(context) {
  // console.log("ssr is running");
  const dataCookie = await getDataCookie(context);

  if (!dataCookie.isLogin) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}

export default function Profile() {
  return (
    <body>
      <Navbar />
      <main className="d-flex align-items-center">
        <div className="wrapper-main-home mx-auto d-flex">
          <Sidebar />
          <ManagePhoneComponent />
        </div>
      </main>
      <Footer />
    </body>
  );
}
