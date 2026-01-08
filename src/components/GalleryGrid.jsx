import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import FilterSidebar from "./FilterSidebar";
import { useFilter } from "../context/FilterContext";
import { getArtworks } from "../api/artworks";
import GallerySkeleton from "./GallerySkeleton";

export default function GalleryGrid() {
  const navigate = useNavigate();
  const { medium, maxPrice } = useFilter();

  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getArtworks().then((data) => {
      setArtworks(data);
      setLoading(false);
    });
  }, []);

  const filtered = artworks.filter(
    (art) =>
      (medium === "all" || art.medium.toLowerCase().includes(medium)) &&
      art.price <= maxPrice
  );

  if (loading) {
  return (
    <section className="bg-[#0e0e0e] py-24">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-[250px_1fr] gap-16">
        <FilterSidebar />
        <GallerySkeleton />
      </div>
    </section>
  );
}

  return (
    <section className="bg-[#0e0e0e] py-24 text-white">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-[250px_1fr] gap-16">
        
        {/* Sidebar */}
        <FilterSidebar />

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-3 gap-10 space-y-10">
          {filtered.map((art) => (
            <div
              key={art.id}
              onClick={() => navigate(`/artwork/${art.id}`)}
              className="relative break-inside-avoid cursor-pointer group overflow-hidden"
            >
              <img
                src={art.image}
                alt={art.artist}
                loading="lazy"
                decoding="async"
                className="w-full block object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-6">
                <div className="text-xs tracking-widest transform translate-y-3 group-hover:translate-y-0 transition">
                  <p>{art.artist}</p>
                  <p className="text-gray-400">{art.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
