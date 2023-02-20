import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import allRoutes from "../../../data/routes";
import axios from "axios";

const ProfileForm = () => {
  const history = useNavigate();

  const [user, setUser] = useState(null);
  const [info, setInfo] = useState(null);
  const [newUser, setNewUser] = useState({
    rollNumber: "",
    branch: "",
    divison: "",
    contactNumber: "",
  });

  const data = JSON.parse(localStorage.getItem("user-details"));

  useEffect(() => {
    setUser(data);

    axios
      .get(`http://localhost:8000/mentor/profile/${data.email}`, info)
      .then((res) => {
        setInfo(res.data.studentData[0]);
      });
  }, []);

  console.log("User is as follows: ", user);
  console.log("Information is as follows: ", info);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewUser({
      ...newUser,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { rollNumber, branch, divison, contactNumber } = newUser;
    if (rollNumber && branch && divison && contactNumber) {
      axios
        .post(`http://localhost:8000/mentor/profile/${data.email}`, newUser)
        .then((res) => {
          console.log(res.status);
          alert(res.data.msg);
          window.location.reload(true);

          if (res.status == 200) {
            history(allRoutes.studentProfile, { replace: true });
          } else {
            alert("Unable to update the details of student");
          }
        });
    }
  };

  return (
    <form
      method="post"
      action={allRoutes.studentSaveData}
      className="container py-3"
    >
      {/* Roll Number */}
      <div class="mb-3 row">
        <label for="rollNo" className="col-sm-5 col-form-label fw-bold fs-6">
          Roll Number :
        </label>
        <div class="col-sm-7">
          <input
            type="text"
            name="rollNumber"
            className="form-control"
            id="rollNo"
            // value={info?.rollNumber}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Email Address */}
      <div className="mb-3 row">
        <label for="email" className="form-label col-sm-5 fw-bold fs-6">
          Email address :
        </label>
        <div class="col-sm-7">
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={info?.email}
            disabled
            readOnly
          />
        </div>
      </div>

      {/* Name */}
      <div className="mb-3 row">
        <label for="forName" className="form-label col-sm-5 fw-bold fs-6">
          Name :
        </label>
        <div class="col-sm-7">
          <input
            type="text"
            className="form-control"
            id="forName"
            name="fname"
            value={info?.name}
            disabled
            readOnly
          />
        </div>
      </div>

      {/* Branch */}
      <div className="mb-3 row">
        <label for="branch" className="form-label col-sm-5 fw-bold fs-6">
          Branch :
        </label>
        <div class="col-sm-7">
          <input
            type="text"
            name="branch"
            className="form-control"
            id="branch"
            // value={info?.branch}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Divison */}
      <div className="mb-3 row">
        <label for="divison" className="form-label col-sm-5 fw-bold fs-6">
          Divison :
        </label>
        <div class="col-sm-7">
          <input
            type="text"
            name="divison"
            onChange={handleChange}
            // value={info?.divison}
            className="form-control"
            id="divison"
          />
        </div>
      </div>

      {/* Contact Number */}
      <div className="mb-3 row">
        <label for="contactNumber" className="form-label col-sm-5 fw-bold fs-6">
          Contact Number :
        </label>
        <div class="col-sm-7">
          <input
            type="text"
            name="contactNumber"
            onChange={handleChange}
            className="form-control"
            // value={info?.contactNumber}
            id="contactNumber"
          />
        </div>
      </div>

      <div className="mb-3 row">
        <button
          type="submit"
          style={{
            backgroundColor: "#a23341",
            borderColor: "#a23341",
            width: "60%",
            margin: "auto",
          }}
          className="btn btn-primary submit_btn my-4"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ProfileForm;
