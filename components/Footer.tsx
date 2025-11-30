import { Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#1E1E1E] text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-2">
            <h3 className="text-3xl font-bold mb-4 bg-linear-to-r from-[#6A38FF] to-[#FFC700] bg-clip-text text-transparent">
              Gig Shield
            </h3>
            <p className="text-gray-400 mb-4">
              Affordable insurance coverage for gig workers, contract labour, and blue-collar workforce.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/" className="hover:text-[#FFC700] transition-colors">Home</Link></li>
              <li><Link href="/contact" className="hover:text-[#FFC700] transition-colors">Get Pricing</Link></li>
              <li><Link href="/contact" className="hover:text-[#FFC700] transition-colors">Book Demo</Link></li>
              <li><Link href="/contact" className="hover:text-[#FFC700] transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-[#FFC700]" />
                <a href="mailto:contact@gig-shield.com" className="hover:text-[#FFC700] transition-colors">
                  contact@gig-shield.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#FFC700]" />
                <span>India</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Gig Shield. All rights reserved.
          </p>
          
          {/* Social Links */}
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#6A38FF] transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#6A38FF] transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#6A38FF] transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#6A38FF] transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
