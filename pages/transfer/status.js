import React, { useState } from "react";
import Navbar from "components/module/Navbar";
import Sidebar from "components/module/Sidebar";
import TransferStatusComponent from "components/module/TransferStatusComponent";
import Footer from "components/module/Footer";
import { getDataCookie } from "middleware/authorizationPage";
import router, { useRouter } from "next/router";

export async function getServerSideProps(context) {
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

export default function TransferStatus() {
  return (
    <body>
      <Navbar />
      <main className="d-flex align-items-center">
        <div className="wrapper-main-home mx-auto d-flex">
          <Sidebar />
          <TransferStatusComponent detail={router.query} />
        </div>
      </main>
      <Footer />
    </body>
  );
}
