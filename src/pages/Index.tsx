import ParticleBackground from "@/components/ParticleBackground";
import FloatingNav from "@/components/FloatingNav";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import SectionDivider from "@/components/SectionDivider";
import UseCasesSection from "@/components/UseCasesSection";
import PricingSection from "@/components/PricingSection";
import DashboardSection from "@/components/DashboardSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import CTASection from "@/components/CTASection";
import FooterSection from "@/components/FooterSection";

const Index = () => (
  <>
    <ParticleBackground />
    <FloatingNav />
    <main>
      <HeroSection />
      <SectionDivider />
      <AboutSection />
      <SectionDivider />
      <FeaturesSection />
      <SectionDivider />
      <UseCasesSection />
      <SectionDivider />
      <PricingSection />
      <SectionDivider />
      <DashboardSection />
      <SectionDivider />
      <TestimonialsSection />
      <SectionDivider />
      <FAQSection />
      <SectionDivider />
      <ContactSection />
      <CTASection />
    </main>
    <FooterSection />
  </>
);

export default Index;
