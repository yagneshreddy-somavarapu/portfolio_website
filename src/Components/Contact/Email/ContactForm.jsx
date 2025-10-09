import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2vcvf5p",
        "template_p9mtyto",
        form.current,
        "9zhsjSep5gfzocKXj"
      )
      .then(
        (result) => {
          console.log("✅ Email sent:", result.text);
          alert("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.error("❌ Error:", error.text);
          alert("Failed to send message. Try again.");
        }
      );
  };

  return (
    <form
  ref={form}
  onSubmit={sendEmail}
  style={{
    margin: "40px auto",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    padding: "30px",
    border: "1px solid #ccc",
    borderRadius: "8px",
  }}
>
  <label>Name</label>
  <input
    type="text"
    name="user_name"
    required
    style={{ padding: "8px", borderRadius: "4px",color:"black", border: "1px solid #ccc" }}
  />

  <label>Email</label>
  <input
    type="email"
    name="user_email"
    required
    style={{ padding: "8px", borderRadius: "4px",color:"black", border: "1px solid #ccc" }}
  />

  <label>Message</label>
  <textarea
    name="message"
    required
    rows="5"
    style={{ padding: "8px", borderRadius: "4px",color:"black", border: "1px solid #ccc" }}
  />

  <button
    type="submit"
    style={{
      background: "#007bff",
      color: "white",
      padding: "10px",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
    }}
  >
    Send
  </button>
</form>

  );
};

export default ContactForm;
