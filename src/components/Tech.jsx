import React from "react";
import { useMediaQuery } from 'react-responsive';
import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import BallCanvas from "./canvas/Ball";
const Tech = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 }); // Check if the device width is mobile

  if (isMobile) {
    return (
      <div className='flex flex-col items-center gap-4'>
        <h2 className='text-2xl font-semibold'>Technologies</h2>
        <table className='border-collapse border border-gray-200'>
          <thead>
            <tr className='bg-gray-100'>
              <th className='border border-gray-200 px-4 py-2'>Technology</th>
              <th className='border border-gray-200 px-4 py-2'>Status</th>
            </tr>
          </thead>
          <tbody>
            {technologies.map((technology) => (
              <tr key={technology.name} className='bg-black'>
                <td className='border border-gray-200 px-4 py-2'>{technology.name}</td>
                <td className='border border-gray-200 px-4 py-2'>Icons cannot be displayed on this device</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  // If not mobile, render the original component with BallCanvas
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          {/* Render BallCanvas component for non-mobile devices */}
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
