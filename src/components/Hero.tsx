import { Canvas } from "@react-three/fiber";
import { Stairs } from "./Stairs";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "tween",
      duration: 1,
    },
  },
};

const Hero = () => {
  return (
    <>
      <main className="h-screen">
        <div className="mx-auto max-w-6xl flex h-3/4 justify-center">
          <div className="w-1/2 my-auto">
            <motion.h1
              className="text-5xl text-left text-slate-900"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              Send us a design,<br></br>We&apos;ll make it a reality.
            </motion.h1>
            <motion.button
              className="text-left text-xl ring ring-slate-900 font-semibold w-max py-4 px-10 rounded-full my-10"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Learn More
            </motion.button>
          </div>
          <div className="w-1/2 z-0">
            <Canvas camera={{ position: [0, 6, 0], fov: 60 }}>
              <pointLight position={[0, 10, 0]} />
              <Stairs position={[1, -8, -3]} rotation={[2, 0, 0]} />
            </Canvas>
          </div>
        </div>
        <div className=" bg-blue-200 h-1/4">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="mx-auto max-w-6xl flex justify-between h-full items-center"
          >
            <motion.div variants={item}>
              <p className="text-3xl text-blue-800">
                66 <span className="text-base text-slate-800">years</span>
              </p>
              <p className="text-base">Heavensent Brand History</p>
            </motion.div>
            <motion.div variants={item}>
              <p className="text-3xl text-blue-800">
                234 <span className="text-base text-slate-800">designs</span>
              </p>
              <p className="text-base">Shipped and Produced</p>
            </motion.div>
            <motion.div variants={item}>
              <p className="text-3xl text-blue-800">
                83 <span className="text-base text-slate-800">million</span>
              </p>
              <p className="text-base">Satisfied Customors</p>
            </motion.div>
            <motion.button
              variants={item}
              className="w-1/4 h-1/2 text-3xl ring ring-slate-800 rounded-full text-slate-900 font-bold"
            >
              Book Now
            </motion.button>
          </motion.div>
        </div>
      </main>
    </>
  );
};

export default Hero;
