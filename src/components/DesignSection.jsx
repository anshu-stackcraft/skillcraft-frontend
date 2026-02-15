import { motion } from "framer-motion";

const slider = [
  "/img1.jpg",
  "/img2.jpg",
  "/img3.jpg",
  "/img4.jpg",
  "/img1.jpg",
];

export default function DesignTheme() {

  return (
    <div className="min-h-screen bg-[#0a0a0a] p-6 md:p-14">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* LEFT BIG CARD */}
        <div className="bg-[#141414] rounded-4xl p-6 shadow-2xl">
          <img
            src="/laptop.png"
            className="rounded-2xl w-full"
            alt="Design"
          />
        </div>

        {/* QUOTE CARD */}
        <div className="rounded-4xl bg-linear-to-r from-[#ff5f1f] to-[#ff8a00] flex items-center justify-center p-10 shadow-xl">
          <h2 className="text-white text-xl md:text-3xl font-medium">
            A great designer never follows the trend.
          </h2>
        </div>

        {/* CTA CARD */}
        <div className="bg-white rounded-[28px] flex items-center justify-center shadow-xl">
          <button className="bg-[#ff6a1f] hover:bg-[#ff7a2f] transition px-8 py-4 rounded-full flex items-center gap-3 text-white">
            Get in Touch
            <span className="text-lg">↗</span>
          </button>
        </div>

        {/* LOGO CARD */}
        <div className="bg-[#ff6a1f] rounded-[28px] flex items-center justify-center text-white text-5xl font-semibold shadow-xl">
          G
        </div>

        {/* SLIDER CARD */}
        <div className="md:col-span-2 bg-[#141414] rounded-4xl p-8 shadow-2xl overflow-hidden">
          <h3 className="text-[#ff7a2f] text-lg mb-6">
            Behind the Designs
          </h3>

          {/* SLIDER */}
          <motion.div
            className="flex gap-6"
            animate={{ x: ["0%", "-60%"] }}
            transition={{
              duration: 22,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {slider.map((img, i) => (
              <div
                key={i}
                className="min-w-52.5 md:min-w-65 h-75 rounded-[22px] overflow-hidden bg-black"
              >
                <img
                  src={img}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
            ))}
          </motion.div>

          {/* STEPS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 text-center">
            {[
              "Strategy & Planning",
              "Design & Development",
              "Launch & Growth",
              "Ongoing Support",
            ].map((text, i) => (
              <div key={i}>
                <p className="text-[#ff7a2f] font-semibold">
                  #{`0${i + 1}`}
                </p>
                <p className="text-zinc-400 text-sm mt-1">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
