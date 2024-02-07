import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import ContactForm from "./ContactForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faSpinner } from "@fortawesome/free-solid-svg-icons";
import Connect2 from "./Connect2";

const Service_id = "service_y02x4mu",
  Template_id = "template_i6k6z8o",
  Public_id = "7GIeCGmyg1PVf2Z6h";

const Emailing = () => {
  const FormRef = useRef();
  const [clicked, setclicked] = useState(false);
  const [message, setMessage] = useState("");
  const sendEmail = (e) => {
    emailjs.sendForm(Service_id, Template_id, e, Public_id).then(
      (result) => {
        if (result.text === "OK") {
          alert("email sent successfully");
          setclicked(false);
        }
      },
      (error) => {
        alert("can't sent email");
        setclicked(false);
      }
    );
  };
  const checkForm = (e) => {
    if (
      e.sender_name.value === "" ||
      e.sender_email.value === "" ||
      e.sender_message.value === ""
    ) {
      setMessage("input fields can't be empty");
      return false;
    } else if (/\S+@\S+\.\S+/.test(e.sender_email.value) === false) {
      setMessage("invalid email");
      return false;
    } else if (e.sender_message.value.length < 20) {
      setMessage("message is too short...");
      return false;
    } else {
      return true;
    }
  };
  return (
    <>
      <div
        data-aos="zoom-in"
        data-aos-duration="250"
        className="border-y-2 border-x border-[#1d9284] w-[85%] mx-auto xss:w-[70%] md:w-[60%] lg:w-[40%] mt-[7rem] my-[3rem] pt-2 p-1 rounded-3xl bg-[#1d2026]"
      >
        <Connect2 />
        <ContactForm ref={FormRef} />
        {/* check on higher need, very-limited-email-options. */}
        <div className="mx-4 rounded-lg">
          <PopMessage message={message} />
        </div>
        <button
          className="font-roboto m-1 my-2 bg-gradient-to-b from-[#71ded1] transition-all duration-700 hover:to-[#16867a] to-[#289689] p-2 md:p-4 text-white uppercase font-bold tracking-widest block border rounded-3xl w-[99%]"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            if (checkForm(FormRef.current)) {
              setMessage("");
              setclicked(true);
              sendEmail(FormRef.current);
            }
          }}
        >
          {!clicked ? (
            <FontAwesomeIcon icon={faPaperPlane} />
          ) : (
            <FontAwesomeIcon icon={faSpinner} spin />
          )}{" "}
          Send message
        </button>
      </div>
    </>
  );
};

export default Emailing;

const PopMessage = ({ message }) => {
  return (
    <>
      {message && (
        <div className="rounded-lg bg-[#1d2026] text-center text-red-500 font-alegreya text-base">
          <>* </>
          {message}
        </div>
      )}
    </>
  );
};
