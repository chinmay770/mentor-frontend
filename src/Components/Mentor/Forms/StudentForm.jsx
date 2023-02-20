import React, { useState, useEffect } from "react";
import allRoutes from "../../../data/routes";
import "./styles/MessageForm.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import TextInput from "../sections/TextInputs/TextInput";
//import SelectField from "../sections/SelectField/SelectField";

const StudentForm = () => {
  const history = useNavigate();
  const [user, setUser] = useState(null);
  const [info, setInfo] = useState(null);
  const [msg, setMsg] = useState("");
  const [mailer, setMailer] = useState({
    name: "",
    rollno: "",
    dept: "",
    batch: "",
    //description: "",
    // imageFile: "",
  });

  const data = JSON.parse(localStorage.getItem("user-details"));

  useEffect(() => {
    setUser(data);
    axios
      .get(`http://localhost:8000/mentor/profile/${data.email}`, info)
      .then((res) => {
        setInfo(res.data.mentorData[0]);
      });
  }, []);
  console.log(user);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMailer({
      ...mailer,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:8000/mentor/dashboard/${data.email}`, mailer)
      .then((response) => {
        console.log(response);
        alert(response.data.msg);
        setMsg(response.data.msg);
        if (response.data.success === true) {
          window.location.reload(true);
          history(allRoutes.mentorDashboard, { replace: true });
        }
      });

    console.log(msg);
  };
  console.log(mailer);

  return (
    <div className="contact formContent container" data-aos="fade-right">
      <form action={allRoutes.commonContactUs} method="post">
        <div className="formBox">
          <TextInput
            title="Name of the Student"
            name="name"
            onChange={handleChange}
            value={mailer.name}
            placeholder="Enter Name"
          />

          <TextInput
            title="Roll No."
            type="text"
            name="rollno"
            onChange={handleChange}
            value={mailer.rollno}
            placeholder="Enter Roll no."
          />

          <TextInput
            title="Department"
            type="text"
            name="dept"
            onChange={handleChange}
            value={mailer.dept}
            placeholder="Enter Dept"
          />

          <TextInput
            title="Batch"
            type="text"
            name="batch"
            onChange={handleChange}
            value={mailer.batch}
            placeholder="Enter Batch"
          />



          <div className="row50">
            <div className="inputBox">
              <input
                type="submit"
                onClick={handleSubmit}
                value="Add Student"/>

            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default StudentForm;
