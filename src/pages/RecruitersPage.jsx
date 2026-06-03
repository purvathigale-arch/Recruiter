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
import { Helmet } from "react-helmet-async";
export default function RecruitersPage() {
  return (
     <>
      <Helmet>
  <title>
    AI Recruiter Platform | Recruitment Automation Software | Zepcruit
  </title>

  <meta
    name="description"
    content="AI-powered recruitment platform helping recruiters source candidates, automate outreach, screen talent, conduct AI interviews, and hire faster."
  />

  <meta
    name="keywords"
    content="AI recruitment software, recruitment automation, candidate assessment platform, predictive hiring, talent acquisition software, AI hiring platform, automated interviews"
  />

  <meta name="robots" content="index, follow" />

  <link
    rel="canonical"
    href="https://www.zepcruit.ai/services/recruiter"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="AI Recruiter Platform | Recruitment Automation Software | Zepcruit"
  />

  <meta
    property="og:description"
    content="AI-powered recruitment software that automates candidate screening, interviews, assessments and hiring decisions."
  />

  <meta
    property="og:url"
    content="https://www.zepcruit.ai/services/recruiter"
  />

  <meta property="og:type" content="website" />

  {/* Twitter */}
  <meta
    name="twitter:card"
    content="summary_large_image"
  />

  <meta
    name="twitter:title"
    content="AI Recruiter Platform | Recruitment Automation Software | Zepcruit"
  />

  <meta
    name="twitter:description"
    content="AI-powered recruitment software for recruiters and hiring teams."
  />

  {/* FAQ Schema */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is zepcruit and how does it work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Zepcruit is an end-to-end AI-powered hiring platform that automates recruitment from CV sourcing, CV screening to tailored AI video interviews and predictive candidate evaluation."
          }
        },
        {
          "@type": "Question",
          name: "How does AI Interview process work on Zepcruit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Zepcruit conducts asynchronous AI video interviews without scheduling or live interviewers."
          }
        },
        {
          "@type": "Question",
          name: "How is Zepcruit different from Naukri, LinkedIn, or a traditional ATS?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Zepcruit is an AI evaluation layer with CV ranking, AI interviews, psychometric assessment and predictive hiring intelligence."
          }
        },
        {
          "@type": "Question",
          name: "How does AI-powered CV screening work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Zepcruit uses AI to match resumes against job descriptions, rank candidates and provide explainable evaluation scores."
          }
        },
        {
          "@type": "Question",
          name: "Can Zepcruit integrate with our existing ATS?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Zepcruit integrates with ATS platforms including Zoho Recruit, Darwinbox, Keka and PeopleStrong through APIs."
          }
        },
        {
          "@type": "Question",
          name: "Can Zepcruit detect cheating during online interviews?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Zepcruit includes anti-cheat proctoring, tab-switch detection, second-person detection and AI-generated answer detection."
          }
        }
      ]
    })}
  </script>
</Helmet>

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
    </>
  );
}