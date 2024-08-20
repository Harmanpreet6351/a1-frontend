import AchievementSection from "@/components/home/achievement-section";
import ContactUsSection from "@/components/home/contact-us-section";
import FooterSection from "@/components/home/footer-section";
import HeroSection from "@/components/home/hero-section";
import Navbar from "@/components/home/navbar";
import OurServicesSection from "@/components/home/our-services-section";
import PartnersSection from "@/components/home/partners-section";
import TestimonialsSection from "@/components/home/testimonials-section";
import UpperNavbar from "@/components/home/upper-navbar";


export default function Home() {
  return (
    <>
      <UpperNavbar />
      <Navbar />
      <HeroSection />
      <AchievementSection />
      <OurServicesSection />
      <TestimonialsSection />
      <ContactUsSection />
      <PartnersSection />
      <FooterSection />
    </>
  )
}