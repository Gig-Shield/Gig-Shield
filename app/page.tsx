import Hero from '@/components/sections/Hero';
import HowItWorks from '@/components/sections/HowItWorks';
import WhyEmployers from '@/components/sections/WhyEmployers';
import InsuranceProducts from '@/components/sections/InsuranceProducts';
import ClaimsFlow from '@/components/sections/ClaimsFlow';
import WhoWeServe from '@/components/sections/WhoWeServe';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import FinalCTA from '@/components/sections/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <WhyEmployers />
      <InsuranceProducts />
      <ClaimsFlow />
      <WhoWeServe />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
