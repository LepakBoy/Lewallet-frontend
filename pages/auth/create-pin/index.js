import React, { useState } from "react";
import Jumbotron from "components/module/JumbotronAuth";
import axios from "utils/axios";
import { useRouter } from "next/router";
import Link from "next/link";
import Cookie from "js-cookie";
import { getUserById } from "stores/action/dataUser";
import { authLogin } from "stores/action/auth";
import { connect } from "react-redux";
import { getDataCookie } from "middleware/authorizationPage";
import CreatePinComponent from "components/module/CretePinComponent";

export async function getServerSideProps(context) {
  const dataCookie = await getDataCookie(context);

  //   if (dataCookie.isLogin) {
  //     return {
  //       redirect: {
  //         destination: "/home/dashboard",
  //         permanent: false,
  //       },
  //     };
  //   }
  return { props: {} };
}

const CreatePin = (props) => {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [invalidAuth, setInvalidAuth] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const user = props.user;
  // console.log(user.user.data, "data user dari store di halaman login");
  return (
    <body className="body-login d-flex">
      <Jumbotron />
      <div className="form-login d-flex justify-content-center">
        <div className="wrapper-login mt-4">
          <div className="header-login pt-4">
            Start Accessing Banking Needs With All Devices and All Platforms
            With 30.000+ Users
          </div>
          <div className="content-login pt-4">
            Create 6 digits pin to secure all your money and your data in
            Zwallet app. Keep it secret and don’t tell anyone about your Zwallet
            account password and the PIN.
          </div>
          <form action="" className="form-login w-100 pt-3 mt-4">
            <CreatePinComponent />
          </form>
        </div>
      </div>
    </body>
  );
};

const mapStateToProps = (state) => ({
  user: state.dataUser,
});

const mapDispatchToProps = {
  getUserById,
  authLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatePin);
