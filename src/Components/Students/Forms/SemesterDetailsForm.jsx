import React, { useState, useEffect } from "react";
import allRoutes from "../../../data/routes";
import "./styles/MessageForm.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import TextInput from "../sections/TextInputs/TextInput";
import SemesterSelectField from "../sections/SelectField/SemesterSelectField";

const SemesterDetailsForm = () => {
  const history = useNavigate();
  const [user, setUser] = useState(null);
  const [info, setInfo] = useState(null);
  const [msg, setMsg] = useState("");
  const [mailer, setMailer] = useState({
    semester: "",
    cgpa: "",
    year: "",
    kt: "",
    attemptsForSem: "",
    clearedSemYear: "",
    // imageFile: "",
  });

  const data = JSON.parse(localStorage.getItem("user-details"));

  useEffect(() => {
    setUser(data);
    axios
      .get(`http://localhost:8000/student/profile/${data.email}`, info)
      .then((res) => {
        setInfo(res.data.studentData[0]);
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

  console.log("mailer is herhe-----", mailer);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        `http://localhost:8000/student/semester-details/${data.email}`,
        mailer
      )
      .then((response) => {
        console.log(response);
        alert(response.data.msg);
        setMsg(response.data.msg);
        if (response.data.success === true) {
          window.location.reload(true);
          history(allRoutes.studentAllSemesterDetails, { replace: true });
        }
      });

    console.log(msg);
  };
  console.log("sddsasdsd--------", mailer);

  return (
    <div className="contact formContent container" data-aos="fade-right">
      <form action={allRoutes.commonContactUs} method="post">
        <div className="formBox">
          <SemesterSelectField
            title="Select Semester"
            name="semester"
            onChange={handleChange}
            value={mailer.semester}
            placeholder="Enter Semester SGPA"
          />

          <TextInput
            title="Enter Your CGPA"
            type="text"
            name="cgpa"
            onChange={handleChange}
            value={mailer.cgpa}
            placeholder="Enter your CGPA"
          />

          <TextInput
            title="Enter Year of semester"
            type="text"
            name="year"
            onChange={handleChange}
            value={mailer.year}
            placeholder="Enter year of semester"
          />

          <TextInput
            title="Enter Number of KTs"
            type="text"
            name="kt"
            onChange={handleChange}
            value={mailer.kt}
            placeholder="Enter number of Kts"
          />

          <TextInput
            title="Enter Total Number of attempts"
            type="text"
            name="attemptsForSem"
            onChange={handleChange}
            value={mailer.attemptsForSem}
            placeholder="Enter Attempts"
          />

          <TextInput
            title="Enter Year in which your cleared"
            type="text"
            name="clearedSemYear"
            onChange={handleChange}
            value={mailer.clearedSemYear}
            placeholder="Enter year in which you cleared the semester"
          />

          {/* <div className="row50">
            <div className="inputBox">
              <span>Add Semester Marksheet*</span>
              <input
                type="file"
                name="imageFile"
                onChange={handleChange}
                value={mailer.imageFile}
                placeholder="Add your Certificate"
              />
            </div>
          </div> */}

          <div className="row50">
            <div className="inputBox">
              <input
                type="submit"
                onClick={handleSubmit}
                value="Add Semester Details"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SemesterDetailsForm;
