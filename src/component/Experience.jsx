import {
  MeshReflectorMaterial,
  PresentationControls,
  Stage,
} from "@react-three/drei";
import { Scene } from "./Scene";


function Experience() {
  return (
    <>
      <PresentationControls
        speed={1.5}
        global
        polar={[-0.1, Math.PI / 4]}
        rotation={[.50, Math.PI /30, 0]}
        position={[0,0,-10]}
      >
        <ambientLight intensity={.20} />
        <spotLight
          position={[10, 10, 10]}
          angle={90}
          penumbra={1}
          decay={6}
          intensity={Math.PI/1}
        />
        <Scene />
      </PresentationControls>
    </>
  );
}

export default Experience;
