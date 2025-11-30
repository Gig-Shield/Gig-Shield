import { Truck, Home, Users, HardHat, ShoppingBag, Smartphone } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';

export default function WhoWeServe() {
  const industries = [
    {
      icon: Truck,
      title: 'Logistics & Delivery Companies',
      description: 'Protect drivers, couriers, and warehouse staff'
    },
    {
      icon: Home,
      title: 'Housekeeping Agencies',
      description: 'Coverage for domestic and commercial cleaning staff'
    },
    {
      icon: Users,
      title: 'Manpower Suppliers',
      description: 'Comprehensive protection for your entire workforce pool'
    },
    {
      icon: HardHat,
      title: 'Construction Contractors',
      description: 'Essential coverage for high-risk construction workers'
    },
    {
      icon: ShoppingBag,
      title: 'Retail Staffing Firms',
      description: 'Insurance solutions for retail and merchandising staff'
    },
    {
      icon: Smartphone,
      title: 'On-Demand Labour Platforms',
      description: 'Flexible coverage for app-based gig economy workers'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          title="Who We Serve"
          subtitle="Trusted by forward-thinking employers across industries"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <Card key={index} hover className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 bg-linear-to-br from-[#6A38FF] to-[#4B1BC6] rounded-2xl flex items-center justify-center">
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#1E1E1E] mb-2">{industry.title}</h3>
              <p className="text-gray-600">{industry.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
