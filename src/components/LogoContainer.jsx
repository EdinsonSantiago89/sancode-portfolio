import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import InteractiveLogo from './InteractiveLogo';

const LogoContainer = () => {
  return (
    <div className="fixed top-4 left-4 z-50 w-24 h-24">
      <Canvas camera={{ position: [0, 0, 2] }}>
        <ambientLight intensity={1} />
        <Suspense fallback={null}>
          <InteractiveLogo />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default LogoContainer;
