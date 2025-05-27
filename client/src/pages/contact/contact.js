import React, { useState } from "react";
import "./contact.css";
import ContactImg from "../../assets/Images/contact-us.jpg";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareInstagram,FaSquareGithub } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import Rotate from 'react-reveal/Rotate';
import Fade from 'react-reveal/Fade';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    msg: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/v1/portfolio/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      if (data.success) {
        alert("Email sent successfully!");
        setFormData({ name: "", mobile: "", email: "", msg: "" });
      } else {
        alert("Failed to send email.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Server error occurred.");
    }
  };

  return (
    <div className="contact" id="contact">
      <h2 className="col-12 mt-4 mb-1 text-center text-uppercase">Contact-Us</h2>
      <hr />
      <div className="card card0 border-0">
        <div className="row">
          <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
            <div className="card1">
              <Fade top>
                <div className="row border-line">
                  <img src={ContactImg} alt="contact" className="image" />
                </div>
              </Fade>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <Rotate>
              <form onSubmit={handleSubmit} className="card2 d-flex card border-0 px-4 py-5">
                <div className="row">
                  <h6>
                    Contact With
                    <FaLinkedin className="ms-2" size={30} />
                    <FaSquareGithub className="ms-2" size={30} />
                    <FaFacebookSquare className="ms-2" size={30} />
                    <FaSquareInstagram className="ms-2" size={30} />
                  </h6>

                  <div className="row px-3 mb-4">
                    <div className="line" />
                    <small className="or text-center">OR</small>
                    <div className="line" />
                  </div>

                  <div className="row px-3">
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="mb-3"
                      required
                    />
                  </div>
                  <div className="row px-3">
                    <input
                      type="text"
                      name="mobile"
                      placeholder="Mobile Number"
                      value={formData.mobile}
                      onChange={handleChange}
                      className="mb-3"
                      required
                    />
                  </div>
                  <div className="row px-3">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Your Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      className="mb-3"
                      required
                    />
                  </div>
                  <div className="row px-3">
                    <textarea
                      name="msg"
                      placeholder="Write your message"
                      value={formData.msg}
                      onChange={handleChange}
                      className="mb-3"
                      required
                    />
                  </div>
                  <div className="row px-3">
                    <button type="submit" className="button">SEND MESSAGE</button>
                  </div>
                </div>
              </form>
            </Rotate>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
