import { useParams, useNavigate } from "react-router-dom";
import PageTransition from "../components/PageTransition";

const exhibitions = [
  {
    id: 1,
    title: "Fragments of Reality",
    date: "March – June 2025",
    image:
      "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=1400&q=80",
    description:
      "Fragments of Reality explores perception, memory, and abstraction through contemporary digital works.",
    curatorial:
      "This exhibition brings together artists who question the boundaries between reality and imagination."
  },
  {
    id: 2,
    title: "Modern Forms",
    date: "July – September 2025",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80",
    description:
      "Modern Forms examines structure, material, and balance in contemporary art.",
    curatorial:
      "Artists reimagine form through sculpture, digital installations, and mixed media."
  },
  {
    id: 3,
    title: "The New Minimal",
    date: "October – December 2025",
    image:
      "https://images.unsplash.com/photo-1495567720989-cebdbdd97913?auto=format&fit=crop&w=1400&q=80",
    description:
      "The New Minimal focuses on reduction, clarity, and modern aesthetics.",
    curatorial:
      "A quiet yet powerful exploration of simplicity in modern artistic practice."
  }
];

export default function ExhibitionPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const exhibition = exhibitions.find(
    (e) => e.id === Number(id)
  );

  if (!exhibition) {
    return (
      <section className="min-h-screen bg-black text-white flex items-center justify-center">
        Exhibition not found
      </section>
    );
  }

  return (
    <PageTransition>
      <section className="min-h-screen bg-black text-white pt-32 px-8">
        <div className="max-w-6xl mx-auto space-y-20">

          {/* Hero Image */}
          <img
            src={exhibition.image}
            alt={exhibition.title}
            className="w-full h-[520px] object-cover"
          />

          {/* Content */}
          <div className="max-w-3xl">
            <h1 className="text-4xl tracking-[0.3em] mb-4">
              {exhibition.title}
            </h1>
            <p className="uppercase tracking-widest text-gray-400 mb-10">
              {exhibition.date}
            </p>

            <p className="text-sm text-gray-400 leading-relaxed mb-8">
              {exhibition.description}
            </p>

            <blockquote className="border-l border-white/30 pl-6 italic text-sm mb-12">
              {exhibition.curatorial}
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
