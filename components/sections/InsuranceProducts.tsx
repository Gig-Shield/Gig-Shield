import { Shield, Heart, Wallet, Activity, Plus } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';

export default function InsuranceProducts() {
  const products = [
    {
      icon: Shield,
      title: 'Personal Accident Cover',
      description: 'Comprehensive protection against accidental death and permanent disabilities. Provides financial security for workers and their families.',
      highlight: 'Up to ₹5 Lakhs'
    },
    {
      icon: Heart,
      title: 'Medical Expense Reimbursement',
      description: 'Coverage for treatment costs from accidents or injuries. Includes hospitalization, surgery, and medical procedures.',
      highlight: 'Up to ₹2 Lakhs'
    },
    {
      icon: Wallet,
      title: 'Hospital Cash Benefit',
      description: 'Daily allowance during hospitalization to cover incidental expenses. Helps workers manage day-to-day costs during recovery.',
      highlight: '₹500-₹1000/day'
    },
    {
      icon: Activity,
      title: 'Disability Benefit',
      description: 'Financial support for temporary or permanent disability due to accidents. Ensures income continuity during recovery periods.',
      highlight: 'Customizable'
    },
    {
      icon: Plus,
      title: 'Optional Add-ons',
      description: 'Enhanced coverage options including family coverage, critical illness riders, and extended benefits tailored to your workforce needs.',
      highlight: 'Flexible Plans'
    }
  ];

  return (
    <section className="py-20 bg-linear-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          title="The Insurance Products"
          subtitle="Comprehensive protection designed specifically for gig and contract workers"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Card key={index} hover className="relative">
              <div className="absolute top-4 right-4">
                <span className="text-xs font-bold text-[#6A38FF] bg-purple-100 px-3 py-1 rounded-full">
                  {product.highlight}
                </span>
              </div>
              
              <div className="mb-4">
                <div className="w-14 h-14 bg-linear-to-br from-[#6A38FF] to-[#4B1BC6] rounded-xl flex items-center justify-center">
                  <product.icon className="w-7 h-7 text-white" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-[#1E1E1E] mb-3">{product.title}</h3>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
