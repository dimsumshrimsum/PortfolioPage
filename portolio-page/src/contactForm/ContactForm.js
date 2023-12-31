import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";
import { useEffect } from "react";
const bootstrap = require("bootstrap");
function ContactForm() {
  const form = useRef();

  useEffect(() => {
    const tooltips = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltips.forEach((tooltip) => {
      new bootstrap.Tooltip(tooltip);
    });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0xjhy7p",
        "template_y3wnaa9",
        form.current,
        "qb_rGTH4ngw-kYyCp"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="contactForm">
      <div className="row text-center">
        <h1>Contact</h1>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            name="from_name"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            name="from_email"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Subject"
            name="subject"
            required
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Message"
            name="message"
            rows="7"
            required
          ></textarea>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-3 col-sm-6 mb-3">
            <input
              type="submit"
              className="form-control btn collab-button "
              value="Collab with me!"
            />
          </div>
        </div>
      </form>
      <div className="d-md-none align-items-center justify-content-space-around fs-1">
        <div className="row mt-1">
          <div className="col">
            <a
              href="https://www.linkedin.com/in/zacharyrobles/"
              target="_blank"
              rel="noreferrer"
              className="d-flex justify-content-center align-items-center "
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="LinkedIn"
            >
              <i className="bi bi-linkedin light-icon "></i>
            </a>
          </div>
          <div className="col">
            <a
              href="https://github.com/dimsumshrimsum"
              target="_blank"
              rel="noreferrer"
              className="d-flex justify-content-center align-items-center "
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Github"
            >
              <i className="bi bi-github dark-icon"></i>
            </a>
          </div>
          <div className="col">
            <a
              href="mailto:zrobles1188@gmail.com"
              className="d-flex justify-content-center align-items-center"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Email"
            >
              <i className="bi bi-envelope-at-fill light-icon"></i>
            </a>
          </div>
          <div className="col">
            <a
              href="/downloads/ZachRoblesSoftwareEngineer.pdf"
              download="ZachRoblesResume.pdf"
              className="d-flex justify-content-center align-items-center"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Download Resume"
            >
              <i className="bi bi-file-earmark-person-fill dark-icon"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
