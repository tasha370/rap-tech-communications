import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import About from "@/components/home/About";
import FocusAreas from "@/components/home/FocusAreas";
import Programs from "@/components/home/Programs";
import CTA from "@/components/home/CTA";
import Footer from "@/components/layout/Footer";
export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <FocusAreas />
      <Programs/>
      <CTA />
      <Footer/>
    </>
  );
}