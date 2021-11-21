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
  console.log(dataCookie.id, "datacokieeeeeeeee");

  if (!dataCookie.isLogin) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  }
  return {
    props: { data: dataCookie },
  };
}

export default function HomeDashboard(props) {
  // console.log(props.data, "dashboard page");
  const [dashboard, setDashboard] = useState({});
  const [history, setHistory] = useState({ data: "", pagination: "" });
  const [nav, setNav] = useState("");

  useEffect(() => {
    Promise.all([
      axios.get(`/dashboard/${props.data.id}`, {
        headers: {
          Authorization: `Bearer ${props.data.token}`,
        },
      }),
      axios.get(`/transaction/history?page=2&limit=2&filter=MONTH`, {
        headers: {
          Authorization: `Bearer ${props.data.token}`,
        },
      }),
    ]).then(async ([res1, res2]) => {
      const a = await res1;
      const b = await res2;

      setDashboard(a.data.data);
      setHistory({ data: b.data.data, pagination: b.data.pagination });
    });
  }, []);

  return (
    <body>
      <Navbar />
      <main className="d-flex align-items-center">
        <div className="wrapper-main-home mx-auto d-flex">
          <Sidebar />
          <DashboardComponent dashboard={dashboard} history={history} />
        </div>
      </main>
      <Footer />
    </body>
  );
}
