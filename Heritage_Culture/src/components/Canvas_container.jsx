import React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import GlobeContainer from "./GlobeContainer";
const Canvas_container = () => {
  return (
    <Canvas camera={{ fov: 25, position: [-3.5, 0, 6] }}>
      {/* camera={{ fov: 20, position: [0, -10, 120] }} */}
      <OrbitControls />
      <Environment
        files={[
          "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_08_4k.exr",
        ]}
      />
      {/* <ambientLight /> */}
      <GlobeContainer />
    </Canvas>
  );
};

export default Canvas_container;
