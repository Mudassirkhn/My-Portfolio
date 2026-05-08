import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_85o5ut9', 'template_eztkacv', form.current, 'Qdv-_-EeThbMLaRTV')
      .then(
        () => {
          Swal.fire({
            icon: 'success',
            title: 'Message Sent',
            text: 'Thank you for contacting me. I will get back to you soon.',
            background: '#0f1f2d',
            color: '#e6f1ff',
            confirmButtonColor: '#00c2a8',
          });
        },
        () => {
          Swal.fire({
            icon: 'error',
            title: 'Oops',
            text: 'Something went wrong. Please try again later.',
          });
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact" className="py-20">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-7"
          >
            <p className="section-kicker">Contact</p>
            <h2 className="section-title">Let's Build Something Great</h2>
            <p className="mt-4 leading-8 text-soft">
              Share your project idea, timeline, and goals. I will reach out with the best
              plan to move it forward.
            </p>
            <div className="mt-8 space-y-3 text-sm text-soft">
              <p>Email: mmkhan213@gmail.com</p>
              <p>Location: India</p>
              <p>Role: MERN Stack Web Developer</p>
            </div>
          </motion.div>

          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-panel space-y-4 p-7"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="rounded-xl border border-white/15 bg-[#102131] px-4 py-3 text-sm outline-none transition focus:border-[#00c2a8]"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="rounded-xl border border-white/15 bg-[#102131] px-4 py-3 text-sm outline-none transition focus:border-[#00c2a8]"
              />
            </div>

            <input
              type="text"
              name="user_phone"
              placeholder="Your Phone Number"
              required
              className="w-full rounded-xl border border-white/15 bg-[#102131] px-4 py-3 text-sm outline-none transition focus:border-[#00c2a8]"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="w-full resize-none rounded-xl border border-white/15 bg-[#102131] px-4 py-3 text-sm outline-none transition focus:border-[#00c2a8]"
            />

            <button type="submit" className="primary-btn">
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
