import React, { useState, useEffect } from "react";
import Navbar from "components/module/Navbar";
import Sidebar from "components/module/Sidebar";
import TransferComponent from "components/module/TransferComponent";
import TransferSummary from "components/module/TransferSummaryComponent";
import TransferByIdComponent from "components/module/TransferByIdComponent";
import TransferStatusComponent from "components/module/TransferStatusComponent";
import Footer from "components/module/Footer";
import { useRouter } from "next/router";
import axios from "utils/axios";

export default function TransferByIdUser() {
  const router = useRouter();
  const [dataReciever, setDataReciever] = useState([]);
  // console.log(router.query.id, "id dari transge byid");

  useEffect(() => {
    axios
      .get(`/user/profile/${router.query.id}`)
      .then((res) => {
        console.log(res.data.data, "res axios get");
        setDataReciever(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(dataReciever, "dataReciever");
  return (
    <body>
      <Navbar />
      <main className="d-flex align-items-center">
        <div className="wrapper-main-home mx-auto d-flex">
          <Sidebar />
          {/* <TransferStatusComponent /> */}
          {/* <TransferComponent /> */}
          <TransferByIdComponent id={router.query.id} />
          {/* <TransferSummary /> */}
        </div>
      </main>
      <Footer />
    </body>
  );
}

// import { useRouter } from "next/router";

// export default function TransferById() {
//   const router = useRouter();
//   console.log(router.query, "dari id tranger page");
//   const id = router.query;
//   return (
//     <>
//       <h1>aaa</h1>
//       <h1>aaaaaaaaaa</h1>
//     </>
//   );
// }
