import React, { useState } from "react";
import Image from "next/image";
import ImageUser from "assets/img/1.png";

export default function TransferComponent() {
  return (
    <div className="transfer-content w-100 ms-3">
      <div className="dashboard-user-history h-100 ms-2 p-4">
        <div className="transfer-header">
          <div className="transfer-title">Search Reciever</div>
          <input
            type="text"
            className="input-search-name mt-3 w-100"
            placeholder="Search reciever here"
          />
        </div>
        {/* mapping from here */}
        <div className="list-detail-history d-flex mt-4">
          <Image
            className="list-history-img"
            src={ImageUser}
            alt="history-img"
          />
          <div className="detail-histroy-name ms-3 w-50">
            <div className="list-history-name">Samuel Suhi</div>
            <div className="list-history-status">Accept</div>
          </div>
          <div className="list-history-amount w-50 text-end">+Rp.60.000</div>
        </div>
        <div className="list-detail-history d-flex mt-4">
          <Image
            className="list-history-img"
            src={ImageUser}
            alt="history-img"
          />
          <div className="detail-histroy-name ms-3 w-50">
            <div className="list-history-name">Samuel Suhi</div>
            <div className="list-history-status">Accept</div>
          </div>
          <div className="list-history-amount w-50 text-end">+Rp.60.000</div>
        </div>
        <div className="list-detail-history d-flex mt-4">
          <Image
            className="list-history-img"
            src={ImageUser}
            alt="history-img"
          />
          <div className="detail-histroy-name ms-3 w-50">
            <div className="list-history-name">Samuel Suhi</div>
            <div className="list-history-status">Accept</div>
          </div>
          <div className="list-history-amount w-50 text-end">+Rp.60.000</div>
        </div>
        <div className="list-detail-history d-flex mt-4">
          <Image
            className="list-history-img"
            src={ImageUser}
            alt="history-img"
          />
          <div className="detail-histroy-name ms-3 w-50">
            <div className="list-history-name">Samuel Suhi</div>
            <div className="list-history-status">Accept</div>
          </div>
          <div className="list-history-amount w-50 text-end">+Rp.60.000</div>
        </div>
        <div className="list-detail-history d-flex mt-4">
          <Image
            className="list-history-img"
            src={ImageUser}
            alt="history-img"
          />
          <div className="detail-histroy-name ms-3 w-50">
            <div className="list-history-name">Samuel Suhi</div>
            <div className="list-history-status">Accept</div>
          </div>
          <div className="list-history-amount w-50 text-end">+Rp.60.000</div>
        </div>
        <div className="list-detail-history d-flex mt-4">
          <Image
            className="list-history-img"
            src={ImageUser}
            alt="history-img"
          />
          <div className="detail-histroy-name ms-3 w-50">
            <div className="list-history-name">Samuel Suhi</div>
            <div className="list-history-status">Accept</div>
          </div>
          <div className="list-history-amount w-50 text-end">+Rp.60.000</div>
        </div>
      </div>
    </div>
  );
}
