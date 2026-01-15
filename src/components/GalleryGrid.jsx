import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import FilterSidebar from "./FilterSidebar";
import { useFilter } from "../context/FilterContext";
import { getArtworks } from "../api/artworks";
import GallerySkeleton from "./GallerySkeleton";
import Hero from "./Hero";

export default function GalleryGrid() {
  const navigate = useNavigate();
  const { medium, maxPrice } = useFilter();

  const [artworks, setArtworks] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    loadArtworks();
  }, [page]);

  function loadArtworks() {
    if (!hasMore) return;

    setLoading(true);
    getArtworks(page).then((data) => {
      const valid = data.filter((a) => a.image);

      setArtworks((prev) => [...prev, ...valid]);
      setHasMore(valid.length > 0);
      setLoading(false);
    });
  }

  useEffect(() => {
    const onScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 400 &&
        !loading &&
        hasMore
      ) {
        setPage((p) => p + 1);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [loading, hasMore]);

  const filtered = artworks.filter(
    (art) =>
      (medium === "all" ||
        art.medium.toLowerCase().includes(medium)) &&
      art.price <= maxPrice
  );

  return (
    <>
      <Hero />

      <section id="gallery" className="min-h-screen bg-[#0e0e0e] pt-24 text-white">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-[250px_1fr] gap-16">
          <FilterSidebar />

          <div className="columns-1 md:columns-3 gap-10 space-y-10">
            {filtered.map((art) => (
              <div
    key={art.id}   // ✅ MUST be unique
    onClick={() => navigate(`/artwork/${art.id}`, { state: art })}
    className="relative break-inside-avoid cursor-pointer group overflow-hidden"
  >
                <img
                  src={art.image}
                  alt={art.artist}
                  className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ))}

            {/* Loader at bottom */}
            {loading && <GallerySkeleton />}
          </div>
        </div>

        {!hasMore && (
          <p className="text-center text-gray-500 text-sm mt-16">
            No more artworks
          </p>
        )}
      </section>
    </>
  );
}
