import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { EarthCanvas } from "./canvas";

const Contact = (darkMode, toggleDarkMode) => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  // console.log('Service ID:', import.meta.env.VITE_EMAILJS_SERVICEID);
  // console.log('Template ID:', import.meta.env.VITE_EMAILJS_TEMPLATEID);
  // console.log('User ID:', import.meta.env.VITE_EMAILJS_USERID);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_62iggho',
      'template_8wg51zo',
      { from_name: form.name, to_name: "Shivam", from_email: form.email, to_email: "kshivam12112000@gmail.com", message: form.message },
      'rGIXYzWidbaLthrYu'
    )
    .then(() => {
      setLoading(false);
      alert("Thank you. I will get back to you as soon as possible.");
      setForm({ name: "", email: "", message: "" });
    })
    .catch((error) => {
      setLoading(false);
      console.error(error);
      alert("Ahh, something went wrong. Please try again.");
    });
  };

  return (
    <div className='xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden'>
      <motion.div variants={slideIn("left", "tween", 0.2, 1)} className='flex-[0.75] bg-dark p-8 rounded-2xl'>
        <p className='text-secondary text-lg'>Get in touch</p>
        <h3 className='text-light text-4xl font-bold'>Contact.</h3>

        <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
          <label className='flex flex-col'>
            <span className='text-light text-lg mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-gray-800 py-4 px-6 placeholder-gray-500 text-light rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-light text-lg mb-4'>Your Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className='bg-gray-800 py-4 px-6 placeholder-gray-500 text-light rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-light text-lg mb-4'>Your Message</span>
            <textarea
              rows='7'
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-gray-800 py-4 px-6 placeholder-gray-500 text-light rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className={`px-4 py-2 rounded max-w-[70px] ${
              darkMode ? "bg-secondary text-white" : "bg-black text-white-100"
            } mr-2 px-4 py-2 bg-primary text-white rounded transition-transform duration-300 ease-in-out hover:scale-110`}
            
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div variants={slideIn("right", "tween", 0.2, 1)} className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
