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
    <div className="border-2 border-green-700 w-[70%] mx-auto xxs:w-[55%] xss:w-[50%] md:w-[40%] my-[4rem] pt-5 p-1 rounded-lg">
      <ContactForm ref={FormRef} />
      {/* check on higher need, very-limited-email-options. */}
      {/* 
        <input
        className="m-1 my-2 bg-blue-500 p-4 text-white uppercase font-bold tracking-widest block border rounded-lg w-[99%]"
        type="submit"
        value="Submit"
        onClick={(e) => {
          e.preventDefault();
          sendEmail(FormRef.current);
        }}
      /> */}
      <input
        className="m-1 my-2 bg-blue-500 p-4 text-white uppercase font-bold tracking-widest block border rounded-lg w-[99%]"
        type="submit"
        value="Submit"
        onClick={(e) => {
          e.preventDefault();
          alert('form submitted')
          console.log(FormRef.current);
        }}
      />
    </div>
  );
};

export default Emailing;
