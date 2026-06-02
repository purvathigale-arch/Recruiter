import { useState } from "react";

import Container from "../common/Container";
import differentImage from "../../assets/tab1.svg";
import pana from "../../assets/pana.svg";
import pana2 from "../../assets/pana2.svg";

const tabs = [
  {
    label: "Predictive Hiring Analytics",
    image: differentImage,
    title: "Predictive Hiring Analytics",
    description:
      "A bad hire costs you 6–9 months of salary and months of momentum. Zepcruit's predictive hiring analytics engine goes beyond resumes and gut feel — scoring every candidate on role alignment and performance likelihood through our pre-employment assessment stack, so your talent acquisition decisions are grounded in intelligence, not intuition.",
    italic: "Hire With Confidence. Not Hope.",
  },
  {
    label: "Tailored Evaluation Stack",
    image: pana,
    title: "AI-Powered Interviews with a Tailored Evaluation Stack",
    description:
      "Create customized assessments and interview workflows that align perfectly with your hiring requirements. Evaluate candidates consistently using AI-generated insights and structured scorecards.",
    italic: "Hire With Confidence. Not Hope.",
  },
  {
    label: "Unified Intelligent Platform",
    image: pana2,
    title: "A Complete Hiring Intelligence Platform",
    description:
      "From sourcing and screening to interviews and final selection, everything lives in one intelligent platform. No switching between disconnected tools.",
    italic: "Hire With Confidence. Not Hope.",
  },
];

export default function WhatMakesDifferent() {
  const [activeTab, setActiveTab] = useState(0);

  const prev = () => setActiveTab((t) => (t - 1 + tabs.length) % tabs.length);
  const next = () => setActiveTab((t) => (t + 1) % tabs.length);

  return (
    <section
      className="bg-white py-10 lg:py-16 overflow-hidden"
      style={{ fontFamily: "Figtree, sans-serif" }}
    >
      <Container>

        {/* HEADING */}
        <h2 className="text-[26px] text-center sm:text-[34px] lg:text-[48px] font-[750] text-[#111111] leading-[1.1] tracking-[-0.5px]">
          What Makes Zepcruit{" "}
          <span className="text-[#FF5A0A]">Different</span>{" "}
          from Every Other AI Recruitment Software
        </h2>

        {/* SUBTITLE */}
        <p className="mt-2 text-[14px] sm:text-[16px] text-[#888888] italic font-normal text-center">
          From sourcing to offer letter. One platform. No switching between tools.
        </p>

        {/* MAIN TWO-COLUMN LAYOUT */}
       <div className="mt-10 lg:mt-14 flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

          {/* LEFT — Illustration */}
          <div className="w-full lg:w-[40%] flex-shrink-0 flex justify-center lg:justify-start">
            <img
              src={tabs[activeTab].image}
              alt={tabs[activeTab].title}
              className="w-full max-w-[300px] sm:max-w-[380px] lg:max-w-full h-auto object-contain"
            />
          </div>

          {/* RIGHT — Tabs + Card + CTA */}
          <div className="w-full lg:flex-1 flex flex-col gap-4 min-w-0">
{/* ── DESKTOP TAB BAR ── */}
<div
  className="hidden sm:flex items-center bg-[#E6DDC7] rounded-[22px] p-[8px] w-fit">
  {tabs.map((tab, i) => (
    <button
      key={i}
      onClick={() => setActiveTab(i)}
      className="transition-all duration-300"
      style={{
        borderRadius: "18px",
        padding: "13px 20px",
        fontSize: "15px",
        fontWeight: activeTab === i ? 600 : 500,
        whiteSpace: "nowrap",
        marginRight: i !== tabs.length - 1 ? "4px" : "0",
        background: activeTab === i ? "#FF5A0A" : "transparent",
        color: activeTab === i ? "#FFFFFF" : "#6B6B6B",
        boxShadow:
  activeTab === i
    ? "0 4px 10px rgba(255,90,10,0.15)"
    : "none",
      }}
    >
      {tab.label}
    </button>
  ))}
</div>

            {/* ── MOBILE TAB BAR ── */}
            <div
              className="flex sm:hidden items-center rounded-[50px] px-[5px] py-[5px] gap-[4px]"
              style={{ backgroundColor: "#EDE5CE" }}
            >
              <button
                onClick={prev}
                aria-label="Previous"
                className="flex-shrink-0 flex items-center justify-center rounded-full text-[#7A6F60] hover:text-[#FF5A0A] transition-colors"
                style={{ width: "32px", height: "32px" }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>

              <div
                className="flex-1 text-white font-semibold text-center rounded-[50px] flex items-center justify-center"
                style={{
                  backgroundColor: "#FF5A0A",
                  fontSize: "12px",
                  padding: "8px 12px",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  minWidth: 0,
                  boxShadow: "0 2px 8px rgba(255,90,10,0.35)",
                }}
              >
                {tabs[activeTab].label}
              </div>

              <button
                onClick={next}
                aria-label="Next"
                className="flex-shrink-0 flex items-center justify-center rounded-full text-[#7A6F60] hover:text-[#FF5A0A] transition-colors"
                style={{ width: "32px", height: "32px" }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>

            {/* Dot indicators — mobile only */}
            <div className="flex sm:hidden justify-center gap-[6px] -mt-1">
              {tabs.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  aria-label={`Tab ${i + 1}`}
                  style={{
                    flexShrink: 0,
                    width: activeTab === i ? "18px" : "6px",
                    height: "6px",
                    borderRadius: "9999px",
                    backgroundColor: activeTab === i ? "#FF5A0A" : "#D4C9A8",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                    transition: "all 0.3s",
                  }}
                />
              ))}
            </div>

            {/* CONTENT CARD — full width, generous padding matching design */}
            <div
              className="w-[680px] rounded-[22px] px-10 py-10 border border-[#DDD5BC]"
              style={{ backgroundColor: "#F5F0E8" }}
            >
              <h3
                className="text-[18px] sm:text-[20px] lg:text-[22px] font-bold text-[#FF5A0A] leading-[1.3]"
              >
                {tabs[activeTab].title}
              </h3>
              <p
                className="mt-3 text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.75] text-[#444444] font-normal"
              >
                {tabs[activeTab].description}
              </p>
            </div>

            {/* ITALIC TAGLINE */}
            <p className="text-[28px] sm:text-[28px] lg:text-[28px] font-medium italic text-[#1B1B1B]">
              {tabs[activeTab].italic}
            </p>

            {/* BOOK A DEMO BUTTON — pill, left-aligned, compact */}
            <div className="flex justify-start">
              <button
                className="inline-flex items-center gap-2 bg-[#FF5A0A] hover:bg-[#e84e00] active:bg-[#d04400] text-white transition-all duration-200 font-bold text-[13px] tracking-[0.8px] uppercase px-6 py-[11px] rounded-full shadow-[0_4px_14px_rgba(255,90,10,0.30)] w-full sm:w-auto justify-center sm:justify-start"
                onClick={() =>
                  window.open(
                    "https://zepcruit.zohobookings.in/#/300603000000133050",
                    "_blank"
                  )
                }
              >
                Book a Demo
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}
