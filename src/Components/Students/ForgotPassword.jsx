import React from "react";
import { useState } from "react";
import axios from "axios";
import allRoutes from "../../data/routes";
import { useNavigate } from "react-router-dom";
import "../helpers/common.css";
import Logo from "../../images/Authentication/logo2.png";

const ForgotPassword = () => {
  const history = useNavigate();
  const [user, setUser] = useState({
    email: "",
    redirectUrl: "http://localhost:3000/student/reset-password",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/student/forgot-password", user)
      .then((res) => {
        console.log(res);
        alert(res.data.message);
        history(allRoutes.studentResetPassword, { replace: true });
      });
  };

  return (
    <>
      {console.log(user)}

      <section className="wrapper">
        <div className="container">
          <div className="col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4 text-center">
            <div className="logo">
              <img src={Logo} className="img-fluid" alt="logo" />
            </div>
            <form
              className="rounded bg-white shadow p-4"
              action={allRoutes.studentForgotPassword}
              method="post"
            >
              <h3 className="text-dark fw-bolder fs-4 mb-5">Forgot Password</h3>

              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Enter your email address"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>

              <button
                type="submit"
                style={{ backgroundColor: "#a23341", borderColor: "#a23341" }}
                className="btn btn-primary submit_btn w-100 my-4"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ForgotPassword;
