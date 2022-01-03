import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Phones from "../assets/img/phones.png";
import Locks from "../assets/img/locks.png";
import Download from "../assets/img/downloads.png";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const toLogin = () => {
    router.push("/auth/login");
  };
  const toRegis = () => {
    router.push("/auth/register");
  };
  return (
    <>
      <body>
        <div className="jumbotron">
          <div className="container-jumbo px-5 h-100">
            <div className="header d-flex justify-content-between py-3">
              <div className="logo">
                <span className="title-page">Lewallet</span>
              </div>
              <div className="btn-group">
                <button className="me-2 p-2 px-4 btn-login" onClick={toLogin}>
                  Sign In
                </button>
                <button className="ms-2 p-2 px-4 btn-regis" onClick={toRegis}>
                  Sign Up
                </button>
              </div>
            </div>
            <div className="d-flex justify-content-center w-50 mx-auto h-75 pt-5">
              <div
                className="
              wrapper-content
              h-75
              justify-content-center
              w-75
              text-center
              align-content-center
            "
              >
                <span className="jumbo-slogan mt-5">
                  Awesome App For Saving Time
                </span>
                <p className="mt-3 text-white mt-4">
                  We bring you a mobile app for banking problems that oftenly
                  wasting much of your times.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="facilities pt-4">
          <h1 className="why text-center pt-4">
            <span className="blue-color">Why</span> Choose Lewallet?
          </h1>
          <div className="sub-why text-center w-50 mx-auto mt-3">
            <span>
              We have some great features from the application and it is totally
              free to use by all users around the world.
            </span>
          </div>
          <div className="row mt-5 py-5 w-75 mx-auto">
            <div className="col-md-4 support-1 ">
              <div className="logo-support mx-auto  text-center py-3">
                <Image
                  src={Phones}
                  alt="phone"
                  className="img-support"
                  width={25}
                  height={25}
                />
              </div>
              <div className="support-content text-center p-4 support-title">
                24/7 Support
              </div>
              <div className="wrapper-content-support text-center">
                <div className="text-center"></div>
                We have 24/7 contact support so you can contact us whenever you
                want and we will respond it.
              </div>
            </div>
            <div className="col-md-4 support-1 ">
              <div className="logo-support mx-auto  text-center py-3">
                <Image
                  src={Locks}
                  alt="phone"
                  className="img-support"
                  width={25}
                  height={25}
                />
              </div>
              <div className="support-content text-center p-4 support-title">
                Data Privacy
              </div>
              <div className="wrapper-content-support text-center">
                <div className="text-center"></div>
                We make sure your data is safe in our database and we will
                encrypt any data you submitted to us.
              </div>
            </div>
            <div className="col-md-4 support-1 ">
              <div className="logo-support mx-auto  text-center py-3">
                <Image
                  src={Download}
                  alt="phone"
                  className="img-support"
                  width={25}
                  height={25}
                />
              </div>
              <div className="support-content text-center p-4 support-title">
                Easy Download
              </div>
              <div className="wrapper-content-support text-center">
                <div className="text-center"></div>
                Zwallet is 100% totally free to use it is now available on
                Google Play Store and App Store.
              </div>
            </div>
          </div>
        </div>

        <footer className="p-5">
          <span className="title-page">Lewallet</span>
          <span className="d-block w-25 mt-3 text-footer">
            Simplify financial needs and saving much time in banking needs with
            one single app.
          </span>
          {/* <hr class="text-white mt-4"> */}
          <div className="wrapper-footer d-flex justify-content-lg-between">
            <span className="text-white">
              2020 Lewallet. All right reserved
            </span>
            <span className="text-white">+62 5637 8882 9901</span>
          </div>
        </footer>
      </body>
    </>
  );
}
