import type { Metadata } from 'next';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact Us - Gig Shield',
  description: 'Get in touch with Gig Shield for employer pricing, demos, and insurance solutions for your workforce.',
};

export default function ContactPage() {
  return (
    <main>
      {/* Header with back to home */}
      <nav className="bg-white border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold bg-linear-to-r from-[#6A38FF] to-[#4B1BC6] bg-clip-text text-transparent">
            Gig Shield
          </Link>
          <Link href="/" className="text-gray-600 hover:text-[#6A38FF] transition-colors">
            ← Back to Home
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-linear-to-br from-[#6A38FF] to-[#4B1BC6] text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Let's Get Started</h1>
          <p className="text-xl text-white/90">
            Ready to protect your workforce? We're here to help you find the perfect insurance solution.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8">
                <h2 className="text-3xl font-bold text-[#1E1E1E] mb-6">Send Us a Message</h2>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6A38FF] focus:border-transparent outline-none transition-all"
                        placeholder="John"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6A38FF] focus:border-transparent outline-none transition-all"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6A38FF] focus:border-transparent outline-none transition-all"
                      placeholder="john.doe@company.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6A38FF] focus:border-transparent outline-none transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6A38FF] focus:border-transparent outline-none transition-all"
                      placeholder="Your Company"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="workerCount" className="block text-sm font-semibold text-gray-700 mb-2">
                      Number of Workers
                    </label>
                    <select
                      id="workerCount"
                      name="workerCount"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6A38FF] focus:border-transparent outline-none transition-all"
                    >
                      <option>Select range</option>
                      <option>1-50</option>
                      <option>51-200</option>
                      <option>201-500</option>
                      <option>501-1000</option>
                      <option>1000+</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="industry" className="block text-sm font-semibold text-gray-700 mb-2">
                      Industry
                    </label>
                    <select
                      id="industry"
                      name="industry"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6A38FF] focus:border-transparent outline-none transition-all"
                    >
                      <option>Select industry</option>
                      <option>Logistics & Delivery</option>
                      <option>Housekeeping</option>
                      <option>Manpower Supply</option>
                      <option>Construction</option>
                      <option>Retail Staffing</option>
                      <option>On-Demand Platforms</option>
                      <option>Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6A38FF] focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Tell us about your insurance needs..."
                    />
                  </div>
                  
                  <Button type="submit" variant="primary" size="lg" className="w-full">
                    Submit Request
                  </Button>
                </form>
              </Card>
            </div>
            
            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-xl font-bold text-[#1E1E1E] mb-4">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#6A38FF] mt-1" />
                    <div>
                      <p className="font-semibold text-gray-700">Email</p>
                      <a href="mailto:contact@gig-shield.com" className="text-[#6A38FF] hover:underline">
                        contact@gig-shield.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#6A38FF] mt-1" />
                    <div>
                      <p className="font-semibold text-gray-700">Phone</p>
                      <p className="text-gray-600">Available on request</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#6A38FF] mt-1" />
                    <div>
                      <p className="font-semibold text-gray-700">Location</p>
                      <p className="text-gray-600">India</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#6A38FF] mt-1" />
                    <div>
                      <p className="font-semibold text-gray-700">Business Hours</p>
                      <p className="text-gray-600">Mon-Fri: 9:00 AM - 6:00 PM</p>
                      <p className="text-gray-600">Sat: 10:00 AM - 2:00 PM</p>
                    </div>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 bg-linear-to-br from-[#6A38FF] to-[#4B1BC6] text-white">
                <h3 className="text-xl font-bold mb-3">Quick Response</h3>
                <p className="text-white/90 mb-4">
                  We typically respond to all inquiries within 24 hours during business days.
                </p>
                <div className="bg-white/20 rounded-lg p-4">
                  <p className="text-sm font-semibold">Average response time:</p>
                  <p className="text-2xl font-bold text-[#FFC700]">4 hours</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
