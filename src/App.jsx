import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import GalleryGrid from "./components/GalleryGrid";
import ArtworkPage from "./pages/ArtworkPage";
import Navbar from "./components/Navbar";

export default function App() {
  const location = useLocation();

  return (
    <>
      {/* NAVBAR MUST BE HERE */}
      <Navbar />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<GalleryGrid />} />
          <Route path="/artwork/:id" element={<ArtworkPage />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}
