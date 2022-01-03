/* eslint-disable @next/next/no-img-element */
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import ArrowLeft from "assets/logo/arrow-left.png";
import { useRouter } from "next/router";
import { connect, useDispatch } from "react-redux";
import Cookies from "js-cookie";
import axios from "utils/axios";
import { getUserById } from "stores/action/dataUser";
import { Modal, Button } from "react-bootstrap";

const ProfileComponent = (props) => {
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const target = useRef(null);
  const [userImage, setUserImage] = useState({ image: "" });
  const router = useRouter();
  const personalInfo = () => {
    router.push("/profile/personalinformation");
  };
  const changePassword = () => {
    router.push("/profile/changePassword");
  };
  const user = props.user;
  const fullName = `${user.user.firstName} ${user.user.lastName}`;
  const userPhone = user.user.noTelp;

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.clear();
    Cookies.remove("id");
    Cookies.remove("token");
    axios.post("/auth/logout");
    router.push("/home/dashboard");

    return;
  };

  useEffect(() => {
    updateImage();
  }, [userImage]);

  const uploadImage = (e) => {
    setUserImage({ ...userImage, image: e.target.files[0] });
  };

  const updateImage = () => {
    if (userImage.image) {
      const formData = new FormData();
      for (const data in userImage) {
        formData.append(data, userImage[data]);
      }
      axios
        .patch(`/user/image/${user.user.id}`, formData)
        .then((res) => {
          setError("Success update image");
          setShow(true);
          dispatch(getUserById(user.user.id));
        })
        .catch((err) => {
          setError(err.response.data.msg);
          setShow(true);
        });
    }
  };

  const handleClose = () => {
    setShow(false);
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
          <Button variant={"primary"} onClick={handleClose}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="user-profile-header text-center mt-4">
        <div className="imageStyle mx-auto">
          <img
            className="photo-user-personalpage"
            src={
              user.user.image
                ? `${process.env.URL_BACKEND_LOCAL}/uploads/${user.user.image}`
                : "/img/default.png"
            }
            alt="user-photo"
          />
        </div>
        <input
          type="file"
          name="image"
          ref={target}
          style={{ display: "none" }}
          onChange={(e) => uploadImage(e)}
        />
        <button
          className="btn-update-image mt-4"
          onClick={() => target.current.click()}
        >
          Choose Image
        </button>
        <span className="user-profile-name d-block mt-4">{fullName}</span>
        <span className="user-profile-phone d-block mt-3">
          {user.user.noTelp ? userPhone : "no phone number"}
        </span>
      </div>
      <div className="user-profile-options w-50 mx-auto mt-4">
        <div
          onClick={personalInfo}
          className="
                profile-menu-list
                personal-information
                p-3
                my-2
                d-flex
                justify-content-between
              "
        >
          <span className="personal-information-text">
            Persenoal Information
          </span>
          <Image src={ArrowLeft} alt="arrow-left" className="arrow-left" />
        </div>
        <div
          onClick={changePassword}
          className="
                profile-menu-list
                personal-information
                p-3
                my-2
                d-flex
                justify-content-between
              "
        >
          <span className="personal-information-text">Change Password</span>
          <Image src={ArrowLeft} alt="arrow-left" className="arrow-left" />
        </div>
        <div
          className="
                profile-menu-list
                personal-information
                p-3
                my-2
                d-flex
                justify-content-between
              "
        >
          <span className="personal-information-text">Change PIN</span>
          <Image src={ArrowLeft} alt="arrow-left" className="arrow-left" />
        </div>
        <div
          className="profile-menu-list personal-information p-3 my-2"
          onClick={handleLogout}
        >
          <span className="personal-information-text">Logout</span>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.dataUser,
});

export default connect(mapStateToProps)(ProfileComponent);
