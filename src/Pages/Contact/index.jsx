import React, { useState } from "react";

import "./styles.scss";

const CommentForm = () => {
  return (
    <div className="contact" id="contact">
      <h3 className="contact__title">Contact me</h3>
      <form
        className="colorful-form"
        action="https://formsubmit.co/cedricfriscia@gmail.com"
        method="POST"
      >
        <div className="form-group">
          <label className="form-label" htmlFor="email">
            Email:
          </label>
          <input
            required
            placeholder="Enter your email"
            className="form-input"
            name="email"
            id="email"
            type="email"
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="message">
            Message:
          </label>
          <textarea
            required
            placeholder="Enter your message"
            className="form-input"
            name="message"
            id="message"
          ></textarea>
        </div>
        <button className="form-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
