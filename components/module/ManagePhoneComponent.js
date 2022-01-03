/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import axios from "utils/axios";
import Image from "next/image";
import PhoneLogo from "assets/logo/phone.png";
import { getUserById } from "stores/action/dataUser";
import { Modal, Button } from "react-bootstrap";

const ManagePhoneComponent = (props) => {
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const userPhone = props.user.user.noTelp;
  const id = props.user.user.id;

  const handleClose = () => {
    setShow(false);
  };

  useEffect(() => {
    setPhoneNumber(userPhone);
  }, []);

  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };

  const submitPhone = (e) => {
    e.preventDefault();
    if (phoneNumber === userPhone) {
      setError("Please insert new phone before update phone number");
      setShow(true);
      return;
    }

    axios
      .patch(`/user/profile/${id}`, { noTelp: phoneNumber })
      .then((res) => {
        setError(res.data.msg);
        setShow(true);
        props.getUserById(id);
      })
      .catch((err) => {});
  };

  return (
    <div className="profile-content w-100 ms-3 ms-2 p-4 pt-5">
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
      <div className="personal-header">
        <span className="personal-header-title d-block">
          Manage Phone Number
        </span>
        <span className="personal-header-notes d-block w-50 mt-3 pt-2">
          Add at least one phone number for the transfer ID so you can start
          transfering your money to another user.
        </span>
      </div>
      <div className="form-input-changepass">
        <form className="input-change-pass mt-5 text-center">
          <div className="phone-number-title text-start w-50 mx-auto">
            Your Phone Number
          </div>
          <div
            className="
                  input-pass
                  w-50
                  mx-auto
                  d-flex
                  align-items-center
                  justify-content-between
                  p-2
                "
          >
            <Image src={PhoneLogo} className="phone-logo" alt="" />
            <input
              onChange={handlePhoneNumber}
              value={phoneNumber ? phoneNumber : null}
              type="number"
              className="input-pass-config border-0 w-100 mt-2"
              placeholder="Enter Your Phone Number"
              name="noTelp"
            />
          </div>

          <button
            onClick={submitPhone}
            className="button-change-pass w-50 mt-2 border-0 p-2"
            type="submit"
          >
            {`${phoneNumber ? "Update Phone Number" : "Add Phone Number"}`}
          </button>
        </form>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  user: state.dataUser,
});
const mapDispatchToProps = {
  getUserById,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManagePhoneComponent);
