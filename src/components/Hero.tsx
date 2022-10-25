import { Canvas } from "@react-three/fiber";
import { Stairs } from "./Stairs";

const Hero = () => {
  return (
    <>
      <main className="h-screen">
        <div className="mx-auto max-w-6xl flex h-3/4 justify-center">
          <div className="w-1/2 my-auto">
            <h1 className="text-5xl text-left text-slate-900">
              Send us a design,<br></br>We&apos;ll make it a reality.
            </h1>
            <button className="text-left text-xl ring ring-slate-900 font-semibold w-max py-4 px-10 rounded-full my-10">
              Learn More
            </button>
          </div>
          <div className="w-1/2 z-0">
            <Canvas camera={{ position: [0, 6, 0], fov: 60 }}>
              <pointLight position={[0, 10, 0]} />
              <Stairs position={[1, -8, -3]} rotation={[2, 0, 0]} />
            </Canvas>
          </div>
        </div>
        <div className=" bg-blue-200 h-1/4">
          <div className="mx-auto max-w-6xl flex justify-between h-full items-center">
            <div>
              <p className="text-3xl text-blue-800">
                66 <span className="text-base text-slate-800">years</span>
              </p>
              <p className="text-base">Heavensent Brand History</p>
            </div>
            <div>
              <p className="text-3xl text-blue-800">
                234 <span className="text-base text-slate-800">designs</span>
              </p>
              <p className="text-base">Shipped and Produced</p>
            </div>
            <div>
              <p className="text-3xl text-blue-800">
                83 <span className="text-base text-slate-800">million</span>
              </p>
              <p className="text-base">Satisfied Customors</p>
            </div>
            <button className="w-1/4 h-1/2 text-3xl ring ring-slate-800 rounded-full text-slate-900 font-bold">
              Book Now
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
