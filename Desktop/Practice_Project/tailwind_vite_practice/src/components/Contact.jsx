import React, { useRef } from "react";
import { GoLocation, GoMail } from "react-icons/go";
import { MdCall } from "react-icons/md";
import { SiPhonepe } from "react-icons/si";
import emailjs from "emailjs-com";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_vtcc02c",
        "template_j46y1ty",
        form.current,
        "--GrN1J8zJfvkwi4d"
      )

      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    e.target.reset();
  };
  return (
    <div className="container">
      {/* this is for heading */}
      <div>
        <div className=" p-8 space-y-4 justify-center">
          <h4>
            <span className="text-secondary">Contact </span>
            <span className="text-amber-400"> Me :-</span>
          </h4>
        </div>
        <div className="md:grid grid-cols-2 space-x-2 items-center mx-auto">
          {/* this is for address section */}
          <div className="space-y-4">
            <div className="border border-amber-300 rounded-3xl flex flex-col space-y-10 p-4 shadow-md shadow-secondary">
              <h1>Get in Touch</h1>
              <p>
                DK is a Fullstack Developer , who crafts beautiful websites ,
                thats helps your business to grow online .
              </p>
              <div className="flex flex-row space-x-4 items-center">
                <div className="h-12 w-12  bg-slate-800 p-2 rounded-xl">
                  <GoLocation className="text-secondary text-3xl" />
                </div>
                <div>
                  <h5>WP-90 ASHOK VIHAR, NEW DELHI</h5>
                  <h5>New Delhi , 110052</h5>
                </div>
              </div>
              {/* this for email */}
              <div className="flex flex-row space-x-4 items-center">
                <div className="h-12 w-12  bg-slate-800 p-2 rounded-xl">
                  <GoMail className="text-secondary text-3xl" />
                </div>
                <div>
                  <h5>Mail Us</h5>
                  <h5>deepakraj5455@gmail.com</h5>
                </div>
              </div>
              {/* this for call */}
              <div className="flex flex-row space-x-4 items-center">
                <div className="h-12 w-12  bg-slate-800 p-2 rounded-xl">
                  <MdCall className="text-secondary text-3xl" />
                </div>
                <div>
                  <h5>Call Me</h5>
                  <h5>+91-9939183692</h5>
                </div>
              </div>
              {/* this for donation */}
              <div className="flex flex-row space-x-4 items-center">
                <div className="h-12 w-12  bg-slate-800 p-2 rounded-xl">
                  <SiPhonepe className="text-secondary text-3xl" />
                </div>
                <div>
                  <h5>Buy Coffee for me ..</h5>
                  <h5>9939183692@ybl</h5>
                </div>
              </div>
            </div>
          </div>

          {/* this is for contact form  section */}
          {/*  */}
          <div className=" border border-amber-300 rounded-3xl">
            <form ref={form} onSubmit={sendEmail}>
              <h1>Send a message</h1>
              <div className="space-x-4 p-1 space-y-10">
                <input
                  type="text"
                  placeholder="first name "
                  name="name"
                  required
                  className=" border py-3 px-5 focus:outline-none rounded-lg bg-transparent text-white"
                />
                <input
                  type="text"
                  placeholder="last name "
                  name="name"
                  required
                  className=" border py-3 px-5 focus:outline-none rounded-lg bg-transparent text-white"
                />
              </div>
              <div className="space-x-4 p-1 space-y-10">
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  required
                  className=" border py-3 px-5 focus:outline-none rounded-lg bg-transparent text-white"
                />
                <input
                  type="text"
                  name="message"
                  required
                  placeholder="Mobile Number "
                  className=" border py-3 px-5 focus:outline-none rounded-lg bg-transparent text-white"
                />
              </div>
              {/* TEXT AREA */}

              <div className="space-x-4 p-1 space-y-10 mt-6">
                <textarea
                  type="text"
                  required
                  rows={5}
                  placeholder="Enter your message"
                  className=" border py-3 px-5 focus:outline-none rounded-lg bg-transparent text-white w-full"
                ></textarea>
                <button className="animated-btn w-1/2 " type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
