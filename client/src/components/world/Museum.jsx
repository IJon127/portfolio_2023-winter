/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Text, MeshReflectorMaterial } from "@react-three/drei";
import * as THREE from "three";
import Model from "./Model.jsx";
import {
  ToneMapping,
  Vignette,
  Noise,
  EffectComposer,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { useControls } from "leva";

export default function Museum(props) {
  const modelRef = useRef();

  // const { blendMode, premultily, opacity } = useControls({
  //   blendMode: {
  //     options: {
  //       add: BlendFunction.ADD,
  //       alpha: BlendFunction.ALPHA,
  //       average: BlendFunction.AVERAGE,
  //       colorBurn: BlendFunction.COLOR_BURN,
  //       color_dodge: BlendFunction.COLOR_DODGE,
  //       darken: BlendFunction.DARKEN,
  //       difference: BlendFunction.DIFFERENCE,
  //       divide: BlendFunction.DIVIDE,
  //       exclusion: BlendFunction.EXCLUSION,
  //       hardLight: BlendFunction.HARD_LIGHT,
  //       hardMix: BlendFunction.HARD_MIX,
  //       hue: BlendFunction.HUE,
  //       invert: BlendFunction.INVERT,
  //       invertRGB: BlendFunction.INVERT_RGB,
  //       lighten: BlendFunction.LIGHTEN,
  //       linear_burn: BlendFunction.LINEAR_BURN,
  //       linearDodge: BlendFunction.LINEAR_DODGE,
  //       linearLight: BlendFunction.LINEAR_LIGHT,
  //       luminosity: BlendFunction.LUMINOSITY,
  //       mutiply: BlendFunction.MULTIPLY,
  //       normal: BlendFunction.NORMAL,
  //       overlay: BlendFunction.OVERLAY,
  //       pinLight: BlendFunction.PIN_LIGHT,
  //       saturation: BlendFunction.SATURATION,
  //       screen: BlendFunction.SCREEN,
  //       viviLight: BlendFunction.VIVID_LIGHT,
  //     },
  //   },
  //   opacity: {
  //     value: 0.5,
  //     min: 0,
  //     max: 1,
  //     step: 0.01,
  //   },
  //   premultily: { value: true },
  // });

  useFrame(({ mouse }, delta) => {
    modelRef.current.position.x = THREE.MathUtils.lerp(
      modelRef.current.position.x,
      mouse.x * -0.1,
      0.03
    );
    modelRef.current.position.z = THREE.MathUtils.lerp(
      modelRef.current.position.x,
      mouse.x * 0.1,
      0.03
    );
    modelRef.current.position.y = THREE.MathUtils.lerp(
      modelRef.current.position.y,
      mouse.y * -0.1,
      0.03
    );
  });
  return (
    <group ref={modelRef}>
      {/* EFFECTS */}
      <EffectComposer disableNormalPass>
        <Vignette offset={0.4} darkness={0.5} />
        <Noise opacity={0.025} blendFunction={BlendFunction.HARD_LIGHT} />
      </EffectComposer>

      <pointLight position={[10.074, 1.28, 4.34]} intensity={0.06} />

      <ambientLight intensity={2} />
      <group position={[-0.387, 0.761, -4.902]} rotation={[0, -0.922, 0]}>
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[0.45, 0.65]} />
          <MeshReflectorMaterial resolution={512} mirror={0.9} color="white" />
        </mesh>
      </group>
      <Model {...props} />
      <group position={[6.872, 1.23, -7]} rotation={[0, -Math.PI / 2, 0]}>
        <Text
          font="./fonts/CrimsonText-SemiBold.woff"
          fontSize={0.13}
          color="#353535"
          maxWidth={2}
        >
          I Jon Hsieh
        </Text>
        <Text
          font="./fonts/OpenSans-Regular.woff"
          fontSize={0.06}
          color="#414141"
          position={[0.2, -0.155, 0]}
          maxWidth={2}
        >
          Creative tech architect: {"\n"}turning daily life into interactive
          art!
        </Text>
      </group>
      <Text
        font="./fonts/OpenSans-Regular.woff"
        fontSize={0.06}
        color="#666666"
        position={[-2.274, 1.45, 0.3]}
        rotation={[0, -Math.PI / 2, 0]}
        maxWidth={2}
        textAlign="left"
      >
        Games / XR
      </Text>
      <group position={[-4.1, 1.3, 9.52]} rotation={[0, -Math.PI, 0]}>
        <Text
          font="./fonts/CrimsonText-SemiBold.woff"
          fontSize={0.1}
          lineHeight={0.98}
          color="#474747"
          maxWidth={2}
          textAlign="left"
        >
          American Museum {"\n"}of Natural History
        </Text>
        <Text
          font="./fonts/OpenSans-Regular.woff"
          fontSize={0.06}
          position={[0.14, -0.17, 0]}
          color="#474747"
          maxWidth={2}
          textAlign="left"
        >
          Invisible Worlds Immersive Experience
        </Text>
      </group>
      <Text
        font="./fonts/OpenSans-Regular.woff"
        fontSize={0.045}
        color="#333333"
        position={[-2.274, 4.37, -2.15]}
        rotation={[0, -Math.PI / 2, 0]}
        maxWidth={2}
        textAlign="left"
        lineHeight={1.3}
      >
        Creative Coding
      </Text>
      <Text
        font="./fonts/OpenSans-Regular.woff"
        fontSize={0.05}
        color="#3a3a3a"
        position={[-6.2, 4.37, 9.52]}
        rotation={[0, -Math.PI, 0]}
        maxWidth={2}
        textAlign="left"
        lineHeight={1.3}
      >
        Blender {"\n"}/ Motion Graphics
      </Text>
      <Text
        font="./fonts/OpenSans-Regular.woff"
        fontSize={0.1}
        color="#333333"
        position={[-11, -1.3, -3.475]}
        rotation={[0, 0, 0]}
        maxWidth={2}
        textAlign="left"
        lineHeight={1.3}
      >
        EXIT
      </Text>
    </group>
  );
}
