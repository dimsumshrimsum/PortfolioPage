import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const form = useRef();

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
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Subject"
            required
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Message"
            rows="7"
            required
          ></textarea>
        </div>
        <div className="row justify-content-center">
          <div className="col-3 mb-3">
            <input
              type="submit"
              className="form-control btn btn-primary"
              value="Collab with me!"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
