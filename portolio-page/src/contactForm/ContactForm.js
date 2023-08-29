function ContactForm() {
  return (
    <div className="contactForm">
      <div className="row text-center">
        <h1>Contact</h1>
      </div>
      <form>
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
      </form>
    </div>
  );
}

export default ContactForm;
