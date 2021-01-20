import { useRef, FC } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { extend, useThree, useFrame, ReactThreeFiber } from "react-three-fiber";

extend({ OrbitControls });

declare global {
  namespace JSX {
    interface IntrinsicElements {
      orbitControls: ReactThreeFiber.Object3DNode<OrbitControls, typeof OrbitControls>
    }
  }
}

type orbitRefType = {
  current: any
}

const Controls:FC = () => {
  const orbitRef:orbitRefType = useRef();
  const { camera, gl } = useThree();

  useFrame(() => {
    if (orbitRef && orbitRef.current) {
      orbitRef.current.update();
    }
  });
  return (
    <orbitControls
      ref={orbitRef}
      args={[camera, gl.domElement]}
      autoRotate={false}
      enableDamping
      dampingFactor={0.05}
      screenSpacePanning={false}
    />
  );
};

export default Controls;
