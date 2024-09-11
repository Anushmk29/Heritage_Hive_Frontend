import React from "react";

import { useGLTF } from "@react-three/drei";
const Tajmahal = () => {
  let model = useGLTF(`./tagMahal.glb`);
  return <primitive object={model.scene} />;
};

export default Tajmahal;
