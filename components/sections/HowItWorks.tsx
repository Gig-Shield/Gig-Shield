import { UserPlus, FileCheck, Shield, MessageCircle } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';

export default function HowItWorks() {
  const steps = [
    {
      icon: UserPlus,
      title: 'Employer Shares Worker List',
      description: 'Simply provide us with your worker details through our easy onboarding system.'
    },
    {
      icon: FileCheck,
      title: 'Policy Issued Instantly',
      description: 'Digital policies are generated immediately with comprehensive coverage details.'
    },
    {
      icon: Shield,
      title: 'Workers Get Coverage',
      description: 'Each worker receives digital coverage confirmation and policy documents instantly.'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp Claims Support',
      description: 'Fast, convenient claims processing through WhatsApp with quick turnaround times.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          title="How Gig Shield Works"
          subtitle="A simple 4-step process to protect your entire workforce"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card key={index} hover className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 bg-linear-to-br from-[#6A38FF] to-[#4B1BC6] rounded-2xl flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="mb-2 text-sm font-bold text-[#FFC700]">STEP {index + 1}</div>
              <h3 className="text-xl font-bold text-[#1E1E1E] mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
