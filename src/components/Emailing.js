import React, { useRef } from "react";
import emailjs from "emailjs-com";
import ContactForm from "./ContactForm";

const Service_id = "service_y02x4mu",
  Template_id = "template_i6k6z8o",
  Public_id = "7GIeCGmyg1PVf2Z6h";

const Emailing = () => {
  const FormRef = useRef();

  const sendEmail = (e) => {
    emailjs.sendForm(Service_id, Template_id, e, Public_id).then(
      (result) => {
        if (result.text === "OK") {
          alert("email sent successfully");
        }
      },
      (error) => {
        alert("can't sent email");
      }
    );
  };

  return (
    <>
      <ContactForm ref={FormRef} />
      {/* check on higher need, very-limited-email-options. */}
      {/* 
        <input
        className=""
        type="submit"
        value="Submit"
        onClick={(e) => {
          e.preventDefault();
          sendEmail(FormRef.current);
        }}
      /> */}
      <input
        className=""
        type="submit"
        value="Submit"
        onClick={(e) => {
          e.preventDefault();
          console.log(FormRef.current);
        }}
      />
    </>
  );
};

export default Emailing;
