import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import { CustomObject } from "./CustomObject";

export const Experience = () => {
  const cubeRef = useRef();
  const groupRef = useRef();
  useFrame((state, delta) => {
    cubeRef.current.rotation.x += delta;
    const angle = state.clock.elapsedTime;
    state.camera.position.x = Math.sin(angle) * 8;
    state.camera.position.z = Math.cos(angle) * 8;
    state.camera.lookAt(0, 0, 0);
    // state.camera.position.x += delta;
    // groupRef.current.rotation.y += delta;
  }, []);

  return (
    <>
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <group ref={groupRef}>
        <mesh position-x={-2}>
          <sphereGeometry />
          <meshStandardMaterial color="orange" />
        </mesh>
        <mesh rotation-y={Math.PI * 0.25} position-x={2} ref={cubeRef}>
          <boxGeometry />
          <meshStandardMaterial color="mediumpurple" />
        </mesh>
      </group>
      <mesh rotation-x={-Math.PI * 0.5} position-y={-1} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>

      <CustomObject />
    </>
  );
};
