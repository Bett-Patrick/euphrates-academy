import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, GraduationCap, Phone } from "lucide-react";
import { navLinks, schoolInfo } from "../data/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
        }`}
      >
        {/* Top bar */}
        <div className="bg-emerald-800 text-white text-xs py-1.5 hidden md:block">
          <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
            <span>Admissions Open — 2025 Academic Year</span>
            <a href={`tel:${schoolInfo.phone}`} className="flex items-center gap-1.5 hover:text-amber-300 transition-colors">
              <Phone size={12} />
              {schoolInfo.phone}
            </a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 bg-emerald-700 rounded-full flex items-center justify-center shadow-sm group-hover:bg-emerald-800 transition-colors">
              <GraduationCap size={20} className="text-white" />
            </div>
            <div>
              <span className="font-display font-bold text-emerald-900 text-lg leading-none block">Euphrates</span>
              <span className="text-emerald-600 text-[10px] font-medium uppercase tracking-widest leading-none">Academy</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? "text-emerald-700 bg-emerald-50"
                    : "text-gray-600 hover:text-emerald-700 hover:bg-emerald-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <Link
              to="/admissions"
              className="hidden md:inline-flex items-center gap-1.5 bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors shadow-sm"
            >
              Apply Now
            </Link>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100 transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={open}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl" role="dialog" aria-label="Mobile navigation">
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? "text-emerald-700 bg-emerald-50"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/admissions"
                className="block mt-2 px-4 py-3 bg-emerald-700 text-white text-sm font-semibold rounded-lg text-center hover:bg-emerald-800 transition-colors"
              >
                Apply for Admission
              </Link>
              <a
                href={`tel:${schoolInfo.phone}`}
                className="block px-4 py-3 text-sm text-gray-500 text-center"
              >
                📞 {schoolInfo.phone}
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
