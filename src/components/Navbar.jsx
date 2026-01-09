export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
        {/* Logo */}
       <h1 className="text-white text-sm tracking-[0.3em] font-light">
  THE DIGITAL CANVAS
</h1>

        {/* Links */}
        <ul className="hidden md:flex gap-10 text-xs text-gray-300 uppercase tracking-[0.25em]">
          <li className="hover:text-white cursor-pointer">Exhibitions</li>
          <li className="hover:text-white cursor-pointer">Artists</li>
          <li className="hover:text-white cursor-pointer">Shop</li>
          <li className="hover:text-white cursor-pointer">Visit</li>
        </ul>
      </div>
    </nav>
  );
}
