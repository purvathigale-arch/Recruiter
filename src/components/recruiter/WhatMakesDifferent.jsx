import { useState } from "react";
import Container from "../common/Container";

import differentImage from "../../assets/tab1.svg";
import pana from "../../assets/pana.svg";
import pana2 from "../../assets/pana2.svg";

export default function WhatMakesDifferent() {

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
      "Every role is different. So every interview should be too. Zepcruit's AI-powered interviews are built around structured, company specific – culture specific – role-specific evaluation flows; complete with real-time anti-cheat proctoring and psychometric-based candidate assessment — so you measure what actually predicts performance, not just what candidates rehearsed.",

    italic: "Hire With Confidence. Not Hope.",
  },

  {
    label: "Unified Intelligent Platform",

    image: pana2,

    title: "A Complete Hiring Intelligence Platform - Not Five Tools Stitched Together",

    description:
      "Most organisations run their hiring across multiple disconnected platforms — one for sourcing, one for screening, one for interviews, one for assessments. Each handoff loses data, context, and time. Zepcruit takes you from sourcing to offer letter in one seamless flow. Every signal stays connected. Every decision is informed by the full picture.",

    italic: "Hire With Confidence. Not Hope.",
  },
];

  const [activeTab, setActiveTab] = useState(0);

  return (
<<<<<<< HEAD
    <section className="bg-[#FFFFFF] py-12">
=======
    <section className="bg-[#FFFFFF] py-12 overflow-hidden">
>>>>>>> 078a62320767f4a6388e8d462a1e1f36fd2756fc

      <Container>

        {/* HEADING */}
        <div className="max-w-[1180px] mx-auto text-center">

          <h2
            className="text-[48px] leading-[1.05] tracking-[-2px] font-[700]"
            style={{
              fontFamily: "Figtree, sans-serif",
            }}
          >

            <span className="text-[#111111]">
              What Makes Zepcruit
            </span>{" "}

            <span className="text-[#FF5A0A]">
              Different
            </span>{" "}

            <span className="text-[#111111]">
              from Every Other AI Recruitment Software
            </span>

          </h2>

          {/* SUBTEXT */}
          <p
            className="mt-2 text-[22px] text-[#8A8A8A] font-medium"
            style={{
              fontFamily: "Figtree, sans-serif",
            }}
          >
            From sourcing to final shortlists. One platform. No switching between tools.
          </p>

        </div>

        {/* MAIN GRID */}
<<<<<<< HEAD
        <div className="different-layout grid grid-cols-1 md:grid-cols-[0.82fr_1.18fr] gap-8 mt-10 max-w-[1180px] mx-auto items-start">

         
         {/* LEFT IMAGE */}
<div className="different-image-wrapper flex justify-center items-center w-full">
=======
        <div className="grid grid-cols-[0.82fr_1.18fr] gap-12 mt-16 max-w-[1180px] mx-auto items-start">

         
         {/* LEFT IMAGE */}
<div className="flex justify-center">
>>>>>>> 078a62320767f4a6388e8d462a1e1f36fd2756fc
  <img
    src={tabs[activeTab].image}
    alt="Analytics illustration"
    className={`
<<<<<<< HEAD
  different-image
  w-full
  max-w-[320px]
  md:max-w-[320px]
  h-auto
  object-contain
  mx-auto

  ${activeTab === 2 ? "md:scale-[1.18] md:mt-12" : ""}
`}
=======
      w-[469px]
      h-[480px]
      object-contain

  
      ${activeTab === 2 ? "scale-[1.18] mt-12"  : ""}
    `}
>>>>>>> 078a62320767f4a6388e8d462a1e1f36fd2756fc
  />
</div>

        

          {/* RIGHT SIDE */}
          <div>

            {/* TABS */}
<<<<<<< HEAD
            {/* TABS + MOBILE ARROWS */}
<div className="relative mobile-tabs-wrapper">

  {/* MOBILE SCROLL INDICATORS */}



  {/* TABS */}
  <div className="different-tabs bg-[#E7DFC6] rounded-[12px] p-2 flex gap-2 overflow-x-auto scrollbar-hide scroll-smooth">

    {tabs.map((tab, index) => (

      <button
        key={index}
        onClick={() => setActiveTab(index)}
        className={`
          different-tab-btn
          flex-1
          min-w-[190px] md:min-w-[210px]
          h-[42px]
          rounded-[9px]
          text-[16px]
          font-[500]
          flex
          items-center
          justify-center
          text-center
          whitespace-nowrap
          transition-all
          duration-300
          ${
            activeTab === index
              ? "bg-[#FF5A0A] text-white shadow-[0_4px_10px_rgba(255,90,10,0.25)]"
              : "text-[#6D6D6D] hover:bg-[#EFE7D1]"
          }
        `}
        style={{
          fontFamily: "Figtree, sans-serif",
        }}
      >
        {tab.label}
      </button>

    ))}

  </div>

</div>
=======
            <div className="bg-[#E7DFC6] rounded-[12px] p-2 flex items-center gap-2 ">

              {tabs.map((tab, index) => (

                <button
  key={index}
  onClick={() => setActiveTab(index)}
  className={`
    flex-1
    min-w-[210px]
    h-[42px]
    rounded-[9px]
    text-[16px]
    font-[500]
    flex
    items-center
    justify-center
    text-center
    whitespace-nowrap
    transition-all
    duration-300
    ${
      activeTab === index
        ? "bg-[#FF5A0A] text-white shadow-[0_4px_10px_rgba(255,90,10,0.25)]"
        : "text-[#6D6D6D] hover:bg-[#EFE7D1]"
    }
  `}
  style={{
    fontFamily: "Figtree, sans-serif",
  }}
>
  {tab.label}
</button>

              ))}

            </div>
>>>>>>> 078a62320767f4a6388e8d462a1e1f36fd2756fc

            {/* CONTENT CARD */}
<div className="mt-5">

  {/* BOX */}
<div
  className="
    bg-[#F8F5EA]
    border
    border-[#D9CFB5]
    rounded-[16px]
<<<<<<< HEAD
    px-5 py-5 md:px-8 md:py-8
    transition-all
    duration-300
    different-card
=======
    px-8
    py-8
    transition-all
    duration-300
    overflow-hidden

    h-[300px]
    min-h-[300px]
    max-h-[300px]

>>>>>>> 078a62320767f4a6388e8d462a1e1f36fd2756fc
    flex
    flex-col
  "
>

  {/* TITLE */}
  <h3
    className="
<<<<<<< HEAD
      different-title
      text-[24px] md:text-[30px]
=======
      text-[30px]
>>>>>>> 078a62320767f4a6388e8d462a1e1f36fd2756fc
      leading-[1.05]
      font-[950]
      text-[#FF5A0A]
      tracking-[-1.3px]
      max-w-[520px]
<<<<<<< HEAD
=======

>>>>>>> 078a62320767f4a6388e8d462a1e1f36fd2756fc
      min-h-[40px]
    "
    style={{
      fontFamily: "Figtree, sans-serif",
    }}
  >
    {tabs[activeTab].title}
  </h3>

  {/* DESCRIPTION */}
  <p
    className="
<<<<<<< HEAD
      different-desc
      mt-5
      text-[15px] md:text-[16px]
      leading-[24px] md:leading-[28px]
      text-[#5F5F5F]
      font-medium
=======
      mt-5
      text-[16px]
      leading-[28px]
      text-[#5F5F5F]
      font-medium
      

      overflow-hidden
>>>>>>> 078a62320767f4a6388e8d462a1e1f36fd2756fc
    "
    style={{
      fontFamily: "Figtree, sans-serif",
    }}
  >
    {tabs[activeTab].description}
  </p>

</div>

  {/* ITALIC TEXT */}
  <p
<<<<<<< HEAD
    className="different-italic mt-4 text-[26px] italic leading-[1.2] text-[#333333] font-semibold tracking-[-0.8px]"
=======
    className="mt-4 text-[26px] italic leading-[1.2 text-[#333333] font-semibold tracking-[-0.8px]"
>>>>>>> 078a62320767f4a6388e8d462a1e1f36fd2756fc
    style={{
      fontFamily: "Figtree, sans-serif",
    }}
  >
    {tabs[activeTab].italic}
  </p>

  {/* BUTTON */}
  <div className="mt-4">

    <button
<<<<<<< HEAD
      className="different-btn bg-[#FF5A0A] hover:bg-[#EB5200] transition-all duration-300 text-white px-6 py-3 rounded-full text-[16px] font-bold tracking-[0.3px] shadow-[0_6px_16px_rgba(255,90,10,0.35)] w-full md:w-auto justify-center inline-flex items-center gap-2"
=======
      className="bg-[#FF5A0A] hover:bg-[#EB5200] transition-all duration-300 text-white px-6 py-3 rounded-full text-[16px] font-bold tracking-[0.3px] shadow-[0_6px_16px_rgba(255,90,10,0.35)] inline-flex items-center gap-2"
>>>>>>> 078a62320767f4a6388e8d462a1e1f36fd2756fc
      style={{
        fontFamily: "Figtree, sans-serif",
      }}
      onClick={() => window.open("https://zepcruit.zohobookings.in/#/300603000000133050", "_blank")}
    >
      BOOK A DEMO

      <span className="text-[14px]">
        <i className="fa-solid fa-arrow-right ml-2"></i>
      </span>

    </button>

  </div>

</div>

          </div>

        </div>

      </Container>

    </section>
  );
}