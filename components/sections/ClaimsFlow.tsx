import { MessageCircle, FileText, CheckSquare, Send, CheckCircle2 } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Image from 'next/image';

export default function ClaimsFlow() {
  const steps = [
    {
      icon: MessageCircle,
      title: 'Worker Sends Claim on WhatsApp',
      description: 'Simple, instant claim initiation through WhatsApp'
    },
    {
      icon: FileText,
      title: 'Documents Collected Digitally',
      description: 'Upload photos and documents directly through chat'
    },
    {
      icon: CheckSquare,
      title: 'Employer Verifies Incident',
      description: 'Quick verification process for authenticity'
    },
    {
      icon: Send,
      title: 'We Process & Forward to Insurer',
      description: 'Our team handles all insurer communications'
    },
    {
      icon: CheckCircle2,
      title: 'Claims Settled in 7–15 Days',
      description: 'Fast turnaround with transparent tracking'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          title="Claims Made Simple"
          subtitle="WhatsApp-based claims processing that actually works"
        />
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Claims Flow Steps */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="shrink-0">
                  <div className="w-12 h-12 bg-[#FFC700] rounded-full flex items-center justify-center font-bold text-[#1E1E1E]">
                    {index + 1}
                  </div>
                </div>
                <div className="grow">
                  <div className="flex items-center gap-2 mb-2">
                    <step.icon className="w-5 h-5 text-[#6A38FF]" />
                    <h3 className="text-xl font-bold text-[#1E1E1E]">{step.title}</h3>
                  </div>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* WhatsApp UI Mockup Placeholder */}
          <div className="relative h-[500px] bg-linear-to-br from-[#6A38FF] to-[#4B1BC6] rounded-3xl p-8 flex items-center justify-center">
            <div className="text-center text-white space-y-4">
              <MessageCircle className="w-24 h-24 mx-auto opacity-50" />
              <p className="text-lg font-semibold">WhatsApp Claims Interface</p>
              <p className="text-sm opacity-80">Visual mockup placeholder</p>
              <p className="text-xs opacity-60">[Add WhatsApp screenshot here]</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
