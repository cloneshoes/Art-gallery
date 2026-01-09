import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import GalleryGrid from "./components/GalleryGrid";
import ArtworkPage from "./pages/ArtworkPage";
import Navbar from "./components/Navbar";

function App() {
  const location = useLocation();

  return (
    <>
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

export default App;
