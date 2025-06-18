import React, { useRef } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_85o5ut9", // ✅ Your EmailJS Service ID
        "template_eztkacv", // ✅ Your Template ID
        form.current,
        "Qdv-_-EeThbMLaRTV" // ✅ Your Public Key -emailjs
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            icon: "success",
            title: "Message Sent!",
            text: "Thank you for contacting me. I will get back to you soon!",
            background: "#1f1f1f",
            color: "#ffffff",
            confirmButtonColor: "#ff4b81",
          });
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong. Please try again later!",
          });
        }
      );

    e.target.reset(); // reset form after submission
  };

  return (
    <div
      className="bg-black text-white w-full min-h-screen py-16 px-4"
      id="contact"
    >
      {/* Header */}
      <div className="flex flex-col items-center justify-center text-center space-y-3">
        <p className="text-sm sm:text-base uppercase tracking-wider">
          Connect With Me
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold">Get in Touch</h1>
        <p className="text-sm sm:text-base max-w-2xl">
          I'd love to hear from you! Fill out the form and I’ll get back to you
          shortly.
        </p>
      </div>

      {/* Contact Form */}
      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full flex flex-col items-center justify-center py-10 gap-5"
      >
        {/* Name and Email */}
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-3xl">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full bg-transparent border border-white rounded p-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full bg-transparent border border-white rounded p-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>

        {/* Phone Number */}
        <input
          type="text"
          name="user_phone"
          placeholder="Your Phone Number"
          required
          className="w-full max-w-3xl bg-transparent border border-white rounded p-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
        />

        {/* Message */}
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
          className="w-full max-w-3xl bg-transparent border border-white rounded p-3 resize-none focus:outline-none focus:ring-2 focus:ring-pink-500"
        ></textarea>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-4 bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-lg transition duration-300 font-semibold"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
