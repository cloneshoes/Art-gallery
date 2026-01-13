import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Exhibitions", path: "/exhibitions" },
    { name: "Artists", path: "/artists" },
    { name: "Visit", path: "/visit" }
  ];

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all ${
          scrolled || pathname !== "/"
            ? "bg-black/90 backdrop-blur border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
          
          {/* LOGO */}
          <Link
            to="/"
            className="text-white text-sm tracking-[0.3em] font-light"
          >
            THE DIGITAL CANVAS
          </Link>

          {/* DESKTOP LINKS */}
          <ul className="hidden md:flex gap-10 text-xs uppercase tracking-[0.25em]">
            {links.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`relative pb-1 transition ${
                    pathname === link.path
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {link.name}
                  {pathname === link.path && (
                    <span className="absolute left-0 -bottom-1 w-full h-px bg-white" />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* MOBILE HAMBURGER */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-white text-xl"
          >
            ☰
          </button>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/70 z-40"
            />

            {/* Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4 }}
              className="fixed top-0 right-0 h-full w-3/4 max-w-sm bg-black z-50 p-10 flex flex-col gap-10"
            >
              <button
                onClick={() => setOpen(false)}
                className="self-end text-white text-2xl"
              >
                ×
              </button>

              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className="text-white text-lg tracking-widest uppercase"
                >
                  {link.name}
                </Link>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
