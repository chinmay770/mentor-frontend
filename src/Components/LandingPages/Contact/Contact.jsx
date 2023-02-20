import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Contact.css";
import Navbar from "../../helpers/Navbar/Navbar";
import axios from "axios";
import allRoutes from "../../../data/routes";

const Contact = () => {
  const history = useNavigate();
  const [msg, setMsg] = useState("");
  const [mailer, setMailer] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    message: "",
  });

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
      .post("http://localhost:8000/common/contact-us", mailer)
      .then((response) => {
        alert(response.data.message);
        setMsg(response.data.respMesg);
        history(allRoutes.commonThankyou, { replace: true });
      });

    console.log(msg);
  };

  return (
    <div className="contactPage">
      <Navbar />
      <div className="contactUs">
        <h3 className="titleCenter">Send a Message</h3>
        <div className="boxContent">
          {/* form div */}
          <div className="contact formContent" data-aos="fade-right">
            <form action={allRoutes.commonContactUs} me thod="post">
              <div className="formBox">
                <div className="row50">
                  <div className="inputBox">
                    <span>First Name</span>
                    <input
                      type="text"
                      name="firstName"
                      onChange={handleChange}
                      value={mailer.firstName}
                      placeholder="John"
                    />
                  </div>
                  <div className="inputBox">
                    <span>Last Name</span>
                    <input
                      type="text"
                      name="lastName"
                      onChange={handleChange}
                      value={mailer.lastName}
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="row50">
                  <div className="inputBox">
                    <span>Email</span>
                    <input
                      type="email"
                      name="email"
                      value={mailer.email}
                      onChange={handleChange}
                      placeholder="johndoe@gmail.com"
                    />
                  </div>
                  <div className="inputBox">
                    <span>Mobile</span>
                    <input
                      type="text"
                      name="mobile"
                      value={mailer.mobile}
                      onChange={handleChange}
                      placeholder="+91 987 654 3210"
                    />
                  </div>
                </div>

                <div className="row100">
                  <div className="inputBox">
                    <span>Message</span>
                    <textarea
                      name="message"
                      id="message"
                      value={mailer.message}
                      onChange={handleChange}
                      placeholder="Write your message here..."
                    ></textarea>
                  </div>
                </div>

                <div className="row100">
                  <div className="inputBox">
                    <input type="submit" onClick={handleSubmit} value="Send" />
                  </div>
                </div>
              </div>
            </form>
          </div>

          {/* info div */}
          <div className="contact info" data-aos="fade-left">
            <h3>Contact Info</h3>
            <div className="infoBox">
              <div>
                <span>
                  <ion-icon name="location-outline"></ion-icon>
                </span>
                <a
                  href="https://goo.gl/maps/S7q8o4PgRFYMxMvBA"
                  target="_blank"
                  rel="noreferrer"
                >
                  DY Patil University Sector 7. Nerul, Navi Mumbai 400706
                </a>
              </div>
              <div>
                <span>
                  <ion-icon name="mail-outline"></ion-icon>
                </span>
                <a href="mailto:raitmailcheck@gmail.com">
                  raitmailcheck@gmail.com
                </a>
              </div>
              <div>
                <span>
                  <ion-icon name="call-outline"></ion-icon>
                </span>
                <a href="tel:022 3096 5888">022 3096 5888</a>
              </div>

              {/* social media links */}
              <ul className="sci">
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.facebook.com/DYPatilUniversityNaviMumbai"
                  >
                    <ion-icon size="large" name="logo-facebook"></ion-icon>
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.instagram.com/dypatiluniversity/?utm_medium=copy_link"
                  >
                    <ion-icon size="large" name="logo-instagram"></ion-icon>
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.youtube.com/c/DYPatilUniversityNaviMumbai/featured"
                  >
                    <ion-icon size="large" name="logo-youtube"></ion-icon>
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/company/d-y-patil-university-navi-mumbai/?viewAsMember=true"
                  >
                    <ion-icon size="large" name="logo-linkedin"></ion-icon>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* map info */}
          <div className="contact map" data-aos="fade-left">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.439954089239!2d73.02351191498187!3d19.044384687106035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3db00160053%3A0x95e9ca007676b993!2sDr.%20D%20Y%20Patil&#39;s%20Ramrao%20Adik%20Institute%20Of%20Technology!5e0!3m2!1sen!2sin!4v1665672348483!5m2!1sen!2sin"
              style={{ border: "0" }}
              title="rait-map"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
