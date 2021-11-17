import React, { useState } from "react";
import Image from "next/image";
import ArrowUpRed from "assets/logo/arrow-up-red.png";
import ArrowUp from "assets/logo/arrow-up.png";
import Plus from "assets/logo/plus.png";
import ArrowDnGreen from "assets/logo/arrow-dn-green.png";
import ImageUser from "assets/img/1.png";

export default function DashboardComponent() {
  return (
    <div className="dashboar-content w-100 ms-3">
      <div
        className="
              dashboard-user-information
              w-100
              d-flex
              justify-content-between
              py-3
              px-4
            "
      >
        <div className="dashboard-user-balance d-flex flex-column">
          <div className="user-balance-title user-balance">Balance</div>
          <div className="user-balance-amount user-balance">Rp. 1.200.000</div>
          <div className="user-balance-phone user-balance">
            +62 5637 8882 9901
          </div>
        </div>
        <div className="dashboard-user-option">
          <button className="btn-balance-option d-block w-100">
            <Image src={ArrowUp} alt="" /> Transfer
          </button>
          <button className="btn-balance-option d-block w-100">
            <Image src={Plus} alt="" /> Top Up
          </button>
        </div>
      </div>
      <div className="dashboard-history d-flex mt-3">
        <div className="dashboard-user-chart w-50 me-2 p-4">
          <div className="chart-header d-flex justify-content-between">
            <div className="chart-income">
              <Image
                src={ArrowDnGreen}
                alt="arrow-dn-green"
                className="arrow-up-red d-block"
              />
              <span className="span-d-block d-block">Income</span>

              <span className="chart-income-amount d-block">Rp. 2.150.000</span>
            </div>
            <div className="chart-expense">
              <Image
                src={ArrowUpRed}
                alt="arrow-up-red"
                className="arrow-up-red d-block"
              />
              <span className="span-d-block d-block">Expense</span>
              <span className="chart-expense-amount d-block">
                Rp. 1.560.000
              </span>
            </div>
          </div>
          <div className="chart-history-draw text-center pt-5">SKIP</div>
        </div>
        <div className="dashboard-user-history w-50 ms-2 p-4">
          <div className="history-header d-flex justify-content-between">
            <div className="history-title">Transaction History</div>
            <div className="see-all">See all</div>
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
        </div>
      </div>
    </div>
  );
}
