import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "./Loader";
import SwampModel from "./models/SwampModel";
import SkyModel from "./models/SkyModel";

export default function Scene() {
  const adjustSwampForScreenSize = () => {
    const screenScale = [0.008, 0.008, 0.008];
    const screenPosition = [0, 0, 0];
    const rotation = [0.24, -1.2, 0];

    return [screenScale, screenPosition, rotation];
  };

  const [swampScale, swampPosition, swampRotation] = adjustSwampForScreenSize();

  return (
    <section className="w-full h-full relative">
      <Canvas
        className="w-full h-full bg-transparent"
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[10, 1, 1]} intensity={1} />
          <ambientLight intensity={0.2} />
          {/* <pointLight /> */}
          {/* <spotLight /> */}
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1.4}
          />
          <SwampModel
            position={swampPosition}
            scale={swampScale}
            rotation={swampRotation}
          />
          <SkyModel
            position={swampPosition}
            scale={swampScale}
            rotation={swampRotation}
          />
        </Suspense>
      </Canvas>
    </section>
  );
}
