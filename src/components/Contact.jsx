import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { EarthCanvas } from "./canvas";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      "service_xxx", 
      "template_xxx", 
      { from_name: form.name, to_name: "Shivam", from_email: form.email, to_email: "kshivam12112000@gmail.com", message: form.message },
      "user_xxx"
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
            className='bg-primary py-3 px-8 rounded-xl outline-none w-fit text-light font-bold shadow-md shadow-primary'
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
