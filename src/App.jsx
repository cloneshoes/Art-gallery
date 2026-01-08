import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import GalleryGrid from "./components/GalleryGrid";
import ArtworkPage from "./pages/ArtworkPage";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <GalleryGrid />
            </>
          }
        />
        <Route path="/artwork/:id" element={<ArtworkPage />} />
      </Routes>
    </>
  );
}
