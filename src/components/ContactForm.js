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
      <h1 className="text-[#0c7064] mx-auto text-xl font-semibold m-1  sm:text-4xl">Drop me a line..</h1>
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
