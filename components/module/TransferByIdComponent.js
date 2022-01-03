/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Pencil from "assets/logo/pencil.png";
import router, { useRouter } from "next/router";
import { connect } from "react-redux";
import { Modal, Button } from "react-bootstrap";

const TransferByIdComponent = (props) => {
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const [dataTransfer, setDataTransfer] = useState({
    receiverId: "",
    amount: 0,
    notes: "",
  });

  const user = props.user;

  useEffect(() => {
    setDataTransfer({ receiverId: props.id });
  }, []);

  const handleClose = () => {
    setShow(false);
  };

  const handleChangeText = (e) => {
    setDataTransfer({ ...dataTransfer, [e.target.name]: e.target.value });
  };

  const continueButton = () => {
    if (
      dataTransfer.amount < 10000 ||
      parseInt(dataTransfer.amount) >= user.user.balance ||
      !dataTransfer.amount
    ) {
      setError(
        "Tranfer balance must be more than Rp. 10.000 or less then your balance"
      );
      setShow(true);
      return;
    }

    if (!dataTransfer.notes || dataTransfer.notes === "") {
      setError("Notes must be filled");
      setShow(true);
      return;
    }

    router.push({
      pathname: "/transfer/summary",
      query: dataTransfer,
    });
  };

  return (
    <div className="transfer-content w-100 ms-3 ms-2 p-4">
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>
            {error.split(" ")[0] === "Success" ? "Success.." : "Oopss.."}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{error}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="transfer-header">
        <div className="transfer-title">Tranfer Money</div>
      </div>
      <div className="detail-reciever-byid d-flex mt-4 ps-3">
        <img
          className="detail-reciever-image"
          src={
            props.data.image
              ? `${process.env.URL_BACKEND_LOCAL}/uploads/${props.data.image}`
              : "/img/default.png"
          }
          alt="history-img"
        />
        <div className="detail-reciever ms-3 pt-2">
          <div className="transfer-detail-name">
            {props.data.firstName
              ? `${props.data.firstName} ${props.data.lastName}`
              : "reciever name"}
          </div>
          <div className="transfer-detail-phone">
            {props.data.noTelp ? props.data.noTelp : "no phone number"}
          </div>
        </div>
      </div>
      <div className="tranfer-instructure mt-5">
        <span className="transfer-intructure-text">
          Type the amount you want to transfer and then press continue to the
          next steps.
        </span>
      </div>
      <div className="transfer-detail-input w-75 mx-auto mt-5 text-center">
        <input
          name="amount"
          onChange={handleChangeText}
          type="number"
          className="input-amount-transfer mx-auto h-100 w-50 text-center"
          placeholder="0.00"
        />
        <div className="balance-amount-availabel mt-4">
          <span className="balance-available">{`Rp. ${user.user.balance} Available`}</span>
        </div>
        <div className="input-note-transfer mt-4 w-75 mx-auto">
          <Image src={Pencil} alt="pencil" />
          <input
            name="notes"
            onChange={handleChangeText}
            type="text"
            placeholder="Input some notes "
            className="transfer-input-notes w-75"
          />
        </div>
        <div className="button-continue mt-5 text-end">
          <button
            onClick={continueButton}
            className="button-continue-transfer px-4 py-2 border-0"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

const mapSateToProps = (state) => ({
  user: state.dataUser,
});

export default connect(mapSateToProps)(TransferByIdComponent);
