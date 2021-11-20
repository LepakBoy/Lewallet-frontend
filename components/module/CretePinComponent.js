import axios from "utils/axios";
import { useState } from "react";
import { connect } from "react-redux";
import { useRouter } from "next/router";

const inputStyle = {
  width: "50px",
  height: "50px",
  textAlign: "center",
};

const inputContainer = {
  width: "100%",
  margin: "auto",
};

const CreatePinComponent = (props) => {
  const router = useRouter();
  const auth = props.auth;
  const user = props.user;
  //   console.log(auth, "crete pin");
  const [pin, setPin] = useState({});

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const allPin = parseInt(
      pin.pin1 + pin.pin2 + pin.pin3 + pin.pin4 + pin.pin5 + pin.pin6
    );
    console.log(user.user.id, "allpiiiinnnnnnn");
    axios
      .patch(`/user/pin/${user.user.id}`, { pin: allPin })
      .then((res) => {
        router.push("/auth/login");
      })
      .catch((err) => {
        alert("gagal");
        console.log(err, "err");
      });
  };

  return (
    <form>
      <div className="container text-center">
        <div className="mt-3">
          <div style={inputContainer}>
            <div className="row">
              <div className="col-2">
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
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={(e) => handleSubmit(e)}
          name="login"
          type="submit"
          className="w-100 mt-5 btn-login btn-auth"
        >
          Confirm
        </button>
      </div>
    </form>
  );
};

const mapStateToProps = (state) => ({
  auth: state.authData,
  user: state.dataUser,
});

export default connect(mapStateToProps)(CreatePinComponent);
