import React from 'react';
import ReactDOM from 'react-dom/client';
import { Canvas } from '@react-three/fiber';

import './index.css';
import { Experience } from './Experience';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Canvas gl={{ antialias: false }}>
    <Experience />
  </Canvas>
);
