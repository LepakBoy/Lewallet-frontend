import React, { useState } from "react";
import Navbar from "components/module/Navbar";
import Sidebar from "components/module/Sidebar";
import Footer from "components/module/Footer";
import PersonalInformationComponent from "components/module/PersonalInformationComponent";
import { getDataCookie } from "middleware/authorizationPage";
import axios from "utils/axios";

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

  const response = await axios
    .get(`/user/profile/${dataCookie.id}`, {
      headers: {
        Authorization: `Bearer ${dataCookie.token}`,
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });

  return {
    props: {
      data: response,
    },
  };
}

export default function Profile(props) {
  const dataUser = props.data.data;
  return (
    <body>
      <Navbar />
      <main className="d-flex align-items-center">
        <div className="wrapper-main-home mx-auto d-flex">
          <Sidebar />
          <PersonalInformationComponent data={dataUser} />
        </div>
      </main>
      <Footer />
    </body>
  );
}
