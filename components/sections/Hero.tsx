import Image from 'next/image';
import Button from '@/components/ui/Button';

export default function Hero() {
  return (
    <section className="relative bg-linear-to-br from-[#6A38FF] via-[#4B1BC6] to-[#6A38FF] text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Affordable Insurance for Gig & Contract Workers
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Protect your workforce with low-cost accident and medical reimbursement coverage. 
              Simple onboarding, real-time support, and fast WhatsApp-based claims.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="secondary" size="lg" href="/contact">
                Get Employer Pricing
              </Button>
              <Button variant="outline" size="lg" href="/contact" className="bg-white/10 border-white text-white hover:bg-white hover:text-[#6A38FF]">
                Book a Demo
              </Button>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative h-[400px] md:h-[500px]">
            <div className="absolute inset-0 bg-white/10 rounded-3xl backdrop-blur-sm flex items-center justify-center">
              <Image
                src="/Hero section.png"
                alt="Gig workers and contract labor workforce"
                fill
                className="object-cover rounded-3xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
