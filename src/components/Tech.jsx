import React, { useState } from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const [loading, setLoading] = useState(true); // State to track loading state
  const [error, setError] = useState(false);   // State to track error state

  // Function to handle loading complete
  const handleLoadComplete = () => {
    setLoading(false);
  };

  // Function to handle error loading icon
  const handleError = () => {
    setLoading(false);
    setError(true);
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

          {/* Error fallback */}
          {error && (
            <div className="absolute inset-0 flex justify-center items-center">
              <p className="text-gray-500">Icon failed to load</p>
            </div>
          )}

          {/* BallCanvas with icon */}
          {!loading && !error && (
            <BallCanvas
              icon={technology.icon}
              onLoad={handleLoadComplete} // Callback when icon has loaded
              onError={handleError}      // Handle error loading icon
              alt={`Icon for ${technology.name}`} // Alt text for accessibility
            />
          )}

          {/* Alt text fallback */}
          {!loading && !error && (
            <img
              src={technology.icon}
              alt={`Icon for ${technology.name}`}
              style={{ visibility: "hidden" }}
              onLoad={handleLoadComplete}
              onError={handleError}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
