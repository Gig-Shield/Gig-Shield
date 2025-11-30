import { TrendingDown, Calendar, CheckCircle, Heart, Zap, DollarSign, Headphones } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

export default function WhyEmployers() {
  const benefits = [
    {
      icon: TrendingDown,
      title: 'Reduce Worker Attrition',
      description: 'Show your workers you care about their wellbeing and safety'
    },
    {
      icon: Calendar,
      title: 'Improve Attendance & Reliability',
      description: 'Healthier, protected workers means more consistent workforce'
    },
    {
      icon: CheckCircle,
      title: 'Boost Compliance',
      description: 'Meet regulatory requirements and demonstrate employer responsibility'
    },
    {
      icon: Heart,
      title: 'Strengthen Worker Trust',
      description: 'Build loyalty and trust with comprehensive coverage benefits'
    },
    {
      icon: Zap,
      title: 'Easy Onboarding',
      description: 'Get your entire workforce covered in minutes, not days'
    },
    {
      icon: DollarSign,
      title: 'Starts at ₹40–₹60/Worker/Month',
      description: 'Affordable, transparent pricing with no hidden costs'
    },
    {
      icon: Headphones,
      title: 'End-to-End Claims Support',
      description: 'We handle the entire claims process so you don\'t have to'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          title="Why Employers Choose Gig Shield"
          subtitle="Benefits that matter to your business and your workforce"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-[#FFC700] rounded-xl flex items-center justify-center">
                  <benefit.icon className="w-6 h-6 text-[#1E1E1E]" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1E1E1E] mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
