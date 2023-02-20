import React, {useState, useEffect} from "react";
import Navbar from "../../helpers/MentorNavbar/Navbar";
import "./styles/Table.css";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import StudentForm from "../Forms/StudentForm";
import StudentTable from "../Table/StudentTable";
import { useNavigate } from "react-router-dom";
import allRoutes from "../../../data/routes";

const Student = () => {

  const history = useNavigate();
  const [user, setUser] = useState(null);
  const [info, setInfo] = useState(null);

  const data = JSON.parse(localStorage.getItem("user-details"));

  console.log(data);
  useEffect(() => {
    setUser(data);
  }, []);
  console.log("user email is >>>> ", user);

  const handleSubmit = () => {
    localStorage.clear();
    history(allRoutes.allLoginPage, { replace: true });
  };

  return (
    <>
      <Navbar />

      <div className="container">
        <h1 style={{ textAlign: "center", color: "#820000", padding: "20px" }}>
          Add Students Here
        </h1>

        <StudentForm />
        <div className="container">
          <h3
            style={{
              color: "#820000",
              textAlign: "center",
              padding: "20px 10px",
            }}
          >
            Student Details
          </h3>
        </div>

        <div className="container" style={{ margin: "20px 0" }}>
          <StudentTable />
        </div>

      </div>
    </>
  );
};
export default Student;
