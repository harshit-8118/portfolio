import React, { forwardRef, useState } from "react";

const InitialSender = {
  name: "",
  email: "",
  message: "",
};

const ContactForm = forwardRef((props, ref) => {
  const [sender, setSender] = useState(InitialSender);

  return (
    <form ref={ref} id="form" className="form flex flex-col mx-auto">
      <h1 className="mx-auto text-xl font-bold m-1 my-2 sm:text-4xl">Drop me a line..</h1>
      <input
        className=""
        type="text"
        name="sender_name"
        value={sender.name}
        placeholder="Name"
        onChange={(e) => setSender({ ...sender, name: e.target.value })}
        />
      <input
        className=""
        type="text"
        name="sender_email"
        value={sender.email}
        placeholder="Email"
        onChange={(e) => setSender({ ...sender, email: e.target.value })}
        />
      <textarea
        className=""
        type="text"
        name="sender_message"
        value={sender.message}
        placeholder="Write your message..."
        onChange={(e) => setSender({ ...sender, message: e.target.value })}
      />
    </form>
  );
});

export default ContactForm;
