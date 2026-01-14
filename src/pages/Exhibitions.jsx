import PageTransition from "../components/PageTransition";
import { useNavigate } from "react-router-dom";

const exhibitions = [
  {
    id: 1,
    title: "Fragments of Reality",
    date: "March – June 2025",
    image:
      "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=1200&q=80",
    description:
      "A digital exploration of perception, memory, and abstraction."
  },
  {
    id: 2,
    title: "Modern Forms",
    date: "July – September 2025",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    description:
      "Contemporary works redefining structure, balance, and material."
  },
  {
    id: 3,
    title: "The New Minimal",
    date: "October – December 2025",
    image:
      "https://images.unsplash.com/photo-1495567720989-cebdbdd97913?auto=format&fit=crop&w=1200&q=80",
    description:
      "Minimalist digital and physical art for a new generation."
  }
];

export default function Exhibitions() {
    const navigate = useNavigate();
  return (
    <PageTransition>
      <section className="min-h-screen bg-black text-white pt-32 px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Page Header */}
          <div className="mb-20 max-w-2xl">
            <h1 className="text-4xl tracking-[0.3em] mb-6">
              EXHIBITIONS
            </h1>
            <p className="text-gray-400 text-sm leading-relaxed">
              Curated digital exhibitions showcasing contemporary and emerging
              artists from around the world.
            </p>
          </div>

          {/* Exhibitions Grid */}
          <div className="grid md:grid-cols-3 gap-12">
            {exhibitions.map((exhibit) => (
              <div
  key={exhibit.id}
  onClick={() => navigate(`/exhibitions/${exhibit.id}`)}
  className="group cursor-pointer"
>
                {/* Image */}
                <div className="overflow-hidden mb-6">
                  <img
                    src={exhibit.image}
                    alt={exhibit.title}
                    className="w-full h-[420px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Text */}
                <h2 className="text-lg tracking-widest mb-2">
                  {exhibit.title}
                </h2>
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-3">
                  {exhibit.date}
                </p>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {exhibit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
