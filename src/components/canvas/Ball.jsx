import React, { useState, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        {decal && (
          <Decal
            position={[0, 0, 1]}
            rotation={[2 * Math.PI, 0, 6.25]}
            scale={1}
            map={decal}
            flatShading
          />
        )}
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon, onError, alt }) => {
  const [loading, setLoading] = useState(true); // State to track loading state
  const [showAltText, setShowAltText] = useState(false); // State to track displaying alt text
  const timerRef = useRef(null);

  // Handle loading completion
  const handleLoadComplete = () => {
    setLoading(false);
  };

  // Handle error loading
  const handleLoadError = () => {
    setLoading(false);
    onError();
    // Start a timeout to show alt text after 3 seconds
    timerRef.current = setTimeout(() => {
      setShowAltText(true);
    }, 3000);
  };

  useEffect(() => {
    return () => {
      // Clear timeout on component unmount
      clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <Canvas frameloop='demand' dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
      <OrbitControls enableZoom={false} />
      {/* Display loading indicator or fallback if loading */}
      {loading ? (
        <CanvasLoader />
      ) : showAltText ? (
        <p className="text-gray-500 text-center">{alt}</p>
      ) : (
        <Ball imgUrl={icon} />
      )}
      {/* Preload resources */}
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
