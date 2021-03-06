/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { connect } from "react-redux";
import axios from "utils/axios";
import { Modal, Button } from "react-bootstrap";

const ChangePasswordComponent = (props) => {
  const user = props.user;
  const [formChangePass, setformChangePass] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  const handleChangeText = (e) => {
    setformChangePass({ ...formChangePass, [e.target.name]: e.target.value });
  };

  const handleClose = () => {
    setShow(false);
  };

  const sumbitChangePassword = (e) => {
    e.preventDefault();
    if (
      formChangePass.newPassword === "" ||
      formChangePass.confirmPassword === ""
    ) {
      setError("All input must be filled");
      setShow(true);
      return;
    }
    axios
      .patch(`/user/password/${user.user.id}`, formChangePass)
      .then((res) => {
        setError(res.data.msg);
        setShow(true);
        setformChangePass({
          oldPassword: "",
          newPassword: "",
          confirmPassword: "",
        });
      })
      .catch((err) => {
        setError(err.response.data.msg);
        setShow(true);
        setformChangePass({
          oldPassword: "",
          newPassword: "",
          confirmPassword: "",
        });
      });
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
        <span className="personal-header-title d-block">Change Password</span>
        <span className="personal-header-notes d-block w-50 mt-3 pt-2">
          You must enter your current password and then type your new password
          twice.
        </span>
      </div>
      <div className="form-input-changepass">
        <form
          action=""
          className="input-change-pass mt-4 text-center"
          onSubmit={sumbitChangePassword}
        >
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
            <img src="/logo/lock.png" className="lock-logo" alt="" />
            <input
              value={formChangePass.oldPassword}
              onChange={handleChangeText}
              type="password"
              className="input-pass-config border-0 w-100 mt-2"
              placeholder="Current Password"
              name="oldPassword"
            />
          </div>
          <div
            className="
            input-pass
            w-50
            mx-auto
            d-flex
            justify-content-between
            p-2
          "
          >
            <img src="/logo/lock.png" className="lock-logo" alt="" />
            <input
              value={formChangePass.newPassword}
              onChange={handleChangeText}
              type="password"
              className="input-pass-config border-0 w-100 mt-2"
              placeholder="New Password"
              name="newPassword"
            />
          </div>
          <div
            className="
            input-pass
            w-50
            mx-auto
            d-flex
            justify-content-between
            p-2
          "
          >
            <img src="/logo/lock.png" className="lock-logo" alt="" />
            <input
              value={formChangePass.confirmPassword}
              onChange={handleChangeText}
              type="password"
              className="input-pass-config border-0 w-100 mt-2"
              placeholder="Confirm New Password"
              name="confirmPassword"
            />
          </div>
          <button
            className="button-change-pass w-50 mt-2 border-0 p-2"
            type="submit"
          >
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  user: state.dataUser,
});

export default connect(mapStateToProps)(ChangePasswordComponent);
