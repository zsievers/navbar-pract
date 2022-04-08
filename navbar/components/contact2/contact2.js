import emailjs from "emailjs-com";
import React, { useState } from "react";

const Result = () => {
  return <p>Your message has been sucessfully sent</p>;
};

const Mailer2 = () => {
  const [result, showResult] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0opa86k",
        "template_fbvc0x3",
        e.target,
        "z9rAvxdNO7u2EUC9b"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
    e.target.reset();
    showResult(true);
  }

  // hide result
  setTimeout(() => {
    showResult(false);
  }, 5000);

  return (
    <div
      className="container border"
      style={{ marginTop: "50px", width: "50%" }}
    >
      <h1 style={{ marginTop: "25px" }}>Contact Form</h1>
      <form
        className="row"
        style={{ margin: "25px 85px 75px 100px" }}
        onSubmit={sendEmail}
      >
        <label>Name</label>
        <input type="text" name="user_name" className="form-control" />

        <label>Email</label>
        <input type="email" name="user_email" className="form-control" />

        <label>Phone Number</label>
        <input type="tel" name="user_phone_number" className="form-control" />

        <label>Message</label>
        <textarea
          type="message"
          name="user_message"
          rows="4"
          className="form-control"
        />
        <input
          type="submit"
          value="Send"
          className="form-control btn btn-primary"
          style={{ marginTop: "30px" }}
        />
        <div className="row">{result ? <Result /> : null}</div>
      </form>
    </div>
  );
};

export default Mailer2;
