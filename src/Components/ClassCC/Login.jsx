import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import allRoutes from "../../data/routes";
import axios from "axios";
import "../helpers/common.css";
import Logo from "../../images/Authentication/logo2.png";
import SignupArrow from "../../images/Authentication/signup-arrow.svg";

const Login = () => {
  const history = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
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
    axios.post("http://localhost:8000/class-cc/login", user).then((res) => {
      console.log(res);
      alert(res.data.message);

      if (res.data.status === "SUCCESS") {
        history(allRoutes.ccDashboard, { replace: true });
      } else {
        history(allRoutes.ccLogin, { replace: true });
      }
    });
  };

  return (
    <section className="wrapper">
      <div className="container">
        <div className="col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4 text-center">
          <div className="logo">
            <img src={Logo} className="img-fluid" alt="logo" />
          </div>
          <form
            className="rounded bg-white shadow p-4"
            action={allRoutes.ccLogin}
            method="post"
          >
            <h3 className="text-dark fw-bolder fs-4 mb-2">
              Don't have an Account
            </h3>

            <div className="fw-normal text-muted mb-2">Create an account?</div>

            <a
              href={allRoutes.ccRegister}
              className="btn btn-light login_with w-100 mb-4"
            >
              <img
                src={SignupArrow}
                className="img-fluid me-3"
                alt="google img"
              />
              Sign up Here
            </a>

            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                name="password"
                value={user.password}
                onChange={handleChange}
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>

            <div className="fw-normal text-muted mb-2">
              <a
                href={allRoutes.ccForgotPassword}
                className="fw-normal text-red-500 mb-2"
                style={{ textDecoration: "none" }}
              >
                Forget Password?
              </a>
            </div>

            <button
              type="submit"
              style={{ backgroundColor: "#a23341", borderColor: "#a23341" }}
              className="btn btn-primary submit_btn w-100 my-4"
              onClick={handleSubmit}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
