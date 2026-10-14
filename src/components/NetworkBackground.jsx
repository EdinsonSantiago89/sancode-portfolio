import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const ParticleField = () => {
  const points = useRef();

  // Generar partículas aleatorias
  const count = 1000;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    points.current.rotation.x = t * 0.05;
    points.current.rotation.y = t * 0.08;

    // Interacción simple: ligeros movimientos basados en el mouse (mouse normalizado)
    const { x, y } = state.mouse;
    points.current.position.x = x * 0.5;
    points.current.position.y = y * 0.5;
  });

  return (
    <Points ref={points} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#E60000"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
};

const NetworkBackground = () => (
  <div className="fixed inset-0 z-[-1] bg-black">
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ParticleField />
    </Canvas>
  </div>
);

export default NetworkBackground;
