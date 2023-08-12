import {
  useHelper,
  OrbitControls,
  ContactShadows,
  Sky,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import * as THREE from "three";

// softShadows({
//   frustum: 3.75,
//   size: 0.005,
//   near: 9.5,
//   samples: 17,
//   rings: 11,
// });

export const Experience = () => {
  const dlRef = useRef();
  const cubeRef = useRef();
  useHelper(dlRef, THREE.DirectionalLightHelper, 1);

  useFrame((state, delta) => {
    const time = state.clock.elapsedTime;
    cubeRef.current.position.x = 2 + Math.sin(time);

    cubeRef.current.rotation.y += delta * 0.2;
  }, []);

  return (
    <>
      {/* <BakeShadows /> */}

      <color args={["green"]} attach={"background"} />

      <OrbitControls />

      {/* <AccumulativeShadows
        position={[0, -0.99, 0]}
        scale={10}
        color="#316d39"
        opacity={0.8}
        frames={Infinity}
        temporal
        blend={100}
      >
        <RandomizedLight
          position={[1, 2, 3]}
          amount={8}
          radius={1}
          ambient={0.5}
          intensity={1}
          bias={0.001}
        />
      </AccumulativeShadows> */}

      {/* <ContactShadows
        position={[0, -0.99, 0]}
        scale={10}
        resolution={128}
        far={5}
      /> */}

      <directionalLight
        ref={dlRef}
        castShadow
        position={[1, 2, 3]}
        intensity={1.5}
        shadow-mapSize={[1024, 1024]}
        shadow-camera-near={1}
        shadow-camera-far={10}
        shadow-camera-top={5}
        shadow-camera-right={5}
        shadow-camera-bottom={-5}
        shadow-camera-left={-5}
      />
      <ambientLight intensity={0.5} />

      <Sky />

      <mesh castShadow position-x={-2}>
        <sphereGeometry />
        <meshStandardMaterial color="orange" />
      </mesh>
      <mesh ref={cubeRef} castShadow rotation-y={Math.PI * 0.25} position-x={2}>
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>
      <mesh receiveShadow rotation-x={-Math.PI * 0.5} position-y={-1} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
    </>
  );
};
