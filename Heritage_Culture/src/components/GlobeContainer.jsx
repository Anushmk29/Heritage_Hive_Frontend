import React from "react";
// import a from ".."
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
const GlobeContainer = () => {
  let model = useGLTF(`./globe3.glb`);
  return <primitive object={model.scene} />;
};

export default GlobeContainer;
