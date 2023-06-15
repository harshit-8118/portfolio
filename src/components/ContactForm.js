import React, { forwardRef, useState } from "react";

const InitialSender = {
  name: "",
  email: "",
  message: "",
};

const ContactForm = forwardRef((props, ref) => {
  const [sender, setSender] = useState(InitialSender);

  return (
    <form ref={ref} className="">
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
      <input
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
