import { useGLTF } from "@react-three/drei";
// import * as THREE from "three";
const GlobeContainer = () => {
  let model = useGLTF(`./tagMahal.glb`);
  return <primitive object={model.scene} />;
};

export default GlobeContainer;
