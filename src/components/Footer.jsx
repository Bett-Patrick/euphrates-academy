import { Link } from "react-router-dom";
import { GraduationCap, MapPin, Phone, Mail, Share2, MessageCircle, Camera, PlayCircle } from "lucide-react";
import { schoolInfo, navLinks } from "../data/content";

export default function Footer() {
  return (
    <footer className="bg-emerald-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <Link to="/" className="flex items-center gap-2.5 mb-4">
            <div className="w-9 h-9 bg-emerald-700 rounded-full flex items-center justify-center">
              <GraduationCap size={20} className="text-white" />
            </div>
            <div>
              <span className="font-display font-bold text-white text-lg leading-none block">Euphrates</span>
              <span className="text-emerald-400 text-[10px] uppercase tracking-widest">Academy</span>
            </div>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed mb-5">
            A premier CBC primary school nurturing holistic learners with strong academic foundations and Christian values.
          </p>
          <div className="flex gap-3">
            {[Share2, MessageCircle, Camera, PlayCircle].map((Icon, i) => (
              <a key={i} href="#" aria-label="Social link" className="w-8 h-8 bg-emerald-800 hover:bg-amber-500 rounded-full flex items-center justify-center transition-colors">
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Quick Links</h3>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="text-gray-400 hover:text-amber-400 text-sm transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Academics */}
        <div>
          <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">CBC Programs</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Pre-Primary (PP1 & PP2)</li>
            <li>Lower Primary (Grades 1–3)</li>
            <li>Upper Primary (Grades 4–6)</li>
            <li className="pt-1"><Link to="/admissions" className="text-amber-400 hover:text-amber-300 transition-colors">Admissions Open →</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Contact Us</h3>
          <ul className="space-y-3">
            <li className="flex gap-2.5 text-sm text-gray-400">
              <MapPin size={15} className="text-emerald-400 mt-0.5 shrink-0" />
              {schoolInfo.address}
            </li>
            <li>
              <a href={`tel:${schoolInfo.phone}`} className="flex gap-2.5 text-sm text-gray-400 hover:text-white transition-colors">
                <Phone size={15} className="text-emerald-400 shrink-0" />
                {schoolInfo.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${schoolInfo.email}`} className="flex gap-2.5 text-sm text-gray-400 hover:text-white transition-colors">
                <Mail size={15} className="text-emerald-400 shrink-0" />
                {schoolInfo.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-emerald-900">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-gray-500">
          <span>© {new Date().getFullYear()} Euphrates Academy. All rights reserved.</span>
          <span>Accredited by the Kenya Ministry of Education · CBC Compliant</span>
        </div>
      </div>
    </footer>
  );
}
