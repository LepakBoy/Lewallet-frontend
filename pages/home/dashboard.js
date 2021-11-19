import React, { useState, useEffect } from "react";
import Navbar from "components/module/Navbar";
import Sidebar from "components/module/Sidebar";
import DashboardComponent from "components/module/DashboardComponent";
import Footer from "components/module/Footer";
import { getDataCookie } from "middleware/authorizationPage";
import axios from "utils/axios";

export async function getServerSideProps(context) {
  console.log("ssr is running");
  const dataCookie = await getDataCookie(context);
  // console.log(dataCookie.id, "datacokieeeeeeeee");

  return {
    props: { data: dataCookie },
  };
  // const response = await axios
  //   .get(`/dashboard/${dataCookie.id}`, {
  //     headers: {
  //       Authorization: `Bearer ${dataCookie.token}`,
  //     },
  //   })
  //   .then((res) => {
  //     // console.log(res.data, "dataressssssssssssss");
  //     return res.data.data;
  //   })
  //   .catch((err) => {
  //     return [];
  //   });
  // return {
  //   props: { data: response },
  // };
}

export default function HomeDashboard(props) {
  const [dashboard, setDashboard] = useState(null);
  const [user, setUser] = useState(null);
  const [history, setHistory] = useState(null);
  const [nav, setNav] = useState("");

  // useEffect(() => {
  //   if (!props.data.isLogin) {
  //     return {
  //       redirect: {
  //         destination: "/auth/login",
  //         permanent: false,
  //       },
  //     };
  //   }

  //   console.log(props.data.isLogin, "props");
  //   Promise.all([
  //     axios.get(`/dashboard/${props.data.id}`, {
  //       headers: {
  //         Authorization: `Bearer ${props.data.token}`,
  //       },
  //     }),
  //     axios.get(`/user/profile/${props.data.id}`, {
  //       headers: {
  //         Authorization: `Bearer ${props.data.token}`,
  //       },
  //     }),
  //     axios.get(`/transaction/history?page=2&limit=2&filter=MONTH`, {
  //       headers: {
  //         Authorization: `Bearer ${props.data.token}`,
  //       },
  //     }),
  //   ]).then(async ([res1, res2, res3]) => {
  //     const a = await res1;
  //     const b = await res2;
  //     const c = await res3;

  //     setDashboard(a.data.data);
  //     setUser(b.data.data);
  //     setHistory({ data: c.data.data, pagination: c.data.pagination });
  //   });
  // }, []);

  // console.log(dashboard, "dashboard");
  // console.log(user, "user");
  // console.log(history, "history");
  // console.log(dashboard, "usestate dashboard");
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
