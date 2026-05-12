// FILE NAME: src/components/recruiters/FooterSection.jsx

import React from "react";

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

    <footer className="bg-[#FFFFFF] pt-[24px] pb-[18px]">

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