import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import allRoutes from "../../data/routes";
import "../helpers/common.css";
import Logo from "../../images/Authentication/logo2.png";
import LoginArrow from "../../images/Authentication/login-arrow.svg";

const Signup = () => {
  const history = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
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
    const { name, email, password, confirmPassword } = user;
    if (name && email && password && password === confirmPassword) {
      axios.post("http://localhost:8000/mentor/register", user).then((res) => {
        console.log(res);
        alert(res.data.message);

        if (res.data.message === "Student with email already exists!") {
          history(allRoutes.mentorRegister, { replace: true });
        } else {
          history(allRoutes.mentorLogin, { replace: true });
        }
      });
    }
  };

  return (
    <>
      {console.log(user)}
      <section className="wrapper">
        <div className="container">
          <div className="col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4 text-center">
            <div className="logo">
              <img
                style={{ width: "100%" }}
                src={Logo}
                className="img-fluid"
                alt="logo"
              />
            </div>
            <form
              className="rounded bg-white shadow p-4"
              action={allRoutes.mentorRegister}
              method="post"
            >
              <h3 className="text-dark fw-bolder fs-4 mb-2">
                Create an Account
              </h3>

              <div className="fw-normal text-muted mb-2">
                Already have an account?
              </div>

              <a
                href={allRoutes.mentorLogin}
                className="btn btn-light login_with w-100 mb-4"
              >
                <img
                  src={LoginArrow}
                  className="img-fluid me-3"
                  alt="google img"
                />
                Sign in here
              </a>

              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingFirstName"
                  placeholder="John Doe"
                  name="name"
                  value={user.name}
                  onChange={handleChange}
                />
                <label htmlFor="floatingFirstName">Name</label>
              </div>

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
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  name="confirmPassword"
                  value={user.confirmPassword}
                  onChange={handleChange}
                />
                <label htmlFor="floatingPassword">Confirm Password</label>
              </div>

              <button
                type="submit"
                style={{ backgroundColor: "#a23341", borderColor: "#a23341" }}
                className="btn btn-primary submit_btn w-100 my-4"
                onClick={handleSubmit}
              >
                Signup
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
