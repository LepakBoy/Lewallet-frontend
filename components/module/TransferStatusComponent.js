import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import SuccessLogo from "assets/logo/success.png";
import FailedLogo from "assets/logo/failed.png";
import DownloadLogo from "assets/logo/download.png";
import { useRouter } from "next/router";

export default function TransferStatusComponent(props) {
  const user = useSelector((state) => state.dataUser.user);
  const router = useRouter();
  useEffect(() => {}, []);

  const toHome = () => {
    router.push("/home/dashboard");
  };

  const { detail } = props;

  return (
    <div className="transfer-status-content w-100 ms-3 ms-2 p-4">
      <div className="detail-transfer-confirmation">
        <div className="status-transfer-summary text-center py-3">
          <Image
            src={detail.status === "200" ? SuccessLogo : FailedLogo}
            alt="status-logo"
            className="status-logo"
          />
          <span className="transfer-status-alert d-block mt-3">
            {detail.status === "200" ? "Transfer Success" : "Transfer Failed"}
          </span>
          <span className="status-notes d-block mt-3 w-75 mx-auto px-5">
            We cannot transfer your money at the moment, we recommend you to
            check your internet connection and try again.
          </span>
        </div>
        <div className="title-confirmation">Details</div>
        <div className="card card-confirmation border-0 mt-3 p-2">
          <div className="title-card">
            <span className="title-card-list">Amount</span>
          </div>
          <div className="title-card">
            <span className="title-card-content">{`Rp. ${detail.amount}`}</span>
          </div>
        </div>
        <div className="card card-confirmation border-0 mt-3 p-2">
          <div className="title-card">
            <span className="title-card-list">Balance Left</span>
          </div>
          <div className="title-card">
            <span className="title-card-content">{`Rp. ${user.balance}`}</span>
          </div>
        </div>
        <div className="card card-confirmation border-0 mt-3 p-2">
          <div className="title-card">
            <span className="title-card-list">Date & Time</span>
          </div>
          <div className="title-card">
            <span className="title-card-content">{detail.date}</span>
          </div>
        </div>
        <div className="card card-confirmation border-0 mt-3 p-2">
          <div className="title-card">
            <span className="title-card-list">Notes</span>
          </div>
          <div className="title-card">
            <span className="title-card-content">{detail.notes}</span>
          </div>
        </div>
        <div className="transfer-header mt-4 pt-4">
          <div className="transfer-title">Transfer To</div>
        </div>
        <div className="detail-reciever-byid d-flex mt-2 ps-3">
          <img
            className="detail-reciever-image"
            src={
              detail.image
                ? `${process.env.URL_BACKEND_LOCAL}/uploads/${detail.image}`
                : "/img/default.png"
            }
            alt="history-img"
          />
          <div className="detail-reciever ms-3 pt-2">
            <div className="transfer-detail-name">{`${detail.firstName} ${detail.lastName}`}</div>
            <div className="transfer-detail-phone">{detail.noTelp}</div>
          </div>
        </div>
        <div className="button-continue mt-4 text-end">
          {/* <button className="button-download-pdf px-4 py-2 mt-5 border-0">
            <Image src={DownloadLogo} alt="" />
            Download PDF
          </button> */}
          <button
            onClick={toHome}
            className="button-continue-transfer px-4 mt-5 py-2 border-0"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
