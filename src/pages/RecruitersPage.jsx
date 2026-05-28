import Navbar from "../components/recruiter/Navbar";
import Hero from "../components/recruiter/Hero";
import Problem from "../components/recruiter/Problem";
import WhatShifts from "../components/recruiter/WhatShifts";
import ProcessSection from "../components/recruiter/ProcessSection";
import WhatZepcruitOffers from "../components/recruiter/WhatZepcruitOffers";
import WhatMakesDifferent from "../components/recruiter/WhatMakesDifferent";
import HiringTeamsSection from "../components/recruiter/HiringTeamsSection";
import PayOnlySection from "../components/recruiter/PayOnlySection";
import EstimatedCostSection from "../components/recruiter/EstimatedCostSection";
import FAQsection from "../components/recruiter/FAQsection";
import FooterSection from "../components/recruiter/FooterSection";

export default function RecruitersPage() {
  return (
    <main className="bg-[#FFFCF5] overflow-hidden">
      <Navbar />
      <Hero />
      <Problem />
      <WhatShifts />
      <ProcessSection />
      <WhatZepcruitOffers />
      <WhatMakesDifferent />
      <HiringTeamsSection />
      <PayOnlySection />
        <EstimatedCostSection />
        <FAQsection />
        <FooterSection />
    </main>
  );
}