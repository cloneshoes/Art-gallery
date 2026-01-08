import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArtworkById } from "../api/artworks";

export default function ArtworkPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [artwork, setArtwork] = useState(null);

  useEffect(() => {
    getArtworkById(id).then(setArtwork);
  }, [id]);

  if (!artwork) {
    return (
      <div className="min-h-screen bg-[#0e0e0e] text-white flex items-center justify-center">
        Loading artwork...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-white px-8 py-24 max-w-6xl mx-auto">
      <button
        onClick={() => navigate(-1)}
        className="mb-10 text-sm tracking-widest text-gray-400 hover:text-white"
      >
        ← Back to gallery
      </button>

      <div className="grid md:grid-cols-2 gap-16">
        <img
          src={artwork.image}
          alt={artwork.artist}
          className="w-full object-cover"
        />

        <div>
          <h1 className="text-3xl tracking-widest mb-4">
            {artwork.artist}
          </h1>

          <p className="text-gray-400 mb-2">{artwork.year}</p>
          <p className="mb-6">{artwork.medium}</p>

          <p className="text-lg mb-6">${artwork.price}</p>

          <p className="text-gray-400 leading-relaxed">
            {artwork.description}
          </p>
        </div>
      </div>
    </div>
  );
}
