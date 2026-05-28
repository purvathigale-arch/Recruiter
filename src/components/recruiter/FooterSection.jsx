// FILE NAME: src/components/recruiters/FooterSection.jsx

import React from "react";
import orangeShape from "../../assets/Pattern.svg";

/* IMPORT YOUR LOGO IMAGE */
import footerLogo from "../../assets/Zepcruit-logo.png";


/* SOCIAL ICONS */
import {
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import { IoLogoWhatsapp } from "react-icons/io";

export default function FooterSection() {

  return (

    <footer className="relative bg-[#FFFFFF] pt-[24px] pb-[-20px] overflow-hidden">

      
 {/* LEFT SHAPE */}

<img
  src={orangeShape}
  alt="Orange shape"
  className="
    absolute
    left-[-200px]
    top-[-68px]
    w-[540px]
    z-0
  "
/>  

       {/* CTA BOX */}
        <div
          className="relative z-10 mt-[40px] mb-[160px] border-[2px] border-[#FF5A0A] rounded-[28px] bg-[linear-gradient(180deg,_#F6E7E1_0%,_#FAEEE8_28%,_#FDF5F1_62%,_#FFFDFD_100%)] px-[55px] py-[34px] text-center max-w-[1000px] mx-auto"
        >
          <h3
            className="text-[32px] leading-[1.15] tracking-[-0.6px] font-black text-black"
            style={{ fontFamily: "Figtree, sans-serif" }}
          >
            Your Next Great Hire Should not Be a Gamble.
          </h3>
          <p
            className="mt-4 text-[20px] italic leading-[27px] text-[#666666] max-w-[620px] mx-auto font-medium"
            style={{ fontFamily: "Figtree, sans-serif" }}
          >
            Zepcruit is India's AI hiring intelligence platform built for organisations that take the cost of a wrong hire seriously.
          </p>
          <button
            className="mt-5 bg-[#FF5A0A] text-white rounded-full px-7 py-[10px] text-[16px] font-bold transition-all hover:scale-[1.03]"
            style={{ fontFamily: "Figtree, sans-serif" }}
            onClick={() => window.open("https://zepcruit.zohobookings.in/#/300603000000133050", "_blank")}
          >
            BOOK A DEMO
          </button>
          <div className="mt-3">
            <p className="text-[18px] italic text-[#7A7A7A]" style={{ fontFamily: "Figtree, sans-serif" }}>
              30 Minutes. A Live Walkthrough.
            </p>
            <p className="text-[18px] italic text-[#9A9A9A] mt-[2px]" style={{ fontFamily: "Figtree, sans-serif" }}>
              A Sample Candidate Report — Tailored To A Role You are Currently Hiring For
            </p>
          </div>
        </div>

    



      {/* TOP BORDER */}
      <div className="max-w-[1180px] mx-auto border-t border-[#9B9B9B] pt-[20px]">

        <div className="flex items-center justify-between">

          {/* LEFT SIDE */}
          <div>

            {/* LOGO */}
            <img
              src={footerLogo}
              alt="Zepcruit Logo"
              className="w-[170px] object-contain"
            />

            {/* LINKS */}
            <div className="flex items-center gap-7 mt-[12px]">

              {[
                "Privacy Policy",
                "Terms & Conditions",
                "Contact Us",
              ].map((item, index) => (

                <button
                  key={index}
                  className="
                    text-[17px]
                    text-[#2F2F2F]
                    hover:text-[#FF5A0A]
                    transition-all
                    font-200px
              
                  "
                  style={{
                    fontFamily: "Figtree, sans-serif",
                  }}
                >
                  {item}
                </button>

              ))}

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col items-end">

            {/* SOCIALS */}
            <div className="flex items-center gap-5">

              {[
                <FaInstagram />,
                <IoLogoWhatsapp />,
                <FaLinkedinIn />,
                <FaTwitter />,
                <FaYoutube />,
              ].map((icon, index) => (

                <button
                  key={index}
                  className="
                    text-black
                    text-[24px]
                    hover:text-[#FF5A0A]
                    transition-all
                  "
                >
                  {icon}
                </button>

              ))}

            </div>

            {/* COPYRIGHT */}
            <p
              className="
                mt-[16px]
                text-[12px]
                text-[#777777]
                font-medium
              "
              style={{
                fontFamily: "Figtree, sans-serif",
              }}
            >
              © Copyright 2026 Zepcruit. All Rights Reserved.
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}