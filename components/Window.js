import { motion } from "framer-motion";
import Image from "next/image";
import TitleBar from "./TitleBar";

function Window() {
  return (
    <motion.div
      className="w-fit h-fit bg-[#F0EBF4] rounded-xl shadow-2xl"
      drag
      dragConstraints={{ top: 28, left: 0 }}
      initial={{ x: "50%", y: "80%" }}
    >
      <TitleBar />
      <div className="m-5 p-5">
        <div className="flex gap-x-8 justify-around">
          <div>
            <Image
              src="/portrait.jpg"
              alt=""
              layout="fixed"
              width={150}
              height={150}
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col text-sm justify-evenly">
            <span className="text-base font-semibold">Anshul Kanwar</span>
            {/* <span className="text-xs mb-4">
              I am a second year CSE Student who loves to code
            </span> */}
            <span>
              <p>This site is still under contruction 🚧.</p>
              <p>
                For the time being you can visit my old website{" "}
                <a
                  className="text-fuchsia-500 hover:underline"
                  href="https://anshulkanwar.vercel.app"
                >
                  here
                </a>
              </p>
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Window;
