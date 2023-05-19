import React from "react";
import "./styles.scss";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h3 className="contact__title">Contact me</h3>
      <form
        className="contact__form"
        action="https://formsubmit.co/cedricfriscia@gmail.com"
        method="POST"
      >
        {/* <input
          type="hidden"
          name="_next"
          value="https://yourdomain.co/thanks.html"
        /> */}
        <input
          className="contact__input"
          type="email"
          name="email"
          placeholder="Email Address"
          required
        />
        <textarea
          className="contact__input-text"
          name="name"
          required
          placeholder="Write your message here"
        />

        <button className="contact__button" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
