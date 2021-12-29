import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";
import { useRouter } from "next/router";
import Navbar from "components/module/Navbar";
import Sidebar from "components/module/Sidebar";
import Footer from "components/module/Footer";
import TransferSummary from "components/module/TransferSummaryComponent";

export default function TransferSummaryPage() {
  const router = useRouter();
  const [dataTransfer, setDataTransfer] = useState({});
  const [reciever, setReciever] = useState({});

  useEffect(() => {
    setDataTransfer(router.query);

    axios.get(`/user/profile/${router.query.receiverId}`).then((res) => {
      setReciever(res.data.data);
    });
  }, []);

  return (
    <body>
      <Navbar />
      <main className="d-flex align-items-center">
        <div className="wrapper-main-home mx-auto d-flex">
          <Sidebar />
          <TransferSummary data={dataTransfer} reciever={reciever} />
        </div>
      </main>
      <Footer />
    </body>
  );
}
