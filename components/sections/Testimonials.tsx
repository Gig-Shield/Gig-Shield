import { Quote } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Gig Shield helped us insure over 800 workers with zero hassle. The onboarding was incredibly smooth and our workers appreciate the coverage.",
      author: "Rajesh Kumar",
      position: "Operations Director",
      company: "Metro Logistics Solutions"
    },
    {
      quote: "Claims were processed quickly and our workers trust the system. The WhatsApp-based process makes everything so much easier for everyone.",
      author: "Priya Sharma",
      position: "HR Manager",
      company: "Urban Housekeeping Services"
    },
    {
      quote: "We've seen a significant reduction in worker attrition since partnering with Gig Shield. It's become a key part of our employee value proposition.",
      author: "Amit Patel",
      position: "CEO",
      company: "FastTrack Delivery"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          title="What Employers Say"
          subtitle="Trusted by leading companies across India"
        />
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative">
              <Quote className="w-10 h-10 text-[#FFC700] mb-4" />
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              <div className="border-t pt-4">
                <p className="font-bold text-[#1E1E1E]">{testimonial.author}</p>
                <p className="text-sm text-gray-600">{testimonial.position}</p>
                <p className="text-sm text-[#6A38FF] font-semibold">{testimonial.company}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
