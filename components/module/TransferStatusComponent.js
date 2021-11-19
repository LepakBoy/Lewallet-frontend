import React, { useState } from "react";
import Image from "next/image";
import ImageUser from "assets/img/1.png";
import SuccessLogo from "assets/logo/success.png";
import FailedLogo from "assets/logo/failed.png";
import DownloadLogo from "assets/logo/download.png";

export default function TransferStatusComponent() {
  return (
    <div className="transfer-status-content w-100 ms-3 ms-2 p-4">
      <div className="detail-transfer-confirmation">
        <div className="status-transfer-summary text-center py-3">
          <Image src={FailedLogo} alt="status-logo" className="status-logo" />
          <span className="transfer-status-alert d-block mt-3">
            Transfer Failed
          </span>
          <span className="status-notes d-block mt-3 w-75 mx-auto px-5">
            We can’t transfer your money at the moment, we recommend you to
            check your internet connection and try again.
          </span>
        </div>
        <div className="title-confirmation">Details</div>
        <div className="card card-confirmation border-0 mt-3 p-2">
          <div className="title-card">
            <span className="title-card-list">Amount</span>
          </div>
          <div className="title-card">
            <span className="title-card-content">Rp.100.000</span>
          </div>
        </div>
        <div className="card card-confirmation border-0 mt-3 p-2">
          <div className="title-card">
            <span className="title-card-list">Balance Left</span>
          </div>
          <div className="title-card">
            <span className="title-card-content">Rp. 20.000</span>
          </div>
        </div>
        <div className="card card-confirmation border-0 mt-3 p-2">
          <div className="title-card">
            <span className="title-card-list">Date & Time</span>
          </div>
          <div className="title-card">
            <span className="title-card-content">May 11, 2020 - 12.20</span>
          </div>
        </div>
        <div className="card card-confirmation border-0 mt-3 p-2">
          <div className="title-card">
            <span className="title-card-list">Notes</span>
          </div>
          <div className="title-card">
            <span className="title-card-content">for buying some stock</span>
          </div>
        </div>
        <div className="transfer-header mt-4 pt-4">
          <div className="transfer-title">Transfer To</div>
        </div>
        <div className="detail-reciever-byid d-flex mt-2 ps-3">
          <Image
            className="confirmation-reciever-image"
            src={ImageUser}
            alt="history-img"
          />
          <div className="detail-reciever ms-3 pt-2">
            <div className="transfer-detail-name">Samuel Suhi</div>
            <div className="transfer-detail-phone">+62 813-8492-9994</div>
          </div>
        </div>
        <div className="button-continue mt-4 text-end">
          <button className="button-download-pdf px-4 py-2 mt-5 border-0">
            <Image src={DownloadLogo} alt="" />
            Download PDF
          </button>
          <button className="button-continue-transfer px-4 mt-5 py-2 border-0">
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
}
