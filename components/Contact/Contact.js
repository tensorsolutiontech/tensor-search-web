import React, { useEffect } from "react";
import Link from "next/link";

import ContactForm from "./ContactForm";
import sal from "sal.js";

const Contact = () => {
  useEffect(() => {
    sal();

    const cards = document.querySelectorAll(".bg-flashlight");

    cards.forEach((bgflashlight) => {
      bgflashlight.onmousemove = function (e) {
        let x = e.pageX - bgflashlight.offsetLeft;
        let y = e.pageY - bgflashlight.offsetTop;

        bgflashlight.style.setProperty("--x", x + "px");
        bgflashlight.style.setProperty("--y", y + "px");
      };
    });
  }, []);
  return (
    <>
      <div className="main-content">
        <div className="rainbow-contact-area rainbow-section-gap">
          <div className="container">
            <div className="row row--15">
              <div className="col-lg-12">
                <div className="rainbow-contact-address mt_dec--30">
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-12">
                      <div className="rainbow-address bg-flashlight">
                        <div className="icon">
                          <i className="feather-headphones"></i>
                        </div>
                        <div className="inner">
                          <h4 className="title">Contact Phone Number</h4>
                          <p>
                            <Link href="#">+91 9560187169</Link>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                      <div className="rainbow-address bg-flashlight">
                        <div className="icon">
                          <i className="feather-mail"></i>
                        </div>
                        <div className="inner">
                          <h4 className="title">Our Email Address</h4>
                          <p>
                            <Link href="mailto:tensor.solutiontech@gmail.com">
                            tensor.solutiontech@gmail.com
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                      <div className="rainbow-address bg-flashlight">
                        <div className="icon">
                          <i className="feather-map-pin"></i>
                        </div>
                        <div className="inner">
                          <h4 className="title">Our Location</h4>
                          <p>
                          63 B, Indra Vihar, Airport Road <br /> Bhopal, MP 462030
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mt--40 row--15">
              <div className="col-lg-7">
                <ContactForm />
              </div>
              <div className="col-lg-5 mt_md--30 mt_sm--30">
                <div className="google-map-style-1">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117277.66064639146!2d77.32285780340268!3d23.28210588642923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c674ec5c2b7c9%3A0x1814ab1c9bad5843!2sTensor%20Solution%20Tech%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1728156143466!5m2!1sen!2sin"
                    width="600"
                    height="550"
                    style={{ border: "0" }}
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
