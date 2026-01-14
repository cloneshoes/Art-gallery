import { useParams, useNavigate } from "react-router-dom";
import PageTransition from "../components/PageTransition";

const artists = [
  {
    id: 1,
    name: "Jane Doe",
    role: "Contemporary Painter",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80",
    bio:
      "Jane Doe explores color, emotion, and abstraction through large-scale modern paintings.",
    statement:
      "My work investigates how emotion lives inside color and space."
  },
  {
    id: 2,
    name: "John Smith",
    role: "Digital Artist",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80",
    bio:
      "John Smith blends technology and minimalism to create immersive digital works.",
    statement:
      "Digital space is the new canvas."
  },
  {
    id: 3,
    name: "Anna Lee",
    role: "Sculptor",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
    bio:
      "Anna Lee works with modern materials to explore balance and form.",
    statement:
      "Sculpture is frozen movement."
  }
];

export default function ArtistPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const artist = artists.find((a) => a.id === Number(id));

  if (!artist) {
    return (
      <section className="min-h-screen bg-black text-white flex items-center justify-center">
        Artist not found
      </section>
    );
  }

  return (
    <PageTransition>
      <section className="min-h-screen bg-black text-white pt-32 px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-start">
          
          {/* Image */}
          <img
            src={artist.image}
            alt={artist.name}
            className="w-full h-[520px] object-cover"
          />

          {/* Info */}
          <div>
            <h1 className="text-4xl tracking-[0.3em] mb-4">
              {artist.name}
            </h1>
            <p className="uppercase tracking-widest text-gray-400 mb-10">
              {artist.role}
            </p>

            <p className="text-sm text-gray-400 leading-relaxed mb-8">
              {artist.bio}
            </p>

            <blockquote className="border-l border-white/30 pl-6 italic text-sm mb-12">
              “{artist.statement}”
            </blockquote>

            <button
              onClick={() => navigate(-1)}
              className="border px-8 py-4 text-xs tracking-[0.3em] hover:bg-white hover:text-black transition"
            >
              BACK
            </button>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
