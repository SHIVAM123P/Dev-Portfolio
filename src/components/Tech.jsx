import React, { useState } from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const [loading, setLoading] = useState(true); // State to track loading state

  // Function to handle loading complete
  const handleLoadComplete = () => {
    setLoading(false);
  };

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28 relative" key={technology.name}>
          {/* Loading indicator */}
          {loading && (
            <div className="absolute inset-0 flex justify-center items-center">
              <p className="text-gray-500">Loading...</p>
            </div>
          )}

          {/* BallCanvas with icon */}
          <BallCanvas
            icon={technology.icon}
            onLoad={handleLoadComplete} // Callback when icon has loaded
            onError={() => setLoading(false)} // Handle error loading icon
            alt={`Icon for ${technology.name}`} // Alt text for accessibility
          />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
