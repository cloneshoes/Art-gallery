import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import GalleryGrid from "./components/GalleryGrid";
import ArtworkPage from "./pages/ArtworkPage";
import Navbar from "./components/Navbar";

/* Simple placeholder pages */
function Placeholder({ title }) {
  return (
    <section className="min-h-screen bg-black text-white pt-32 px-8">
      <h1 className="text-3xl tracking-widest">{title}</h1>
    </section>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <>
      {/* NAVBAR ALWAYS ON TOP */}
      <Navbar />

      {/* PAGE TRANSITIONS */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {/* MAIN GALLERY */}
          <Route path="/" element={<GalleryGrid />} />

          {/* ARTWORK DETAILS */}
          <Route path="/artwork/:id" element={<ArtworkPage />} />

          {/* NAVBAR ROUTES */}
          <Route
            path="/exhibitions"
            element={<Placeholder title="Exhibitions" />}
          />
          <Route
            path="/artists"
            element={<Placeholder title="Artists" />}
          />
          <Route
            path="/visit"
            element={<Placeholder title="Visit Us" />}
          />
        </Routes>
      </AnimatePresence>
    </>
  );
}
