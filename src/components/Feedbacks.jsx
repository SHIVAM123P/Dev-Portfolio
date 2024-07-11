import React from "react";
import { motion } from "framer-motion";
import { testimonials } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const FeedbackCard = ({ index, testimonial, name, designation, company, image }) => (
  <motion.div variants={fadeIn("", "spring", index * 0.5, 0.75)} className="bg-dark p-10 rounded-3xl xs:w-[320px] w-full">
    <p className="text-primary text-lg font-bold">&ldquo;</p>
    <div className="mt-1">
      <p className="text-light text-lg">{testimonial}</p>
      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-light font-bold text-lg">
            <span className="text-primary">@</span> {name}
          </p>
          {/* <p className='mt-1 text-gray text-md'>
            {designation} at {company}
          </p> */}
        </div>
        <img
          src={image}
          alt={`feedback_by-${name}`}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="text-secondary text-center text-lg">What others say</p>
        <h2 className="text-light text-center text-4xl font-bold">Testimonials.</h2>
      </motion.div>

      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Feedbacks, "feedbacks");
