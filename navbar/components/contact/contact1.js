import emailjs from "emailjs-com";
import classes from "./contact1.module.scss";

const Mailer = () => {
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
  }

  return (
    <div className={classes.container}>
      <h1>Contact</h1>
      <p>
        If you have questions about the services we offer here at Dynamic Trade,
        please fill out this contact form and we will reach out soon.
      </p>
      <br />
      <p> We can't wait to partner with you!</p>
      <form
        className="row"
        style={{ margin: "25px 85px 75px 100px" }}
        onSubmit={sendEmail}
      >
        <label>
          Name <span>*</span>
        </label>
        <input type="text" name="user_name" className="form-control" />

        <label>
          Email <span>*</span>
        </label>
        <input type="email" name="user_email" className="form-control" />

        <label>
          Phone Number <span>*</span>
        </label>
        <input type="tel" name="user_phone_number" className="form-control" />

        <label>
          Message <span>*</span>
        </label>
        <textarea
          type="message"
          name="user_message"
          rows="4"
          className="form-control"
        />
        <input
          type="submit"
          value="Submit"
          className={classes.button}
          // style={{ marginTop: "30px", fontSize: "1.75rem" }}
        />
      </form>
    </div>
  );
};

export default Mailer;
