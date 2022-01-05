import React, { useState, useEffect } from "react";
import axios from "utils/axios";
import Pagination from "react-paginate";

export default function HistoryComponent() {
  const [allHistory, setAllHistory] = useState([]);
  const [timeFilter, setTimeFilter] = useState(["WEEK", "MONTH", "YEAR"]);
  const [paginate, setPaginate] = useState({
    page: 1,
    limit: 6,
    filter: "WEEK",
    totalPage: 0,
  });

  const { page, limit, filter } = paginate;

  const handleFilter = (e) => {
    setPaginate({ ...paginate, filter: e.target.value });
    axios
      .get(`/transaction/history?page=${page}&limit=${limit}&filter=${filter}`)
      .then((res) => {
        setAllHistory(res.data.data);
      })
      .catch((err) => {});
  };

  const getAllHistory = (pg) => {
    axios
      .get(
        `/transaction/history?page=${
          pg ? pg : page
        }&limit=${limit}&filter=${filter}`
      )
      .then((res) => {
        setAllHistory(res.data.data);
        setPaginate({ ...paginate, totalPage: res.data.pagination.totalPage });
      })
      .catch((err) => {});
  };

  useEffect(() => {
    getAllHistory();
  }, []);

  const changeText = (e) => {
    const { name, value } = e.target;
    setPaginate({ ...paginate, [name]: value });
    getAllHistory();
  };

  const handlePagination = (e) => {
    const selectedPage = e.selected + 1;
    setPaginate({ ...paginate, page: selectedPage });
    getAllHistory(selectedPage);
  };

  return (
    <div className="history-content w-100 ms-3">
      <div className="dashboard-user-history h-100 ms-2 p-4" id="w100">
        <div className="history-header d-flex justify-content-between">
          <div className="history-title">Transaction History</div>
          <div className="dropdown">
            <select
              name="filter"
              value={paginate.filter}
              onChange={handleFilter}
            >
              {timeFilter.map((item) => (
                <option key={item} value={item}>
                  {item.toLowerCase()}
                </option>
              ))}
            </select>
          </div>
        </div>
        {allHistory.length > 0 ? (
          allHistory.map((item, index) => (
            <div className="list-detail-history d-flex mt-3" key={index}>
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
        ) : (
          <span>no data</span>
        )}
        <div className="pagination-nav mt-5 mb-2 d-flex justify-content-center">
          {" "}
          <Pagination
            previousLabel={false}
            nextLabel={false}
            breakLabel={"..."}
            pageCount={paginate.totalPage}
            onPageChange={handlePagination}
            containerClassName={"pagination"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            disabledClassName={"disabled"}
            activeClassName={"active"}
          />
        </div>
      </div>
    </div>
  );
}
