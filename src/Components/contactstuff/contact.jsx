import React from "react";
import "./contact.css";
import axios from "axios";
import { useState, useEffect } from "react";

export default function ContactComp() {
  const [contactFirstname, setContactFirstname] = useState("");
  const [contactLastname, setContactLastname] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");

  const sendContactInfo = (event) => {
    event.preventDefault();
    axios.post(
      "https://redesign-contact-bonappetit-g1.herokuapp.com/sendContact",
      {
        email: contactEmail,
        firstName: contactFirstname,
        lastName: contactLastname,
        message: contactMessage,
      }
    );
  };

  useEffect(() => {
    axios.get(
      "https://redesign-contact-bonappetit-g1.herokuapp.com/readContacts"
    );
    // .then((response) => console.log(response.data))
    // .catch((err) => console.log(err));
  });

  return (
    <section className="contact">
      <div className="contact-container">
        <div className="contact-text">
          <h1 className="contact__title">
            Bon Appétit Daily or questions you would like to ask?
          </h1>
          <p className="contact__paragraph">
            Our latest and greatest recipes, articles, and cooking tips, plus
            weekly letters from BA editors. But you can also ask us any
            questions or suggestions through here!
          </p>
        </div>

        <div className="contact-wrapper">
          <form className="contact-form">
            <div className="form-input-group form-first-name">
              <label htmlFor="name">First Name</label>
              <input
                type="text"
                name="firstName"
                placeholder="Your First Name Here"
                onChange={(event) => {
                  setContactFirstname(event.target.value);
                }}
              />
            </div>
            <div className="form-input-group form-last-name">
              <label htmlFor="name">Last Name</label>
              <input
                type="text"
                name="lastName"
                placeholder="Your Last Name Here"
                onChange={(event) => {
                  setContactLastname(event.target.value);
                }}
              />
            </div>
            <div className="form-input-group form-email">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Your Email Here"
                onChange={(event) => {
                  setContactEmail(event.target.value);
                }}
              />
            </div>
            <div className="form-input-group form-message">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                placeholder="Comment or Questions Here"
                onChange={(event) => {
                  setContactMessage(event.target.value);
                }}
              ></textarea>
            </div>
            <div className="form-input-group">
              <button onClick={sendContactInfo} className="button">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
