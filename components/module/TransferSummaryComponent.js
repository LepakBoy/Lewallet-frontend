import React, { useState, useEffect } from "react";
import router, { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { getUserById } from "stores/action/dataUser";
import { useSelector } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import axios from "../../utils/axios";

const inputStyle = {
  width: "50px",
  height: "50px",
  textAlign: "center",
};

const inputContainer = {
  width: "100%",
  margin: "auto",
};

export default function TransferSummaryComponet(props) {
  const history = useRouter();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const user = useSelector((state) => state.dataUser.user);
  const [invalid, setInvalid] = useState(false);
  const [pin, setPin] = useState({});
  const [success, setSuccess] = useState(false);
  const allPin = parseInt(
    pin.pin1 + pin.pin2 + pin.pin3 + pin.pin4 + pin.pin5 + pin.pin6
  );
  const date = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Jakarta",
  });

  const detailStatus = { ...props.reciever, date, ...props.data };

  console.log(detailStatus, "ddetail statu");

  const handleClose = () => setShow(false);

  const addPin = (event) => {
    if (event.target.value) {
      const nextSibling = document.getElementById(
        `pin-${parseInt(event.target.name, 10) + 1}`
      );

      if (nextSibling !== null) {
        nextSibling.focus();
      }
    }
    setPin({ ...pin, [`pin${event.target.name}`]: event.target.value });
  };

  const submitPin = () => {
    axios
      .get(`/user/pin?pin=${allPin}`)
      .then((res) => {
        handleTransfer();
        setInvalid(false);
      })
      .catch((err) => {
        console.log(err.response);
        setInvalid(true);
      });
  };

  const handleTransfer = () => {
    axios
      .post("transaction/transfer", props.data)
      .then((res) => {
        if (res.status === 200 && res.statusText === "OK") {
          router.push({
            pathname: "/transfer/status",
            query: { ...detailStatus, status: res.status },
          });
          setSuccess(true);
          dispatch(getUserById(user.id));
        }
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const invalidAct = () => {
    setInvalid(false);
    setShow(false);
  };

  return (
    <div className="transfer-confirmation-content w-100 ms-3 ms-2 p-4">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {invalid ? "Oopss.." : "Enter PIN to Transfer"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {invalid ? (
            "Incorrect pin"
          ) : (
            <p>
              Enter your 6 digits PIN for confirmation to continue transferring
              money.
            </p>
          )}

          <div className="mt-3">
            <div className="row">
              {invalid ? null : (
                <>
                  {" "}
                  <div className={(inputContainer, "col-2")}>
                    <input
                      style={inputStyle}
                      maxLength="1"
                      onChange={(event) => addPin(event)}
                      name="1"
                      id="pin-1"
                    />
                  </div>
                  <div className="col-2">
                    <input
                      style={inputStyle}
                      maxLength="1"
                      onChange={(event) => addPin(event)}
                      name="2"
                      id="pin-2"
                    />
                  </div>
                  <div className="col-2">
                    <input
                      style={inputStyle}
                      maxLength="1"
                      onChange={(event) => addPin(event)}
                      name="3"
                      id="pin-3"
                    />
                  </div>
                  <div className="col-2">
                    <input
                      style={inputStyle}
                      maxLength="1"
                      onChange={(event) => addPin(event)}
                      name="4"
                      id="pin-4"
                    />
                  </div>
                  <div className="col-2">
                    <input
                      style={inputStyle}
                      maxLength="1"
                      onChange={(event) => addPin(event)}
                      name="5"
                      id="pin-5"
                    />
                  </div>
                  <div className="col-2">
                    <input
                      style={inputStyle}
                      maxLength="1"
                      onChange={(event) => addPin(event)}
                      name="6"
                      id="pin-6"
                    />
                  </div>{" "}
                </>
              )}

              <Modal.Footer>
                <Button
                  onClick={invalid ? invalidAct : submitPin}
                  variant="primary"
                  type="submit"
                >
                  Continue
                </Button>
              </Modal.Footer>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <div className="transfer-header">
        <div className="transfer-title">Transfer To</div>
      </div>
      <div className="detail-reciever-byid d-flex mt-2 ps-3">
        <img
          className="detail-reciever-image"
          src={
            props.reciever.image
              ? `${process.env.URL_BACKEND_LOCAL}/uploads/${props.reciever.image}`
              : "/img/default.png"
          }
          alt="history-img"
        />
        <div className="detail-reciever ms-3 pt-2">
          <div className="transfer-detail-name">{`${props.reciever.firstName} ${props.reciever.lastName}`}</div>
          <div className="transfer-detail-phone">{props.reciever.noTelp}</div>
        </div>
      </div>
      <div className="detail-transfer-confirmation mt-3">
        <div className="title-confirmation">Details</div>
        <div className="card card-confirmation border-0 mt-3 p-2">
          <div className="title-card">
            <span className="title-card-list">Amount</span>
          </div>
          <div className="title-card">
            <span className="title-card-content">{`Rp. ${props.data.amount}`}</span>
          </div>
        </div>
        <div className="card card-confirmation border-0 mt-3 p-2">
          <div className="title-card">
            <span className="title-card-list">Balance Left</span>
          </div>
          <div className="title-card">
            <span className="title-card-content">{`Rp. ${
              user.balance - props.data.amount
            }`}</span>
          </div>
        </div>
        <div className="card card-confirmation border-0 mt-3 p-2">
          <div className="title-card">
            <span className="title-card-list">Date & Time</span>
          </div>
          <div className="title-card">
            <span className="title-card-content">{date}</span>
          </div>
        </div>
        <div className="card card-confirmation border-0 mt-3 p-2">
          <div className="title-card">
            <span className="title-card-list">Notes</span>
          </div>
          <div className="title-card">
            <span className="title-card-content">
              {props.data.notes ? props.data.notes : "-"}
            </span>
          </div>
        </div>
        <div className="button-continue mt-3 text-end">
          <button
            onClick={() => setShow(true)}
            className="button-continue-transfer px-4 py-2 border-0"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
