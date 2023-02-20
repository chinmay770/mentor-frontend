import React from "react";
import { useState } from "react";
import axios from "axios";
import allRoutes from "../../data/routes";
import { useNavigate } from "react-router-dom";
import "../helpers/common.css";
import Logo from "../../images/Authentication/logo2.png";

const ResetPassword = () => {
  const history = useNavigate();
  const [user, setUser] = useState({
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
    axios
      .post("http://localhost:8000/student/forgot-password", user)
      .then((res) => {
        console.log(res);
        alert(res.data.message);
        history(allRoutes.studentLogin, { replace: true });
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
              action={allRoutes.studentResetPassword}
              method="post"
            >
              <h3 className="text-dark fw-bolder fs-4 mb-5">Reset Password</h3>

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
                  placeholder="Confirm Password"
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
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResetPassword;
