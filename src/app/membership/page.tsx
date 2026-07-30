import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import MembershipHero from "@/components/membership/MembershipHero";
import WhyJoin from "@/components/membership/WhyJoin";
import MembershipCategories from "@/components/membership/MembershipCategories";
import MembershipBenefits from "@/components/membership/MembershipBenefits";
import MembershipProcess from "@/components/membership/MembershipProcess";
import MembershipFAQ from "@/components/membership/MembershipFAQ";
import MembershipCTA from "@/components/membership/MembershipCTA";

export default function MembershipPage() {
  return (
    <>
      <Navbar />

      <main>
        <MembershipHero />
        <WhyJoin />
        <MembershipCategories />
        <MembershipBenefits />
        <MembershipProcess />
        <MembershipFAQ />
        <MembershipCTA />
      </main>

      <Footer />
    </>
  );
}