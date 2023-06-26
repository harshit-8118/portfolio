import React, { forwardRef } from "react";

const ContactForm = forwardRef((props, ref) => {
  return (
    <form ref={ref} id="form" className="form flex flex-col mx-auto">
      <h1 className="font-roboto text-white mx-auto text-xl font-bold m-1  sm:text-4xl">Drop me a line..</h1>
      <input
        className=""
        type="text"
        name="sender_name"
        placeholder="Name"
        />
      <input
        className=""
        type="email"
        name="sender_email"
        placeholder="Email"
        />
      <textarea
        className=""
        type="text"
        name="sender_message"
        maxLength={250}
        placeholder="Write your message..."
      />
    </form>
  );
});

export default ContactForm;
