import React from "react";
import Navbar from "../../helpers/MentorNavbar/Navbar";
import "./style.css";
const Counselling = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1 style={{ textAlign: "center", color: "#820000", padding: "20px" }}>
          Counselling Section
        </h1>

      </div>
      <form action="#" method="post">
      <div className="formBox">
          <div className="row50">
            <div className="inputBox">
              <span>NAME</span>
              <input
                type="text"
                name="name"
                placeholder="Student Name"
              />
              <br  />
              <span>ROLL NO.</span>
              <input
                type="text"
                name="roll no"
                placeholder="Roll No."
              />
              <br  />
              <span>CLASS/DIV</span>
              <input
                type="text"
                name="class"
                placeholder="Class/Div"
              />
              <br  />
              <span>YEAR</span>
              <select id="Year" name="Year" required="" >
                    <option value="">Select</option>
                    <option value="">FE</option>
                    <option value="">SE</option>
                    <option value="">TE</option>
                    <option value="">BE</option>
              </select>
              <br  />
              <span>DEPARTMENT</span>
              <select id="dept" name="dept" required="" >
                    <option value="">Select</option>
                    <option value="">Information Technology</option>
                    <option value="">Computer Science</option>
                    <option value="">Electronics and Telecommunication</option>
                    <option value="">Electronics</option>
                    <option value="">Instumental</option>
              </select>
              <br  />
              <span>DATE</span>
              <input
                type="text"
                name="date"
                placeholder="Date"
              />
              <br  />
              <span>COUNSELLING REASON</span>
              <textarea
                name="reason"
                id="reason"
                placeholder="Write your message here..."
              ></textarea>
              <br  />
              <span>OBSERVATION</span>
              <textarea
                name="obv"
                id="obv"
                placeholder="Write your message here..."
              ></textarea>
              <br  />
              <input
                type="submit"
                value="Send"
              />

            </div>
          </div>
      </div>
      </form>
    </>
  );
};

export default Counselling;

