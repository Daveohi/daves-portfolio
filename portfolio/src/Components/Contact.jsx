import React, { useRef, useState } from "react";
import mailIco from "../Images & Styles/images/mailIco.png";
import Navbar from "./Navbar";
// import emailjs from 'emailjs-com';
// import Map from "./Map";


const Contact = () => {
  const form = useRef();
  const [sucess, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
      
    //   emailjs
    //     .sendForm(
    //       "service_enpryww",
    //       "template_zuz1smt",
    //       form.current,
    //       "YZGLwHoVI8ueSJnC3c"
    //     )
    //     .then(
    //       (result) => {
    //         console.log(result.text);
    //         setSuccess(true);
    //         setError(false);
    //       },
    //       (error) => {
    //         console.log(error.text);
    //         setSuccess(false);
    //         setError(true);
    //       }
    //     );

    // e.target.reset(); // Reset the form after submission
    
  };
  return (
    <div>
    < Navbar />
    <div className="section-contact" id="contact">
      
          
      <div className="contact-container">
        <div className="left-container">
          <form onSubmit={handleSubmit} ref={form}>
            <h1>Contact me:</h1>
            <input type="text" placeholder="Your name" name="name" required />
            <input
              type="email"
              placeholder="Your email"
              name="email"
              required
            />
            <textarea
              placeholder="Type your message"
              rows={10}
              name="message"
            />
            <button type="submit" value="Send">
              Send
            </button>
            <span>
              {sucess
                ? "Your message has been sent! I'll get back to you soon!"
                : ""}{" "}
            </span>
            <span>{error ? "Something went wrong :(" : ""} </span>
          </form>
          <div className="contact">
            <span>
              <img src={mailIco} /> Or text me at:
            </span>
            <a
              href="daveohimai@gmal.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              daveohimai@gmail.com
            </a>
          </div>
        </div>

        <div className="right-container">
          {/* <Map /> */}
        </div>
      </div>
      </div>
    </div>
  );
}

export default Contact;
