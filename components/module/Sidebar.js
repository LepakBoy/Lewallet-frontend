import React, { useState, useEffect } from "react";
import Image from "next/image";
import Dashboard from "assets/logo/grid.png";
import ArrowUp from "assets/logo/arrow-up.png";
import Plus from "assets/logo/plus.png";
import UserLogo from "assets/logo/user.png";
import LogOut from "assets/logo/log-out.png";
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { route } from "next/dist/server/router";
import axios from "utils/axios";
import { Modal, Button } from "react-bootstrap";
import { getUserById } from "stores/action/dataUser";

export default function Sidebar(props) {
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector((state) => state.dataUser.user);
  const [nominal, setNominal] = useState({ amount: 0 });
  const [show, setShow] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const [error, seterror] = useState("");

  const handleLogout = (e) => {
    axios.post("/auth/logout").then((res) => {
      Cookies.remove("id");
      Cookies.remove("token");
      router.push("/home/dashboard");
      // window.location.href = "/home/dashboard";
    });
  };

  const handleClose = () => setShow(false);

  const handleTextTopup = (e) => {
    setNominal({ amount: e.target.value });
  };

  const handleTopUp = () => {
    if (nominal.amount < 10000 || !nominal.amount) {
      seterror("Minimal Top Up Rp. 10.000");
      setInvalid(true);
      setTimeout(() => {
        setInvalid(false);
      }, 2000);
    } else {
      axios
        .post(`/transaction/top-up`, { amount: nominal.amount })
        .then((res) => {
          window.open(
            res.data.data.redirectUrl,
            "_blank",
            "noreferrer noopenner"
          );
          setShow(false);
        })
        .catch((err) => {
          console.log(err.response);
        });
    }
  };

  return (
    <div className="side-bar">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Topup</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Enter the amount of money, and click submit</p>
          <input
            type="number"
            placeholder="0.00"
            name="amount"
            onChange={handleTextTopup}
          />
          {invalid ? (
            <p
              style={{
                color: "#ff5b37",
                textAlign: "center",
                marginTop: "20px",
              }}
            >
              {error}
            </p>
          ) : null}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" name="submit" onClick={handleTopUp}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="wrapper-side-bar p-4">
        <div className="side-bar-menu pt-2 d-flex align-items-center">
          <Image src={Dashboard} alt="" />
          <span className="side-bar-list  ps-4">
            <Link href="/home/dashboard">Dashboard</Link>
          </span>
        </div>
        <div className="side-bar-menu pt-5 d-flex align-items-center">
          <Image src={ArrowUp} alt="" />
          <span className="side-bar-list ps-4">
            <Link href="/transfer">Transfer</Link>
          </span>
        </div>
        <div className="side-bar-menu pt-5 d-flex align-items-center">
          <Image src={Plus} alt="" />
          <span className="side-bar-list ps-4" onClick={() => setShow(true)}>
            Top Up
          </span>
        </div>
        <div className="side-bar-menu pt-5 d-flex align-items-center">
          <Image src={UserLogo} alt="" />
          <span className="side-bar-list ps-4">
            <Link href="/profile">Profile</Link>
          </span>
        </div>
        <div
          className="
                side-bar-menu side-bar-logout
                pt-4
                d-flex
                align-items-center
              "
        >
          <Image src={LogOut} alt="" />
          <span className="side-bar-list ps-4" onClick={handleLogout}>
            Logout
          </span>
        </div>
      </div>
    </div>
  );
}
