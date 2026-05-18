import Image from "next/image";
import Link from "next/link";
import { Globe, Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-bg-main border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Image
                src="/logo.png"
                alt="Veynox Labs"
                width={160}
                height={48}
                className="object-contain h-12 w-auto"
                style={{ width: "auto" }}
              />
              <span className="font-heading font-bold text-xl tracking-tight text-white">
                Veynox Labs
              </span>
            </Link>
            <p className="text-sm text-text-secondary mb-6">
              Powering smarter businesses with next-generation inventory and
              billing management systems.
            </p>
            <div className="flex gap-4 text-text-secondary">
              <a href="#" className="hover:text-white transition-colors">
                <Globe size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Mail size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Product</h4>
            <ul className="space-y-4 text-sm text-text-secondary">
              <li>
                <Link
                  href="#"
                  className="hover:text-brand-electric transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-brand-electric transition-colors">
                  Integrations
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-brand-electric transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-brand-electric transition-colors">
                  Changelog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-text-secondary">
              <li>
                <Link
                  href="#"
                  className="hover:text-brand-electric transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-brand-electric transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-brand-electric transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-brand-electric transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-text-secondary">
              <li>
                <Link
                  href="#"
                  className="hover:text-brand-electric transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-brand-electric transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-brand-electric transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-text-secondary">
            © {new Date().getFullYear()} Veynox Labs. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-text-secondary">
            <span>Built for scale.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
