import { Canvas } from "react-three-fiber";
import Cone from "./Cone/Cone";
import Controls from "./Controls/Controls";
import GridHelper from "./GridHelper/GridHelper";

const Scene = ({ points }) => {
  return (
    <Canvas
      pixelRatio={window.devicePixelRatio}
      camera={{ position: [0, 75, 75] }}
      onCreated={({ gl }) => gl.setClearColor("#f0f0f0")}
    >
      <Cone points={points} />
      <GridHelper />
      <Controls />
    </Canvas>
  );
};

export default Scene;
