import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import { getArtworkById } from "../api/artworks"; // Use the specific fetcher

export default function ArtworkPage() {
  const { id } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();

  // Use state if passed from the gallery, otherwise null
  const [artwork, setArtwork] = useState(state || null);
  const [loading, setLoading] = useState(!state);

  useEffect(() => {
    // If we arrived here via a Link that passed state, don't fetch again
    if (state) return;

    // Use the specific ID fetcher instead of searching the main list
    async function loadArtwork() {
      setLoading(true);
      const data = await getArtworkById(id);
      setArtwork(data);
      setLoading(false);
    }

    loadArtwork();
  }, [id, state]);

  /* ---------- SKELETON (No changes needed, looks great) ---------- */
  if (loading) {
    return (
      <section className="min-h-screen bg-black pt-24 px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          <div className="h-[500px] bg-zinc-800 animate-pulse" />
          <div className="space-y-6">
            <div className="h-8 w-2/3 bg-zinc-800 animate-pulse" />
            <div className="h-4 w-1/3 bg-zinc-800 animate-pulse" />
            <div className="h-4 w-1/4 bg-zinc-800 animate-pulse" />
          </div>
        </div>
      </section>
    );
  }

  /* ---------- NOT FOUND ---------- */
  if (!artwork) {
    return (
      <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-6">
        <p className="text-xl font-light tracking-widest">ARTWORK NOT FOUND</p>
        <button
          onClick={() => navigate("/")}
          className="border border-white/30 px-6 py-3 text-sm tracking-widest hover:bg-white hover:text-black transition"
        >
          BACK TO GALLERY
        </button>
      </section>
    );
  }

  /* ---------- PAGE ---------- */
  return (
    <PageTransition>
      <section className="min-h-screen bg-black text-white pt-24 pb-12 px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          
          {/* Image Container */}
          <div className="overflow-hidden bg-zinc-900">
             <motion.img
                src={artwork.image}
                alt={artwork.title} // Changed from artwork.artist for better accessibility
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full h-auto object-cover"
              />
          </div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-4xl font-light mb-2 leading-tight">
              {artwork.description || artwork.title} 
            </h1>
            <p className="text-xl text-zinc-400 mb-6 italic">
              {artwork.artist}
            </p>

            <div className="space-y-4 border-t border-zinc-800 pt-6">
              <div className="flex justify-between">
                <span className="text-zinc-500 text-xs tracking-widest uppercase">Year</span>
                <span className="text-sm">{artwork.year}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500 text-xs tracking-widest uppercase">Medium</span>
                <span className="text-sm text-right max-w-[200px]">{artwork.medium}</span>
              </div>
              <div className="flex justify-between items-center pt-4">
                <span className="text-zinc-500 text-xs tracking-widest uppercase">Price</span>
                <span className="text-2xl font-semibold">${artwork.price.toLocaleString()}</span>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
               <button
                onClick={() => navigate(-1)}
                className="flex-1 border border-zinc-700 px-6 py-4 text-xs tracking-[0.2em] hover:bg-white hover:text-black transition duration-500"
              >
                BACK
              </button>
              <button className="flex-[2] bg-white text-black px-6 py-4 text-xs tracking-[0.2em] hover:bg-zinc-200 transition duration-500">
                INQUIRE
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}