import {
  Float,
  Html,
  MeshReflectorMaterial,
  OrbitControls,
  PivotControls,
  Text,
  TransformControls,
} from "@react-three/drei";
import React, { useRef } from "react";

export const Experience = () => {
  const cubeRef = useRef();
  const sphereRef = useRef();

  return (
    <>
      <OrbitControls makeDefault />
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />
      <PivotControls anchor={[0, 0, 0]} depthTest={false}>
        <mesh ref={sphereRef} position-x={-2}>
          <sphereGeometry />
          <meshStandardMaterial color="orange" />
          <Html
            position={[1, 1, 0]}
            className="sphere"
            center
            distanceFactor={8}
            occlude={[sphereRef, cubeRef]}
          >
            That's a sphere
          </Html>
        </mesh>
      </PivotControls>

      <mesh ref={cubeRef} scale={1.5} position-x={2}>
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>
      <TransformControls object={cubeRef} mode="rotate" />

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <MeshReflectorMaterial
          color="greenyellow"
          blur={[1000, 1000]}
          resolution={512}
          mixBlur={1}
          mirror={0.5}
        />
      </mesh>

      <Float speed={5} floatIntensity={5}>
        <Text
          font="./Montserrat-Black.woff2"
          color="salmon"
          fontSize={1}
          position-y={2}
          maxWidth={10}
          textAlign="center"
        >
          I LOVE R3F
        </Text>
      </Float>
    </>
  );
};
