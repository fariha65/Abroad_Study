import React, { useState, useRef } from "react";
import BreadCrumps from "../components/BreadCrumps";
import emailjs from "@emailjs/browser";

function Contact() {
  // State to manage the result message
  const [result, setResult] = useState("");
  const form = useRef(); // Reference to the form element

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
  
    try {
      const response = await emailjs.sendForm(
        "service_olhop7g",
        "template_co7l4vm",
        form.current,
        "YZYducbcq3_9T_2Of"
      );
      console.log("Response:", response);
      setResult("Form Submitted Successfully");
      form.current.reset();
    } catch (error) {
      console.error("Error details:", error);
      setResult("Something went wrong. Please try again later.");
    }
  };
  

  return (
    <div>
      <BreadCrumps page="Contact us" title="Contact" />

      {/* Contact Block */}
      <section className="w3l-contact-1 pb-5" id="contact">
        <div className="contacts-9 py-lg-5 py-md-4">
          <div className="container">
            <div className="d-grid contact-view">
              <div className="cont-details">
                <h4 className="title-small">Get in touch</h4>
                <h3 className="title-big mb-4">Feel free to contact us</h3>
                <p className="mb-sm-5 mb-4">
                  You’ll be able to have any issue resolved within 24 hours.
                </p>
                <div className="cont-top">
                  <div className="cont-left text-center">
                    <span className="fa fa-map-marker text-primary" />
                  </div>
                  <div className="cont-right">
                    <h6>Address</h6>
                    <p className="pr-lg-5">
                      Address here,51 Siddheswari Rd, Dhaka 1217 Stamford University Bangladesh
                    </p>
                  </div>
                </div>
                <div className="cont-top margin-up">
                  <div className="cont-left text-center">
                    <span className="fa fa-phone text-primary" />
                  </div>
                  <div className="cont-right">
                    <h6>Call for help</h6>
                    <p>
                      <a href="tel:+0156789553">+0156789553</a>
                    </p>
                  </div>
                </div>
                <div className="cont-top margin-up">
                  <div className="cont-left text-center">
                    <span className="fa fa-envelope-o text-primary" />
                  </div>
                  <div className="cont-right">
                    <h6>Contact for support</h6>
                    <p>
                      <a href="mailto:tfarihaafrin@gmail.com" className="mail">
                        tfarihaafrin@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="map-content-9">
                <h5 className="mb-sm-4 mb-3">Write to us</h5>
                <form ref={form} onSubmit={onSubmit}>
                  <div className="twice-two">
                    <input
                      type="text"
                      className="form-control"
                      name="user_name"
                      placeholder="Name"
                      required
                    />
                    <input
                      type="email"
                      className="form-control"
                      name="user_email"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="twice">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      placeholder="Subject"
                      required
                    />
                  </div>
                  <textarea
                    name="message"
                    className="form-control"
                    placeholder="Message"
                    required
                  ></textarea>
                  <div className="text-right">
                    <button type="submit" className="btn btn-primary btn-style mt-4">
                      Send Message
                    </button>
                  </div>
                </form>
                {/* Display the result message */}
                {result && <p className="result-message">{result}</p>}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
