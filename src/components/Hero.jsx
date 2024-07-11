import { motion } from "framer-motion";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className='absolute inset-0 top-[120px] max-w-7xl mx-auto px-6 flex flex-row items-start gap-5'>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-primary' />
          <div className='w-1 sm:h-80 h-40 bg-gradient-to-b from-primary to-transparent' />
        </div>

        <div>
          <h1 className='text-5xl font-bold text-light'>
            Hi, I'm <span >Shivam</span>
          </h1>
          <p className='mt-2 text-lg text-dark'>
            I develop web applications, <br className='sm:block hidden' />
            using MERN stack
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute bottom-10 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-primary flex justify-center items-start p-2'>
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className='w-3 h-3 rounded-full bg-primary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
