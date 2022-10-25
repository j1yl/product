import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Stairs(props: any) {
  const { nodes, materials } = useGLTF("/stairs.glb");
  const ref: any = useRef();

  useFrame(() => {
    ref.current.rotation.y += 0.01 * 0.01;
  });

  return (
    <group {...props} dispose={null} ref={ref}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials.Material}
        scale={[8, 8, 8]}
      >
        <meshStandardMaterial color={"#075985"} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/stairs.glb");
