import Hero from "../components/Hero";
import Mission from "../components/Mission";
import Programmes from "../components/Programmes";
import WhyRapTech from "../components/WhyRapTech";
import About from "../components/AboutPreview";
import Membership from "../components/Membership";
import TeamPreview from "../components/TeamPreview";
import Contact from "../components/Contact";
export default function Home() {
  return (
    <>

      <main>
        <Hero />
        <Mission />
     <Programmes />
        <WhyRapTech />
        <About />
        <Membership />
        <TeamPreview />
        <Contact />
      </main>
    </>

  );
}