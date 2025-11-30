import Button from '@/components/ui/Button';

export default function FinalCTA() {
  return (
    <section className="py-20 bg-linear-to-br from-[#6A38FF] via-[#4B1BC6] to-[#6A38FF] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Ready to Protect Your Workforce?
        </h2>
        
        <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
          Start with a simple employer plan customized for your workers. 
          Get comprehensive coverage starting at just ₹40–₹60 per worker per month.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="secondary" size="lg" href="/contact">
            Get Employer Pricing
          </Button>
          <Button variant="outline" size="lg" href="/contact" className="bg-white/10 border-white text-white hover:bg-white hover:text-[#6A38FF]">
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
}
