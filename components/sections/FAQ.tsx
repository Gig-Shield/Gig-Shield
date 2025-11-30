import SectionHeading from '@/components/ui/SectionHeading';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      question: "What is gig worker insurance?",
      answer: "Gig worker insurance is specialized coverage designed for freelancers, independent contractors, delivery drivers, and rideshare workers. It includes accident coverage, medical reimbursement, hospital cash benefits, and disability protection to safeguard gig economy workers who often lack traditional employee benefits."
    },
    {
      question: "How much does Gig Shield insurance cost?",
      answer: "Gig Shield insurance starts at just ₹40-₹60 per worker per month, depending on the coverage level and number of workers enrolled. We offer flexible plans tailored to your workforce needs with transparent pricing and no hidden costs."
    },
    {
      question: "How do I file a claim with Gig Shield?",
      answer: "Claims can be filed easily via WhatsApp. Simply send your claim documents through WhatsApp, our team collects documents digitally, the employer verifies the incident, and we process claims within 7-15 days. It's fast, convenient, and hassle-free."
    },
    {
      question: "Who is eligible for Gig Shield insurance?",
      answer: "Gig Shield is available for all gig workers, freelancers, contractors, delivery drivers, rideshare drivers, and blue-collar workers employed by staffing companies, logistics firms, housekeeping agencies, construction contractors, retail staffing firms, and on-demand labour platforms across India."
    },
    {
      question: "What does Gig Shield insurance cover?",
      answer: "Gig Shield provides comprehensive coverage including personal accident cover up to ₹5 lakhs, medical expense reimbursement up to ₹2 lakhs, hospital cash benefit of ₹500-₹1000 per day, disability benefits, and optional add-ons such as family coverage and critical illness riders."
    },
    {
      question: "How quickly can I get my workers covered?",
      answer: "Your entire workforce can be covered in minutes, not days. Simply share your worker list, and we'll issue digital policies instantly. Each worker receives digital coverage confirmation and policy documents immediately via WhatsApp or email."
    },
    {
      question: "Why do gig workers need insurance?",
      answer: "Gig workers, freelancers, and independent contractors typically don't have access to traditional employee benefits like health insurance or accident coverage. This leaves them financially vulnerable to accidents, injuries, or medical emergencies. Gig Shield provides affordable protection that ensures workers and their families are covered."
    },
    {
      question: "Can I customize coverage for different worker types?",
      answer: "Yes! We offer flexible plans that can be customized based on worker type, risk level, and your budget. Whether you need coverage for delivery drivers, construction workers, or housekeeping staff, we can tailor the insurance to your specific needs."
    }
  ];

  return (
    <section className="py-20 bg-linear-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading 
          title="Frequently Asked Questions About Gig Worker Insurance"
          subtitle="Everything you need to know about protecting your freelance and contract workforce"
        />
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details 
              key={index} 
              className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 group"
            >
              <summary className="font-bold text-lg text-[#1E1E1E] cursor-pointer flex items-center justify-between list-none">
                <span>{faq.question}</span>
                <ChevronDown className="w-5 h-5 text-[#6A38FF] group-open:rotate-180 transition-transform" />
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>

        <div className="mt-12 text-center bg-white rounded-2xl p-8 border border-gray-200">
          <h3 className="text-2xl font-bold text-[#1E1E1E] mb-4">
            Still have questions about gig worker insurance?
          </h3>
          <p className="text-gray-600 mb-6">
            Our team is here to help you find the perfect insurance solution for your freelancers and contract workers.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-[#6A38FF] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#4B1BC6] transition-colors"
          >
            Contact Our Insurance Experts
          </a>
        </div>
      </div>
    </section>
  );
}
