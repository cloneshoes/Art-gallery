import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";


export default function ArtworkModal({ artwork, onClose }) {
  if (!artwork) return null;

  return (
    <PageTransition>
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
        className="bg-[#111] max-w-4xl w-full mx-6 p-6 relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          ✕
        </button>

        <img
          src={artwork.image}
          alt={artwork.artist}
          className="w-full max-h-[70vh] object-contain"
        />

        <div className="mt-4 text-white text-sm tracking-widest">
          <p>{artwork.artist}</p>
          <p className="text-gray-400">{artwork.year}</p>
          <p className="mt-2 text-gray-500 uppercase">{artwork.medium}</p>
          <p className="mt-1">${artwork.price}</p>
        </div>
      </motion.div>
    </div>
    </PageTransition>
  );
}
