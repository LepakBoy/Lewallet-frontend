import React, { useState } from "react";
import Image from "next/image";
import ImageUser from "assets/img/1.png";

export default function HistoryComponent() {
  return (
    <div className="history-content w-100 ms-3">
      <div className="dashboard-user-history h-100 ms-2 p-4">
        <div className="history-header d-flex justify-content-between">
          <div className="history-title">Transaction History</div>
          <div className="dropdown">
            <button
              className="btn dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              --Select Fiter--
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* mapping from here  */}
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
