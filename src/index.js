import React from 'react';
import ReactDOM from 'react-dom/client';
import { Canvas } from '@react-three/fiber';

import { Experience } from './Experience';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
  <Canvas shadows gl={{ antialias: false }} camera={{
    fov: 45,
    near: 0.1,
    far: 200,
    position: [-4, 3, 6]
  }}
  >
    <Experience />
  </Canvas>
);
