import { motion } from "framer-motion";

export default function Hero() {
  return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1504198453319-5ce911bafcde?w=1600&auto=format&fit=crop"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-4xl px-6 text-center"
      >
        <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-6">
          Curated Contemporary Art
        </h1>

        <p className="text-gray-400 max-w-xl mx-auto mb-10 leading-relaxed">
          Discover works from emerging and established artists around the world.
        </p>

        <a
          href="#gallery"
          className="inline-block border border-white/30 px-10 py-4 text-sm tracking-widest uppercase hover:bg-white hover:text-black transition"
        >
          Explore Collection
        </a>
      </motion.div>
    </section>
  );
}
