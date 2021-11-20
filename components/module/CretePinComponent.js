import { useState } from "react";

const inputStyle = {
  width: "50px",
  height: "50px",
  textAlign: "center",
};

const inputContainer = {
  width: "100%",
  margin: "auto",
};

export default function CreatePin() {
  const [pin, setPin] = useState({});
  const [allPin, setAllPin] = useState("");

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

  const handleSubmit = (event) => {
    event.preventDefault();
    setAllPin(
      `${pin.pin1}${pin.pin2}${pin.pin3}${pin.pin4}${pin.pin5}${pin.pin6}`
    );
    console.log(allPin, "allpiiiinnnnnnn");
  };

  //   console.log(pin.pin1, "piiiinnnnnnn");
  //   console.log(allPin, "state allpiiiinnnnnnn");
  return (
    <form onSubmit={handleSubmit}>
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
          name="login"
          type="submit"
          className="w-100 mt-5 btn-login btn-auth"
        >
          Confirm
        </button>
      </div>
    </form>
  );
}
