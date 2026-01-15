import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("Send button clicked"); // DEBUG

    emailjs
      .sendForm(
        "service_c3li44d",
        "template_5mect7r",
        formRef.current,
        "xbE1xKpIgnYkqyizi"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully ✅");
          formRef.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send ❌");
        }
      );
  };

  return (
    <div className="page">
      <h1>Contact Me 📩</h1>
      <p>Feel free to reach out. I’ll reply as soon as possible.</p>

      <form ref={formRef} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <input type="text" name="title" placeholder="Subject" required />
        <textarea name="message" placeholder="Your Message" rows="5" required />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
