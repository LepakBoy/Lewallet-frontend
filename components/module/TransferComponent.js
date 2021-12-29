/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Image from "next/image";
import ImageUser from "assets/img/1.png";
import axios from "utils/axios";
import { useRouter } from "next/router";
import DefaultPhoto from "assets/img/default.png";

export default function TransferComponent() {
  const router = useRouter();
  const [search, setSearch] = useState(null);
  const [nodata, setNodata] = useState(false);
  const [data, setData] = useState([]);

  console.log(data, "dataaaaaa");

  const handleChangeText = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();

    if (search === null) {
      return [];
    }
    axios
      .get(`/user?page=1&limit=6&search=${search}&sort=firstName ASC`)
      .then((res) => {
        console.log(res.data.data);
        if (res.data.data.length < 1) {
          setNodata(true);
        } else {
          setNodata(false);
          setData(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleTransferById = (idUser) => {
    router.push({
      pathname: `/transfer/${idUser}`,
    });
  };

  // console.log(data, "hasil");
  // console.log(search, "state seaacrth");
  return (
    <div className="transfer-content w-100 ms-3">
      <div className="dashboard-user-history h-100 ms-2 p-4">
        <div className="transfer-header">
          <div className="transfer-title">Search Reciever</div>
          <form className="form-search-transfer d-flex mt-2">
            <input
              onChange={handleChangeText}
              name="searchName"
              type="text"
              className="input-search-name me-1 w-75"
              placeholder="Search reciever here"
            />
            <button
              onClick={(e) => handleSearch(e)}
              name="login"
              type="submit"
              className="w-25 ms-1 btn-login btn-auth"
            >
              Search
            </button>
          </form>
        </div>
        {nodata ? (
          <div className="nodata text-center mt-5 text-danger">
            <span className="nodata-text">User not found</span>
          </div>
        ) : (
          data.map((item) => (
            <div
              className="list-detail-history d-flex mt-4"
              key={item.id}
              onClickCapture={() => handleTransferById(item.id)}
            >
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
                <div className="list-history-status">
                  {item.noTelp ? item.noTelp : "no phone number"}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
