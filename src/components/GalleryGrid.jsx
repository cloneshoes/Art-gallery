import { useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import FilterSidebar from "./FilterSidebar";
import { useFilter } from "../context/FilterContext";
import { getArtworks } from "../api/artworks";
import GallerySkeleton from "./GallerySkeleton";
import Hero from "./Hero";
import PageTransition from "./PageTransition";

const PAGE_SIZE = 9;

export default function GalleryGrid() {
  const navigate = useNavigate();
  const { medium, maxPrice } = useFilter();

  const [allArtworks, setAllArtworks] = useState([]);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [loading, setLoading] = useState(true);

  const loadMoreRef = useRef(null);

  useEffect(() => {
    getArtworks().then((data) => {
      setAllArtworks(data);
      setLoading(false);
    });
  }, []);

  // Reset pagination when filters change
  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [medium, maxPrice]);

  const filtered = allArtworks.filter(
    (art) =>
      (medium === "all" ||
        art.medium.toLowerCase().includes(medium)) &&
      art.price <= maxPrice
  );

  const visibleArtworks = filtered.slice(0, visibleCount);

  // Infinite scroll observer
  useEffect(() => {
    if (!loadMoreRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleCount((prev) =>
            Math.min(prev + PAGE_SIZE, filtered.length)
          );
        }
      },
      { threshold: 1 }
    );

    observer.observe(loadMoreRef.current);
    return () => observer.disconnect();
  }, [filtered.length]);

  return (
    <PageTransition>
      {/* HERO */}
      <Hero />

      {/* GALLERY */}
      <section className="min-h-screen bg-[#0e0e0e] pt-24 text-white">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-[250px_1fr] gap-16">
          <FilterSidebar />

          {loading ? (
            <GallerySkeleton />
          ) : (
            <div className="columns-1 md:columns-3 gap-10 space-y-10">
              {visibleArtworks.map((art) => (
                <div
                  key={art.id}
                  onClick={() =>
                    navigate(`/artwork/${art.id}`, {
                      state: art
                    })
                  }
                  className="relative break-inside-avoid cursor-pointer group overflow-hidden"
                >
                 <img
  src={art.image}
  alt={art.artist}
  loading="lazy"
  referrerPolicy="no-referrer"
  onError={(e) => {
    e.currentTarget.src =
      "https://via.placeholder.com/800x1000?text=Artwork+Unavailable";
  }}
  className="w-full object-cover"
/>


                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-end p-6">
                    <div className="text-xs tracking-widest">
                      <p>{art.artist}</p>
                      <p className="text-gray-400">
                        {art.year}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Infinite scroll trigger */}
              <div ref={loadMoreRef} />
            </div>
          )}
        </div>
      </section>
    </PageTransition>
  );
}
