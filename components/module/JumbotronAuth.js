import React from "react";
import Image from "next/image";
import JumbotronBg from "assets/img/jumbotron.png";

export default function Navbar() {
  return (
    <div className="jumbotron-login px-5 pt-3">
      <div className="wrapper-jumbotron px-5 position-relative">
        <header className="header-jumbotron mb-">Lewallet</header>
        <div
          className="
            content-jumbotron
            d-flex
            align-items-center
            justify-content-center
          "
        >
          <Image
            className="img-jumbotron mx-auto"
            src={JumbotronBg}
            alt="content"
          />
        </div>
        <div className="jumbotron-text position-absolute">
          <h5 className="jumbotron-h5 mt-2">
            App that Covering Banking Needs.
          </h5>
          <p className="jumbotron-p">
            Lewallet is an application that focussing in banking needs for all
            users in the world. Always updated and always following world
            trends. 5000+ users registered in Lewallet everyday with worldwide
            users coverage.
          </p>
        </div>
      </div>
    </div>
  );
}
