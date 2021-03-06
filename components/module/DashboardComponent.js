import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import ArrowUpRed from "assets/logo/arrow-up-red.png";
import ArrowUp from "assets/logo/arrow-up.png";
import Plus from "assets/logo/plus.png";
import ArrowDnGreen from "assets/logo/arrow-dn-green.png";
import { connect } from "react-redux";
import Link from "next/link";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

const DashboardComponent = (props) => {
  const router = useRouter();
  const user = props.user;
  const { dashboard, history } = props;
  const userPhone = user.user.noTelp;

  const lableChart = [];
  dashboard.listIncome?.map((item) => {
    lableChart.push(item.day);
  });

  const toTransfer = () => {
    router.push("/transfer");
  };

  const dataIncome = [];
  dashboard.listIncome?.map((item) => {
    dataIncome.push(item.total);
  });

  const dataExpense = [];
  dashboard.listExpense?.map((item) => {
    dataExpense.push(item.total);
  });

  return (
    <div className="dashboar-content w-100">
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
          <div className="user-balance-amount user-balance">{`Rp. ${user.user.balance}`}</div>
          <div className="user-balance-phone user-balance">
            {user.user.noTelp ? userPhone : "no phone number"}
          </div>
        </div>
        <div className="dashboard-user-option">
          <button
            onClick={toTransfer}
            className="btn-balance-option d-block w-100"
          >
            <Image src={ArrowUp} alt="" /> Transfer
          </button>
          <button className="btn-balance-option d-block w-100">
            <Image src={Plus} alt="" /> Top Up
          </button>
        </div>
      </div>
      <div className="dashboard-history d-flex mt-3">
        <div className="dashboard-user-chart  me-2 p-4">
          <div className="chart-header d-flex justify-content-between">
            <div className="chart-income">
              <Image
                src={ArrowDnGreen}
                alt="arrow-dn-green"
                className="arrow-up-red d-block"
              />
              <span className="span-d-block d-block">Income</span>

              <span className="chart-income-amount d-block">
                {dashboard.totalIncome
                  ? `Rp. ${dashboard.totalIncome}`
                  : `Rp. 0`}
              </span>
            </div>
            <div className="chart-expense">
              <Image
                src={ArrowUpRed}
                alt="arrow-up-red"
                className="arrow-up-red d-block"
              />
              <span className="span-d-block d-block">Expense</span>
              <span className="chart-expense-amount d-block">
                {dashboard.totalExpense
                  ? `Rp. ${dashboard.totalExpense}`
                  : `Rp. 0`}
              </span>
            </div>
          </div>
          <div className="chart-history-draw text-center" id="h300">
            <Bar
              data={{
                labels: lableChart,
                datasets: [
                  {
                    label: "income",
                    data: dataIncome,
                    backgroundColor: ["rgba(255, 99, 132, 0.6)"],
                    borderColor: ["rgba(255, 99, 132, 1)"],
                    borderWidth: 2,
                  },
                  {
                    label: "expense",
                    data: dataExpense,
                    backgroundColor: ["rgba(153, 102, 255, 0.6)"],
                    borderColor: ["rgba(153, 102, 255, 1)"],
                    borderWidth: 2,
                  },
                ],
              }}
              height={400}
              width={790}
              options={{
                legend: {
                  position: "top",
                },
                title: {
                  display: true,
                },
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                  y: {
                    type: "linear",
                    display: true,
                    title: {
                      display: true,
                      // text: "Income",
                      color: "#999999",
                      font: {
                        family: "Mulish",
                      },
                      padding: {
                        bottom: 10,
                      },
                    },
                    ticks: {
                      color: "#999999",
                      font: {
                        family: "Mulish",
                      },
                    },

                    beginAtZero: true,
                  },
                  x: {
                    title: {
                      display: true,
                      // text: "Month",
                      color: "#999999",
                      font: {
                        family: "Mulish",
                      },
                      padding: {
                        top: 10,
                      },
                    },
                    ticks: {
                      color: "#999999",
                      font: {
                        family: "Mulish",
                      },
                    },
                  },
                },
                plugins: {
                  legend: {
                    display: false,
                  },
                },
              }}
            />
          </div>
        </div>
        <div className="dashboard-user-history ms-2 p-4">
          <div className="history-header d-flex justify-content-between">
            <div className="history-title">Transaction History</div>
            {/* <div className="see-all">See all</div> */}
            <Link className="see-all" href="/home/history">
              See all
            </Link>
          </div>
          {/* mapping from here */}
          {history.data.length < 1 ? (
            <div className="list-detail-history d-flex mt-4 text-center justify-content-center">
              <div className="list-history-name">No History Data</div>
            </div>
          ) : (
            history.data.map((item) => (
              <div className="list-detail-history d-flex mt-2" key={item.index}>
                <img
                  className="list-history-img"
                  src={
                    item.image
                      ? `${process.env.URL_BACKEND_LOCAL}/uploads/${item.image}`
                      : "/img/default.png"
                  }
                  alt="history-img"
                />
                <div className="detail-histroy-name ms-3 w-50">
                  <div className="list-history-name">{`${item.firstName} ${item.lastName}`}</div>
                  <div className="list-history-status">{item.type}</div>
                </div>
                <div
                  className="list-history-amount p-2 w-50 text-end"
                  id={`${item.type === "send" ? "red" : "green"}`}
                >
                  {`${item.type === "send" ? "-" : "+"}Rp. ${item.amount}`}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.dataUser,
  auth: state.authData,
});

export default connect(mapStateToProps)(DashboardComponent);
