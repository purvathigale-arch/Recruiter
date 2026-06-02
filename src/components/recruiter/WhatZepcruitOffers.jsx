import { useState } from "react";
import Container from "../common/Container";

export default function WhatZepcruitOffers() {

  const offerings = [
    {
      title: "Predictive Hiring Analytics",
      heading: "Predict performance. Hire confidently.",
      content:
        "Zepcruit's Proprietary Predictive Hiring Engine does not just tell you how a candidate performed in the interview - it tells you how they are likely to perform once they are actually in the role. Three composite scores drive the decision: Role Fit Score, Performance Predictability Score, and Good to Hire Score. . Each is built from behavioural, psychometric, and interview signal data captured at multiple levels on the platform. ",
      impact:
        "Reduce mis-hires. Cut the 3–5x cost of re-hiring. Give your leadership team a hiring decision they can stand behind.",
    },

    {
      title: "Resume Screening And Scoring",
      heading: "Screen faster. Shortlist better.",
      content:
        "Zepcruit processes every resume in your applicant pool and scores each candidate based on how well they match your actual role requirements - with contextual rationale, not just keyword matching. Bias-free. Auditable. Consistent across every application, whether you receive 50 or 5,000.",
      impact:
        "Eliminate hours of manual CV sifting. Ensure every shortlist is defensible and data-backed",
    },

    {
      title: "Automated Deep AI Interviews",
      heading: "Automate screening. Save time..",
      content:
        "Zepcruit conducts the first structured interview for you. Every shortlisted candidate goes through a video-driven, role specific and tailored AI interview - automatically, simultaneously, without any scheduling from your team. The interview is built around your job requirements, instead of a  generic question bank. Every session is non-intrusive and designed to give candidates a fair, respectful experience - protecting your employer brand in the process.",
      impact:
        "Replace 60–70% of your screening effort. Maintain interview quality at any volume.",
    },

    {
      title: "Anti-Cheating Proctoring - Trust Every Result",
      heading: "Detect fraud. Hire with integrity..",
      content:
        " In a remote-first world, candidate fraud in AI interviews is a real risk - and an invisible one. Zepcruit's proctoring system runs throughout every AI interview, tracking multiple signals of unethical behaviour in real time: tab switching, face absence, multiple persons on screen, device irregularities, AI generated answers and more. Every flagged event is recorded and surfaced in the candidate report. No fake candidates make it through. Every result you see is one you can trust.",
      impact:
        "Eliminate the risk of fraudulent candidates reaching your final round. Give your hiring team and your business confidence in every assessment.",
    },

    {
      title: "Psychometric-Based Role Fit Assessment",
      heading: "Decode professional behaviour. Hire smarter.",
      content:
        "Zepcruit's psychometric assessment goes beyond skills and experience to reveal how a candidate naturally works - their strengths & weaknesses, work preference, communication style, stress triggers & coping mechanisms, and decision-making patterns. This is not a personality test for self-awareness but a hiring intelligence layer that tells you whether this person is built for this role.",
      impact:
        "Move beyond intuition on culture and team fit. Make role suitability a data point more than a conversation.",
    },

    {
      title: "Behavioural Signal Analysis",
      heading: "Read beyond rehearsed answers.",
      content:
        "Zepcruit's behavioural signal analysis layer tracks how candidates respond under pressure throughout the AI interview - measuring confidence, composure, emotional stability, and authenticity in real time. You see not just what they said, but how they showed up. This gives hiring managers a dimension of candidate intelligence that a traditional interview round rarely surfaces.",
      impact:
        "Identify candidates who perform under pressure. Reduce the risk of hiring someone who interviewed well but underdelivered..",
    },

    {
      title: "Detailed Candidate Intelligence Reports",
      heading: "Know more. Doubt less.",
      content:
        "After every AI interview, Zepcruit produces a comprehensive candidate report covering: role fit score, performance predictability score, psychometric profile, behavioural signal summary, skill assessment, and a clear Good to Hire recommendation. Every data point is explained. Every score is traceable. Every report is shareable with decision-makers in seconds..",
      impact:
        "Replace rounds of internal debrief meetings with a single, comprehensive document that moves the decision forward..",
    },

    {
      title: "Concurrent AI Interviews - Interview Hundreds At Once",
      heading: "Interview hundreds. Effort zero.",
      content:
        "Whether You are hiring five people or five hundred, the effort on your team's end stays exactly the same. Zepcruit runs all interviews simultaneously - no scheduling, no coordination, no waiting for candidates to find a slot. Your TA team's bandwidth is no longer the bottleneck.",
      impact:
        "Handle 10x the hiring volume without adding headcount or extending timelines.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-[#FFFFFF] py-16">

      <Container>

        {/* HEADING */}
        <div className="text-center">

          <h2
            className="text-[48px] leading-[1.08] tracking-[-2px] font-[700]"
            style={{
              fontFamily: "Figtree, sans-serif",
            }}
          >

            <span className="text-[#111111]">
              What Zepcruit Offers: HR Tech Built for TA Teams
            </span>

            <br />

            <span className="text-[#111111]">
              Who
            </span>{" "}

            <span className="text-[#FF5A0A]">
              Hire at Scale
            </span>{" "}

            <span className="text-[#111111]">
              and
            </span>{" "}

            <span className="text-[#FF5A0A]">
              Cannot Afford to Get It Wrong
            </span>

          </h2>

        </div>

        {/* MAIN SECTION */}
       <div className="mt-10 lg:mt-16 grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-6 w-full">

          {/* LEFT SIDEBAR */}
        <div
  className="
    bg-[#F7F5EA]
    border
    border-[#8C8C8C]
    rounded-[14px]
    overflow-hidden
    shadow-[0_4px_12px_rgba(0,0,0,0.05)]
    h-auto
  
  "
>
            {/* LABEL */}
            <div className="px-4 pt-4 pb-3">

              <p
                className="text-[#FF5A0A] text-[25px] font-black tracking-[0.3px]"
                style={{
                  fontFamily: "Figtree, sans-serif",
                }}
              >
                WE OFFER:
              </p>

            </div>

            {/* MENU ITEMS */}
            {offerings.map((item, index) => (

              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-full text-left px-5 py-4 border-t border-[#DED9C8] transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-[#FF5A0A] text-white"
                    : "bg-transparent text-[#666666] hover:bg-[#F1EEE2]"
                }`}
              >

                <p
                  className={`text-[18px] leading-[1.3] ${
                    activeIndex === index
                      ? "text-white"
                      : "text-[#666666]"
                  }`}
                  style={{
                    fontFamily: "Figtree, sans-serif",
                  }}
                >
                  {item.title}
                </p>

              </button>

            ))}

          </div>

          {/* RIGHT CONTENT */}
 <div
  className="
    bg-[#FFFCF5]
    border
    border-[#D7CFB8]
    rounded-[16px]
    px-5
    md:px-8
    lg:px-10
    py-6
    lg:py-8
    shadow-[0_4px_12px_rgba(0,0,0,0.04)]
    transition-all
    duration-300
    text-center
  "
  style={{
    height: "fit-content",
    minHeight: "unset",
  }}
>
            <h3
              className="
text-[24px]
md:text-[30px]
lg:text-[34px]
italic
font-[700]
text-[#111111]
tracking-[-1px]
"
            >
              {offerings[activeIndex].heading}
            </h3>

            {/* PARAGRAPH */}
            <p
           className="
mt-4
lg:mt-6
text-[16px]
md:text-[18px]
lg:text-[20px]
leading-[28px]
lg:leading-[30px]
text-[#5F5F5F]
font-medium
max-w-[760px]
mx-auto
"
            >
              {offerings[activeIndex].content}
            </p>

            {/* IMPACT BOX */}
          
<div
  className="
    mt-6 lg:mt-10
    border
    border-[#FF5A0A]
    rounded-[14px]
    overflow-hidden
    flex
    bg-white
  "
>

  {/* LEFT ORANGE BAR */}
  <div className="w-[18px] bg-[#FF5A0A] shrink-0" />

  {/* CONTENT */}
  <div className="px-5 md:px-8 py-5 md:py-6 flex-1">

    <p
      className="
        text-[#FF5A0A]
        text-[20px]
        font-black
        tracking-[0.3px]
        text-left
        leading-none
      "
      style={{
        fontFamily: "Figtree, sans-serif",
      }}
    >
      IMPACT
    </p>

    <p
      className="
        mt-4
        text-[18px]
        leading-[29px]
        text-[#222222]
        font-semibold
        text-left
      "
      style={{
        fontFamily: "Figtree, sans-serif",
      }}
    >
      {offerings[activeIndex].impact}
    </p>

  </div>

</div>

          </div>

          {/* CENTER BUTTON */}
<div className="lg:col-span-2 flex justify-center mt-8">

  <button
    className="
      bg-[#FF5A0A]
      hover:bg-[#EB5200]
      transition-all
      duration-300
      text-white
      text-[16px]
      font-bold
      px-8
      py-3
      rounded-full
      tracking-[0.3px]
      shadow-[0_6px_18px_rgba(255,90,10,0.25)]
    "
    style={{
      fontFamily: "Figtree, sans-serif",
    }}
  >
    VIEW SAMPLE CANDIDATE REPORT
  </button>

</div>

        </div>

      </Container>

    </section>
  );
}