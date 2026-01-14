import PageTransition from "../components/PageTransition";
import { useNavigate } from "react-router-dom";

const artists = [
    
  {
    id: 1,
    name: "Jane Doe",
    role: "Contemporary Painter",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    bio: "Exploring color, emotion, and form through modern abstraction."
  },
  {
    id: 2,
    name: "John Smith",
    role: "Digital Artist",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    bio: "Minimalist digital compositions blending art and technology."
  },
  {
    id: 3,
    name: "Anna Lee",
    role: "Sculptor",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
    bio: "Modern sculptures focused on balance, structure, and space."
  }
];

export default function Artists() {
    const navigate = useNavigate();

  return (
    <PageTransition>
      <section className="min-h-screen bg-black text-white pt-32 px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="mb-20 max-w-2xl">
            <h1 className="text-4xl tracking-[0.3em] mb-6">
              ARTISTS
            </h1>
            <p className="text-gray-400 text-sm leading-relaxed">
              Discover the creatives behind the works featured in our digital
              exhibitions.
            </p>
          </div>

          {/* Artists Grid */}
          <div className="grid md:grid-cols-3 gap-12">
            {artists.map((artist) => (
              <div
                key={artist.id}
  onClick={() => navigate(`/artists/${artist.id}`)}
  className="group cursor-pointer"
              >
                {/* Image */}
                <div className="overflow-hidden mb-6">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="w-full h-[420px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Text */}
                <h2 className="text-lg tracking-widest mb-1">
                  {artist.name}
                </h2>
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">
                  {artist.role}
                </p>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {artist.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
