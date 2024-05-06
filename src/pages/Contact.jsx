import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Button from "../components/Button";
import SectionHeader from "../components/SectionHeader";
import NavBar from "../components/NavBar";

const Contact = () => {
  const formData = useRef();

  const handleSubmit = async (e, res) => {
    try {
      e.preventDefault();

      await emailjs.sendForm(
        "service_2206td9",
        "template_ubmdjym",
        formData.current,
        {
          publicKey: "qIN1qjGRqEc40L412",
        }
      );
      console.log("Success:", res);
    } catch (err) {
      console.error("Email sending failed:", err);
    }
  };

  return (
    <section className="portfolio ">
      <NavBar />
      <div className="contact pad-header">
        <form className="contact-form" ref={formData} onSubmit={handleSubmit}>
          <SectionHeader lightText={"Get In Touch"} />
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Name"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Email"
          />
          <textarea
            name="message"
            value={formData.message}
            placeholder="Message"
          ></textarea>
          <Button color={"#BAC964"}>Send me a mail</Button>
        </form>
        <div className="contact-details">
          <SectionHeader lightText={"My Contact Details"} />
          <p className="mail1">EMAIL</p>
          <p className="mail2">kingmelody7070@gmail.co</p>
          <p className="mail3">phone</p>
          <p className="mail4">+2348034141117</p>
          <p className="mail5">Fax</p>
          <p className="mail6">ADRRESS</p>
          <p className="mail7">H5 IROKO ESTATE</p>
          <p className="mail8">IGONDO ROAD</p>
          <p className="mail9">ISHERI ALIMOSHO</p>
          <p className="mail10">LAGOS STATE</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
