import { motion } from "framer-motion";
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const [text] = useTypewriter({
    words: ['Shivam', 'a web developer'],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 1000,
    Color: 'red',
  });

  // Determine if the 3D model should be shown based on device capabilities
  const show3DModel = true; // Replace with your condition to check if 3D model can be loaded

  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className='absolute inset-0 top-[120px] max-w-7xl mx-auto px-6 flex flex-row items-start gap-5'>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-primary' />
          <div className='w-1 sm:h-80 h-40 bg-gradient-to-b from-primary to-transparent' />
        </div>

        <div>
          <h1 className='text-5xl font-bold text-light'>
            Hi, I'm <span className='text-accent'>{text}</span><Cursor cursorColor="#primary" />
          </h1>
          <p className='mt-2 text-lg text-dark'>
            I develop web applications, <br className='sm:block hidden' />
            using MERN stack
          </p>
        </div>
      </div>

      {show3DModel ? (
        <ComputersCanvas />
      ) : (
        <div className="w-full h-screen flex justify-center items-center">
          <p className="text-center text-xl">Sorry, the 3D model could not be loaded on this device.</p>
        </div>
      )}

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
