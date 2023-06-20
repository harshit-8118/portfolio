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
    <div className="border-y-8 border-x border-[#1d9284] w-[70%] mx-auto xxs:w-[55%] xss:w-[50%] md:w-[40%] mt-[7rem] my-[3rem] pt-2 p-1 rounded-3xl bg-[#f2f2f2]">
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
        className="m-1 my-2 bg-gradient-to-b from-[#71ded1] transition-all duration-700 hover:to-[#064e46] to-[#289689] p-4 text-white uppercase font-bold tracking-widest block border rounded-3xl w-[99%]"
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
