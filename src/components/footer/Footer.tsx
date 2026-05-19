import Link from "next/link";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-bg-main pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-brand-electric/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="font-heading font-bold text-2xl tracking-tight text-white">
                Veynox Labs
              </span>
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed mb-6">
              Modern digital solutions company specializing in premium websites, landing pages, and UI/UX design for startups and modern businesses.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="#services" className="text-text-secondary hover:text-brand-electric transition-colors">Business Landing Pages</Link></li>
              <li><Link href="#services" className="text-text-secondary hover:text-brand-electric transition-colors">Startup Websites</Link></li>
              <li><Link href="#services" className="text-text-secondary hover:text-brand-electric transition-colors">Portfolio Websites</Link></li>
              <li><Link href="#services" className="text-text-secondary hover:text-brand-electric transition-colors">UI/UX Design</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="#portfolio" className="text-text-secondary hover:text-brand-electric transition-colors">Featured Work</Link></li>
              <li><Link href="#process" className="text-text-secondary hover:text-brand-electric transition-colors">Our Process</Link></li>
              <li><Link href="#why-us" className="text-text-secondary hover:text-brand-electric transition-colors">Why Choose Us</Link></li>
              <li><Link href="#testimonials" className="text-text-secondary hover:text-brand-electric transition-colors">Testimonials</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="text-brand-neon shrink-0 mt-0.5" size={16} />
                <a href="mailto:veynoxlabs@gmail.com" className="text-text-secondary hover:text-white transition-colors">veynoxlabs@gmail.com</a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="text-brand-electric shrink-0 mt-0.5" size={16} />
                <div className="flex flex-col gap-1 text-text-secondary">
                  <a href="tel:+94772253533" className="hover:text-white transition-colors">+94 77 225 3533</a>
                  <a href="tel:+94764635866" className="hover:text-white transition-colors">+94 76 463 5866</a>
                  <a href="tel:+94757030645" className="hover:text-white transition-colors">+94 75 703 0645</a>
                </div>
              </li>
              <li className="flex items-start gap-3 mt-2">
                <div className="text-brand-electric font-semibold shrink-0 mt-0.5 text-xs bg-brand-electric/10 px-1.5 py-0.5 rounded">WA</div>
                <a href="https://wa.me/94772253533" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-white transition-colors">
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>
          
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-secondary text-sm">
            © {new Date().getFullYear()} Veynox Labs. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="#" className="text-text-secondary hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-text-secondary hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
