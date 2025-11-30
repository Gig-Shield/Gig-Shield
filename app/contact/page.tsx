'use client';

import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    workerCount: '',
    industry: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Client-side validation
    if (!formData.firstName || !formData.email || !formData.message) {
      setSubmitStatus({
        type: 'error',
        message: 'Please fill in all required fields (First Name, Email, and Message)'
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus({
        type: 'error',
        message: 'Please enter a valid email address'
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      // Success
      setSubmitStatus({
        type: 'success',
        message: data.message || 'Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.'
      });

      // Clear form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        workerCount: '',
        industry: '',
        message: ''
      });

      // Scroll to success message
      window.scrollTo({ top: 0, behavior: 'smooth' });

    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Something went wrong. Please try again or contact us directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (submitStatus.type === 'error') {
      setSubmitStatus({ type: null, message: '' });
    }
  };

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
      <section className="py-16 bg-linear-to-br from-[#6A38FF] to-[#4B1BC6]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get Your Free Quote Today
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Protect your gig workers with affordable insurance starting at ₹40/month. 
            Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Status Messages */}
      {submitStatus.type && (
        <div className="max-w-7xl mx-auto px-6 pt-8">
          <div className={`p-4 rounded-lg flex items-start gap-3 ${
            submitStatus.type === 'success' 
              ? 'bg-green-50 border border-green-200' 
              : 'bg-red-50 border border-red-200'
          }`}>
            {submitStatus.type === 'success' ? (
              <CheckCircle className="w-6 h-6 text-green-600 shrink-0 mt-0.5" />
            ) : (
              <AlertCircle className="w-6 h-6 text-red-600 shrink-0 mt-0.5" />
            )}
            <div>
              <p className={`font-semibold ${
                submitStatus.type === 'success' ? 'text-green-900' : 'text-red-900'
              }`}>
                {submitStatus.type === 'success' ? 'Success!' : 'Error'}
              </p>
              <p className={submitStatus.type === 'success' ? 'text-green-800' : 'text-red-800'}>
                {submitStatus.message}
              </p>
            </div>
          </div>
        </div>
      )}

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <h2 className="text-2xl font-bold text-[#1E1E1E] mb-6">Request a Quote</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Name Fields */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6A38FF] focus:border-transparent outline-none transition-all"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6A38FF] focus:border-transparent outline-none transition-all"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  {/* Email and Phone */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6A38FF] focus:border-transparent outline-none transition-all"
                        placeholder="john@company.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6A38FF] focus:border-transparent outline-none transition-all"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6A38FF] focus:border-transparent outline-none transition-all"
                      placeholder="Your Company Pvt Ltd"
                    />
                  </div>

                  {/* Worker Count and Industry */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="workerCount" className="block text-sm font-semibold text-gray-700 mb-2">
                        Number of Workers
                      </label>
                      <select
                        id="workerCount"
                        name="workerCount"
                        value={formData.workerCount}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6A38FF] focus:border-transparent outline-none transition-all"
                      >
                        <option value="">Select range</option>
                        <option value="1-50">1-50 workers</option>
                        <option value="51-200">51-200 workers</option>
                        <option value="201-500">201-500 workers</option>
                        <option value="500+">500+ workers</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="industry" className="block text-sm font-semibold text-gray-700 mb-2">
                        Industry
                      </label>
                      <select
                        id="industry"
                        name="industry"
                        value={formData.industry}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6A38FF] focus:border-transparent outline-none transition-all"
                      >
                        <option value="">Select industry</option>
                        <option value="Logistics & Delivery">Logistics & Delivery</option>
                        <option value="Housekeeping & Facility Management">Housekeeping & Facility Management</option>
                        <option value="Manpower Staffing">Manpower Staffing</option>
                        <option value="Construction & Infrastructure">Construction & Infrastructure</option>
                        <option value="Retail Staffing">Retail Staffing</option>
                        <option value="On-Demand Platforms">On-Demand Platforms</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6A38FF] focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Tell us about your insurance needs, number of workers, and any specific requirements..."
                    />
                  </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    variant="primary" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending Message...
                      </>
                    ) : (
                      'Get Your Free Quote'
                    )}
                  </Button>

                  <p className="text-sm text-gray-600 text-center">
                    By submitting this form, you agree to be contacted by Gig Shield regarding your inquiry.
                  </p>
                </form>
              </Card>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              
              {/* Contact Details */}
              <Card>
                <h3 className="text-xl font-bold text-[#1E1E1E] mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#6A38FF] shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <a href="mailto:contact@gig-shield.com" className="text-[#6A38FF] hover:underline">
                        contact@gig-shield.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#6A38FF] shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Phone</p>
                      <a href="tel:+919876543210" className="text-[#6A38FF] hover:underline">
                        +91 98765 43210
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#6A38FF] shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Location</p>
                      <p className="text-gray-600">India</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#6A38FF] shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Business Hours</p>
                      <p className="text-gray-600">Mon-Fri: 9:00 AM - 6:00 PM IST</p>
                      <p className="text-gray-600">Sat: 10:00 AM - 2:00 PM IST</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Quick Response */}
              <Card className="bg-linear-to-br from-[#6A38FF] to-[#4B1BC6]">
                <div className="text-white">
                  <h3 className="text-xl font-bold mb-2">⚡ Quick Response Guaranteed</h3>
                  <p className="text-white/90 text-sm mb-4">
                    We understand your time is valuable. Our team responds to all inquiries within 24 hours during business days.
                  </p>
                  <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                    <p className="text-[#FFC700] font-semibold text-sm">Average Response Time: 4 hours</p>
                  </div>
                </div>
              </Card>

              {/* WhatsApp CTA */}
              <Card className="bg-[#25D366] text-white">
                <h3 className="text-xl font-bold mb-2">💬 Prefer WhatsApp?</h3>
                <p className="text-white/90 text-sm mb-4">
                  Get instant responses to your questions on WhatsApp
                </p>
                <a 
                  href="https://wa.me/916362665904?text=Hi%20Gig%20Shield!%20I'm%20interested%20in%20getting%20insurance%20for%20my%20gig%20workers.%20I%20need%20coverage%20for%20approximately%20___%20workers.%20Can%20you%20please%20provide%20me%20with%20pricing%20and%20details?" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full bg-white text-[#25D366] text-center py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Chat on WhatsApp
                </a>
              </Card>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
