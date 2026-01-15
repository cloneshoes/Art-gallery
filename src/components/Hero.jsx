import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import heroImage from "../assets/hero.jpg";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen overflow-hidden">
      
      {/* Background image */}
      <img
        src={heroImage}
        alt="Gallery hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex items-center justify-center min-h-screen px-6 text-center text-white"
      >
        <div>
          <h1 className="text-4xl md:text-6xl font-light mb-6">
            Curated Contemporary Art
          </h1>

          <p className="text-gray-300 max-w-xl mx-auto mb-10">
            Discover works from emerging and established artists around the world.
          </p>

          <button
            onClick={() =>
    document
      .getElementById("gallery")
      ?.scrollIntoView({ behavior: "smooth" })
  }
  className="inline-block border border-white/40 px-10 py-4 text-sm tracking-widest uppercase hover:bg-white hover:text-black transition"
>
            Explore Collection
          </button>
        </div>
      </motion.div>
    </section>
  );
}
