// FILE NAME: src/components/recruiter/PayOnlySection.jsx
import React, { useState } from "react";

/* TOP ROW ICONS */
import cvUnlockIcon    from "../../assets/Slice 1.png";
import cvUnlockAllIcon from "../../assets/Slice 2.png";
import psychometricIcon from "../../assets/Slice 4.png";
import aiInterviewIcon from "../../assets/Slice 3.png";

/* BOTTOM ROW ICONS */
import predictiveIcon  from "../../assets/Slice 12.png";
import antiCheatIcon   from "../../assets/Slice 10.png";
import behaviouralIcon from "../../assets/Slice 9.png";
import followupIcon    from "../../assets/Slice 11.png";

/* ── Small Z icon for price pills ── */
const ZepIcon = ({ size = 23, color = "#FF580E" }) => (
  <svg width={size} height={size} viewBox="0 0 28 29" fill="none" style={{ flexShrink: 0 }}>
    <path d="M4.83387 0L3.61199 6.68944H15.1952L6.46295 14.4994H10.5469L1.10921 22.9378L1.08593 22.9591L0 29H22.8881L24.1097 22.309H12.8527L21.5404 14.4994H17.4565L26.8992 6.00917L26.9141 5.99714L28 0H4.83387Z" fill={color}/>
  </svg>
);

/* ── Big Z — outline stroke only, like Figma ── */
const BigZ = () => (
  <svg viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
    <path
      d="M4.83387 0L3.61199 6.68944H15.1952L6.46295 14.4994H10.5469L1.10921 22.9378L1.08593 22.9591L0 29H22.8881L24.1097 22.309H12.8527L21.5404 14.4994H17.4565L26.8992 6.00917L26.9141 5.99714L28 0H4.83387Z"
      fill="none"
      stroke="#FF580E"
      strokeWidth="0.35"
    />
  </svg>
);

/* ── Connector ── */
function Connector() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[2px] h-[55px] bg-[#5E2CFF]" />
      <div className="border border-[#FF580E] bg-white rounded-full px-5 py-[9px]">
        <p className="text-[11px] font-black tracking-[1.2px] text-[#FF580E] leading-none"
           style={{ fontFamily: "Figtree, sans-serif" }}>
          UNLOCKS ACCESS TO
        </p>
      </div>
      <div className="w-[2px] h-[55px] bg-[#5E2CFF]" />
      <div className="w-0 h-0 -mt-[1px]"
        style={{ borderLeft: "7px solid transparent", borderRight: "7px solid transparent", borderTop: "10px solid #5E2CFF" }} />
    </div>
  );
}

/* ── Desktop Flip Card ── */
function FlipCard({ title, price, icon, description, suffix = "" }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div
      style={{ perspective: "1000px", width: "100%" }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped(f => !f)}
    >
      <div
        style={{
          position: "relative",
          height: "230px",
          transformStyle: "preserve-3d",
          transition: "transform 0.55s cubic-bezier(0.4,0.2,0.2,1)",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          cursor: "pointer",
        }}
      >
        {/* FRONT */}
        <div style={{ backfaceVisibility: "hidden" }}
          className="absolute inset-0 w-full h-full bg-white rounded-[20px] border border-[#E2E2E2] shadow-[0_2px_10px_rgba(0,0,0,0.06)] flex flex-col items-center px-4 pt-4 pb-3">
          {/* Icon — fixed height container */}
         <div style={{
  width: "92px",
  height: "92px",
  flexShrink: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}}>
            <img
  src={icon}
  alt=""
  style={{
    width: "92px",
    height: "92px",
    objectFit: "contain"
  }}
/>
          </div>
          {/* Title */}
          <p style={{ fontFamily: "Figtree, sans-serif" }}
             className="text-[13px] font-semibold text-[#1B1B1B] text-center leading-[18px] whitespace-pre-line mt-2 mb-3 flex-1 flex items-center justify-center">
            {title}
          </p>
          {/* Price pill */}
          <div className="w-full rounded-[8px] border border-[#FF580E] py-[8px] flex items-center justify-center gap-[5px] flex-shrink-0">
            <span style={{ fontFamily: "Figtree, sans-serif" }} className="text-[15px] font-black text-[#FF580E]">
              {price}{suffix}
            </span>
            <ZepIcon size={13} />
          </div>
        </div>
        {/* BACK */}
        <div style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}
          className="absolute inset-0 w-full h-full bg-[#FF580E] rounded-[20px] flex items-center justify-center p-6">
          <p style={{ fontFamily: "Figtree, sans-serif" }} className="text-white text-[13px] leading-[20px] text-center font-medium">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ── Mobile Flip Card ── */
function FlipCardMobile({ title, price, icon, description, suffix = "" }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div style={{ perspective: "1000px", width: "100%" }} onClick={() => setFlipped(f => !f)}>
      <div
        style={{
          position: "relative",
          height: "200px",
          transformStyle: "preserve-3d",
          transition: "transform 0.55s cubic-bezier(0.4,0.2,0.2,1)",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          cursor: "pointer",
        }}
      >
        <div style={{ backfaceVisibility: "hidden" }}
          className="absolute inset-0 w-full h-full bg-white rounded-[16px] border border-[#E2E2E2] shadow-[0_4px_14px_rgba(0,0,0,0.07)] flex flex-col items-center px-3 pt-5 pb-4">
          <div style={{ width: "90px", height: "90px", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img src={icon} alt="" style={{ width: "72px", height: "72px", objectFit: "contain" }} />
          </div>
          <p style={{ fontFamily: "Figtree, sans-serif" }}
             className="text-[11px] font-semibold text-[#1B1B1B] text-center leading-[16px] whitespace-pre-line mt-2 mb-2 flex-1 flex items-center justify-center">
            {title}
          </p>
          <div className="w-full rounded-[7px] border border-[#FF580E] py-[6px] flex items-center justify-center gap-[4px] flex-shrink-0">
            <span style={{ fontFamily: "Figtree, sans-serif" }} className="text-[13px] font-black text-[#FF580E]">{price}{suffix}</span>
            <ZepIcon size={11} />
          </div>
        </div>
        <div style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}
          className="absolute inset-0 w-full h-full bg-[#FF580E] rounded-[16px] flex items-center justify-center p-4">
          <p style={{ fontFamily: "Figtree, sans-serif" }} className="text-white text-[11px] leading-[16px] text-center font-medium">{description}</p>
        </div>
      </div>
    </div>
  );
}

/* ══ MAIN ══ */
export default function PayOnlySection() {
  const topCards = [
    { title: "CV Unlock -\nAll Candidate",       price: "30",  suffix: "/~", icon: cvUnlockIcon,    description: "Unlock individual candidate profiles of the Job applicants from Zepcruit's talent database." },
    { title: "CV Unlock All +\nCV Rating",        price: "35",  suffix: "/~", icon: cvUnlockAllIcon,  description: "Unlock job applicants and rank the pool against the job description in one go." },
    { title: "Psychometric\nAnalysis",            price: "400",              icon: psychometricIcon,  description: "Add a full psychometric assessment layer revealing professional behaviour." },
    { title: "AI Interview +\nBasic Report",      price: "400",              icon: aiInterviewIcon,   description: "Conduct one full structured AI video interview and receive a baseline candidate report with score and summary." },
  ];

  const bottomCards = [
    { title: "Predictive\nAnalysis",         price: "400", icon: predictiveIcon,  description: "Unlock the full Predictive Hiring Engine: Role Fit Score, Performance Predictability Score, and Good to Hire Score for each candidate." },
    { title: "Anti-Cheat\nProctoring",       price: "400", icon: antiCheatIcon,   description: "Enable full proctoring — flags tab switching, face absence, multiple persons, AI generated answers & other fraud signals." },
    { title: "Behavioural\nSignal Analysis", price: "400", icon: behaviouralIcon, description: "Add real-time emotional and behavioural signal tracking throughout the AI interview." },
    { title: "AI Follow Up\nQuestions",      price: "50",  icon: followupIcon,    description: "Let Zepcruit AI probe deeper on specific responses — adding an adaptive interview layer for the face to face round." },
  ];

  return (
    <section className="w-full bg-white py-12 lg:py-16 overflow-hidden" style={{ fontFamily: "Figtree, sans-serif" }}>
      <div className="max-w-[1200px] mx-auto px-4">

        {/* SECTION HEADING */}
<div className="text-center mb-12">
  <h2
    className="text-[42px] font-[800] text-[#1B1B1B] leading-tight"
    style={{ fontFamily: "Figtree, sans-serif" }}
  >
    Pay Only For What You Use
  </h2>

  <p
    className="mt-4 text-[18px] text-[#6F6F6F] max-w-[900px] mx-auto"
    style={{ fontFamily: "Figtree, sans-serif" }}
  >
    No annual contracts. No hidden fees. SaaS recruitment pricing that scales
    with your hiring volume.
  </p>
</div>

        {/* ══ MOBILE ══ */}
        <div className="lg:hidden">
          <div className="flex justify-center mt-2 mb-6">
            <div className="bg-white border border-[#E0E0E0] rounded-[10px] px-5 py-3 flex items-center gap-2 shadow-[0_4px_12px_rgba(0,0,0,0.07)]">
              <span className="text-[20px] font-black text-[#FF580E]" style={{ fontFamily: "Figtree, sans-serif" }}>₹1 =</span>
              <ZepIcon size={18} />
              <span className="text-[20px] font-black text-[#FF580E]" style={{ fontFamily: "Figtree, sans-serif" }}>1</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {topCards.map((c, i) => <FlipCardMobile key={i} {...c} />)}
          </div>
          <div className="flex flex-col items-center my-5"><Connector /></div>
          <div className="border border-[#FF580E] rounded-[24px] bg-white px-3 py-4">
            <div className="grid grid-cols-2 gap-3">
              {bottomCards.map((c, i) => <FlipCardMobile key={i} {...c} />)}
            </div>
          </div>
          <div className="relative mt-5 mb-2 bg-white border border-[#FF580E] rounded-[12px] px-5 py-5 overflow-hidden">
            <div className="absolute left-0 top-0 h-full w-[11px] bg-[#FF580E] rounded-l-[11px]" />
            <p className="text-[13px] leading-[20px] italic text-[#6F6F6F] font-semibold ml-3" style={{ fontFamily: "Figtree, sans-serif" }}>
              Every Zepcruit's purchase comes with Zepcoins — a flexible credit system that lets your team allocate budget exactly where it's needed.
            </p>
            <p className="mt-3 text-[13px] leading-[20px] italic text-[#6F6F6F] font-semibold ml-3" style={{ fontFamily: "Figtree, sans-serif" }}>
              Only running AI interviews this month? Spend on that. Want to add predictive analytics for your senior hires? Layer it in. No locked modules, no paying for tools you are not using.
            </p>
          </div>
        </div>

        {/* ══ DESKTOP ══ */}
        <div className="hidden lg:block">

          {/* TOP ROW */}
          <div className="flex items-start gap-6">

            {/* 4 cards — each naturally sized, not stretched */}
            <div className="flex gap-4 flex-1">
              {topCards.map((c, i) => (
               <div key={i} style={{ width: "175px", flexShrink: 0 }}>
                  <FlipCard {...c} />
                </div>
              ))}
            </div>

            {/* Z logo column */}
            <div className="flex-1 relative flex items-start justify-center" style={{ minHeight: "280px" }}>

              {/* Big outline Z — positioned to the right, large */}
              <div
  style={{
    position: "absolute",
    right: "40px",
    top: "-10px",
    width: "220px",
    height: "240px",
  }}
>
                <BigZ />
              </div>

              {/* ₹1 = Z1 badge — left of the Z, with orange left bar */}
              <div
                className="absolute flex items-center overflow-hidden bg-white rounded-[10px] shadow-[0_4px_18px_rgba(0,0,0,0.10)]"
                style={{ left: "105px", top: "75px", zIndex: 10 }}
              >
                <div style={{ width: "10px", alignSelf: "stretch", background: "#FF580E", flexShrink: 0 }} />
                <div className="flex items-center gap-2 px-4 py-3">
                  <span className="text-[34px] font-black leading-none text-[#FF580E]" style={{ fontFamily: "Figtree, sans-serif" }}>1</span>
                  <span className="text-[34px] font-black leading-none text-[#FF580E]" style={{ fontFamily: "Figtree, sans-serif" }}>₹</span>
                  <span className="text-[34px] font-black leading-none text-[#FF580E]" style={{ fontFamily: "Figtree, sans-serif" }}>=</span>
                  <span className="text-[34px] font-black leading-none text-[#FF580E]" style={{ fontFamily: "Figtree, sans-serif" }}>1</span>
                  <ZepIcon size={25} color="#FF580E" />
                </div>
              </div>

            </div>
          </div>

          {/* CONNECTOR — exactly under center of 4th card: 3×175 + 3×20gap + half of 175 = 672.5px from left */}
          <div style={{ marginLeft: "155px", marginTop: "-50px" }} className="flex justify-center">
            <Connector />
          </div>

          {/* BOTTOM ROW */}
          <div className="flex items-stretch gap-5 mt-[5px]">

            {/* Info panel */}
            <div
              className="relative flex-shrink-0 bg-white border border-[#FF580E] rounded-[14px] overflow-hidden flex flex-col justify-center py-7 px-5"
              style={{ width: "260px" }}
            >
              <div className="absolute left-0 top-0 h-full w-[11px] bg-[#FF580E] rounded-l-[13px]" />
              <p className="text-[14px] leading-[22px] italic text-[#6F6F6F] font-semibold ml-3" style={{ fontFamily: "Figtree, sans-serif" }}>
                Every Zepcruit's purchase comes with Zepcoins — a flexible credit system that lets your team allocate budget exactly where it's needed.
              </p>
              <p className="mt-4 text-[14px] leading-[22px] italic text-[#6F6F6F] font-semibold ml-3" style={{ fontFamily: "Figtree, sans-serif" }}>
                Only running AI interviews this month? Spend on that. Want to add predictive analytics for your senior hires? Layer it in. No locked modules, no paying for tools you are not using.
              </p>
            </div>

            {/* Bottom 4 cards */}
            <div className="flex-1 border border-[#FF580E] rounded-[20px] bg-white px-5 py-5">
              <div className="grid grid-cols-4 gap-4 h-full">
                {bottomCards.map((c, i) => <FlipCard key={i} {...c} />)}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
