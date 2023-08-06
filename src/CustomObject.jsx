import React from "react";
import { DoubleSide } from "three";

export const CustomObject = () => {
  const verticesCount = 10 * 3;
  const positions = new Float32Array(verticesCount * 3);

  for (let i = 0; i < verticesCount * 3; i++)
    positions[i] = Math.random() - 0.1 * 3;

  return (
    <mesh>
      <bufferGeometry>
        <bufferAttribute
          attach={"attributes-position"}
          count={verticesCount}
          itemSize={3}
          array={positions}
        />
      </bufferGeometry>
      <meshStandardMaterial color="red" side={DoubleSide}/>
    </mesh>
  );
};
