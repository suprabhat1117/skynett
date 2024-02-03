import React, { useState } from "react";
import "./Contactusform.css";

export function Contactusform() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const baseUrl = "http://localhost:8000";

  const sendEmail = async (e) => {
    e.preventDefault();
    let dataSend = {
      name: name,
      email: email,
      message: message,
    };

    const res = await fetch(`${baseUrl}/email/sendEmail`, {
      method: "POST",
      body: JSON.stringify(dataSend),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      // HANDLING ERRORS
      .then((res) => {
        if (res.status > 199 && res.status < 300) {
          alert("Send Successfully !");
          setName("");
          setEmail("");
          setMessage("");
        }
      });
  };

  return (
    <section id="contact">
      <h1 class="section-header">Contact Us</h1>

      <div class="contact-wrapper">
        <form
          id="contact-form"
          class="form-horizontal"
          role="form"
          onSubmit={sendEmail}
        >
          <div class="form-group">
            <div class="col-sm-12">
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder="NAME"
                name="name"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
          </div>

          <div class="form-group">
            <div class="col-sm-12">
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="EMAIL"
                name="email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
          </div>

          <textarea
            class="form-control"
            rows="10"
            placeholder="MESSAGE"
            name="message"
            value={message}
            required
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <button
            class="btn btn-primary send-button"
            id="submit"
            type="submit"
            value="SEND"
          >
            <div class="alt-send-button">
              <i class="fa fa-paper-plane"></i>
              <span class="send-text">SEND</span>
            </div>
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contactusform;
