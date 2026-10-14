import React from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';

const InteractiveLogo = () => {
  const meshRef = React.useRef();
  const texture = useTexture('/logo.jpeg');

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[1, 1]} /> {/* Logo más pequeño */}
      <meshBasicMaterial map={texture} transparent />
    </mesh>
  );
};

export default InteractiveLogo;
