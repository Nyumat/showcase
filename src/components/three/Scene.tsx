/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-empty-pattern */
/* eslint-disable @typescript-eslint/no-empty-interface */

// TODO: Clear eslint bypassees

import { useFrame } from "@react-three/fiber";
import {
  Bloom,
  ChromaticAberration,
  EffectComposer,
} from "@react-three/postprocessing";
import { BlendFunction, ChromaticAberrationEffect } from "postprocessing";
import { useLayoutEffect, useRef } from "react";
import { Color, Matrix4, Object3D, Vector2, Vector3, InstancedMesh } from "three";

export interface SceneProps {
  isInView?: boolean | string;
}

const COUNT = 1000;
const XY_BOUNDS = 40;
const Z_BOUNDS = 50;
const MAX_SPEED_FACTOR = 2;
const MAX_SCALE_FACTOR = 50;
const CHROMATIC_ABBERATION_OFFSET = 0.007;

// Pre-create reusable objects
const temp = new Matrix4();
const tempPos = new Vector3();
const tempObject = new Object3D();
const tempColor = new Color();

export const Scene = ({ }: SceneProps) => {
  const meshRef = useRef<InstancedMesh>();
  const effectsRef = useRef<ChromaticAberrationEffect>();
  // const { gl } = useThree(); // TODO: Properly dispose of context

  useLayoutEffect(() => {
    if (!meshRef.current) return;

    const t = new Object3D();
    let j = 0;
    // Generate and set initial positions for instanced objects
    for (let i = 0; i < COUNT * 3; i += 3) {
      t.position.x = generatePos();
      t.position.y = generatePos();
      t.position.z = (Math.random() - 0.5) * Z_BOUNDS;
      t.updateMatrix();
      meshRef.current.setMatrixAt(j++, t.matrix);
    }

    meshRef.current.instanceMatrix.needsUpdate = true;

  }, []);

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    // Calculate velocity based on elapsed time
    const velocity =
      1 / Math.pow(state.clock.elapsedTime + 1, state.clock.elapsedTime + 1);

    // Update positions, scales, and colors for each instanced object
    for (let i = 0; i < COUNT; i++) {
      meshRef.current.getMatrixAt(i, temp);

      // Update scale
      tempObject.scale.set(1, 1, Math.max(1, velocity * MAX_SCALE_FACTOR));

      // Update position
      tempPos.setFromMatrixPosition(temp);
      if (tempPos.z > Z_BOUNDS / 2) {
        tempPos.z = -Z_BOUNDS / 2;
      } else {
        tempPos.z += Math.max(delta, velocity * MAX_SPEED_FACTOR);
      }
      tempObject.position.set(tempPos.x, tempPos.y, tempPos.z);

      // Apply transforms
      tempObject.updateMatrix();
      meshRef.current.setMatrixAt(i, tempObject.matrix);

      // Update and apply color
      if (tempPos.z > 0) {
        tempColor.r = tempColor.g = tempColor.b = 1;
      } else {
        tempColor.r = tempColor.g = tempColor.b = 1 - tempPos.z / (-Z_BOUNDS / 2);
      }
      meshRef.current.setColorAt(i, tempColor);
    }

    // Mark the instance matrix and instance color for update
    meshRef.current.instanceMatrix.needsUpdate = true;
    if (meshRef.current.instanceColor)
      meshRef.current.instanceColor.needsUpdate = true;

    // Update post-processing uniforms
    if (!effectsRef.current) return;
    effectsRef.current.offset.x = Math.max(
      0,
      Math.pow(0.5, state.clock.elapsedTime) * CHROMATIC_ABBERATION_OFFSET
    );
    effectsRef.current.offset.y = Math.max(
      0,
      Math.pow(0.5, state.clock.elapsedTime) * CHROMATIC_ABBERATION_OFFSET
    );
  });

  return (
    <>
      <color args={["Black"]} attach="background" />
      {/* Instanced mesh */}
      <instancedMesh
        ref={meshRef as any}
        args={[undefined, undefined, COUNT]}
        matrixAutoUpdate
      >
        <sphereGeometry args={[0.05]} />
        <meshBasicMaterial color={[1.5, 1.5, 1.5]} toneMapped={false} />
      </instancedMesh>

      {/* Post-processing effects */}
      <EffectComposer>
        <Bloom luminanceThreshold={0.2} mipmapBlur />
        <ChromaticAberration
          radialModulation={false}
          ref={effectsRef as any}
          blendFunction={BlendFunction.NORMAL}
          offset={new Vector2(
            CHROMATIC_ABBERATION_OFFSET,
            CHROMATIC_ABBERATION_OFFSET
          )}
          modulationOffset={1}
        />
      </EffectComposer>
    </>
  );
};

// Helper function to generate random positions within XY_BOUNDS
function generatePos() {
  return (Math.random() - 0.5) * XY_BOUNDS;
}
