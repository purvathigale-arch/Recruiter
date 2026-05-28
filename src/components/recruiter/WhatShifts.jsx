// FILE NAME: src/components/recruiters/WhatShifts.jsx

import { useRef, useState, useEffect } from "react";

import Container from "../common/Container";

import ellipse4 from "../../assets/Ellipse-4.svg";
import ellipse5 from "../../assets/Ellipse-5.svg";
import ellipse6 from "../../assets/Ellipse-6.svg";

export default function WhatShifts() {

  const sliderRef = useRef(null);

  /* FALSE = LEFT ACTIVE
     TRUE = RIGHT ACTIVE */
  const [isRightActive, setIsRightActive] =
    useState(false);

  const [canScrollLeft, setCanScrollLeft] =
    useState(false);

  const [canScrollRight, setCanScrollRight] =
    useState(true);

  /* UPDATE ARROWS */
  const updateScrollButtons = () => {

    const slider = sliderRef.current;

    if (!slider) return;

    const maxScrollLeft =
      slider.scrollWidth - slider.clientWidth;

    setCanScrollLeft(slider.scrollLeft > 5);

    setCanScrollRight(
      slider.scrollLeft < maxScrollLeft - 5
    );

    if (slider.scrollLeft >= maxScrollLeft - 10) {

      setIsRightActive(true);

    } else {

      setIsRightActive(false);

    }
  };

  /* MOVE FULL RIGHT */
  const handleRight = () => {

    const slider = sliderRef.current;

    slider.scrollBy({
      left: 320,
      behavior: "smooth",
    });

    setTimeout(updateScrollButtons, 400);
  };

  /* MOVE FULL LEFT */
  const handleLeft = () => {

    const slider = sliderRef.current;

    slider.scrollBy({
      left: -320,
      behavior: "smooth",
    });

    setTimeout(updateScrollButtons, 400);
  };

  useEffect(() => {

    updateScrollButtons();

    const slider = sliderRef.current;

    if (!slider) return;

    slider.addEventListener(
      "scroll",
      updateScrollButtons
    );

    return () => {

      slider.removeEventListener(
        "scroll",
        updateScrollButtons
      );

    };

  }, []);

  const cards = [
    {
      number: "01",

      title:
        "Measurable reduction in mis-hires and attrition",

      description:
        "Backed by a full audit trail your leadership team can see and act on",
    },

    {
      number: "02",

      title:
        "60–70% reduction in screening time",

      description:
        "Zepcruit processes your applicant pool in hours",
    },

    {
      number: "03",

      title:
        "50–70% cost savings per hire",

      description:
        "Fewer rounds, fewer wrong decisions, faster closures and the numbers compound fast",
    },

    {
      number: "04",

      title:
        "Hiring cycle cut from months to under 15 days",

      description:
        "Automates with intelligent candidate reports and gives your TA edge of team",
    },

    {
      number: "05",

      title:
        "Scale from 5 to 500 roles without adding headcount",

      description:
        "Zepcruit's AI interview with API integration handles the pipeline without changing your workflow.",
    },
  ];

  return (

    <section className="bg-[#FFFFFF] py-20 overflow-hidden">

      <Container>

        {/* HEADING */}
        <div className="text-center">

          <h2
            className="
              text-[48px]
              font-[700]
              tracking-[-2px]
              leading-[1.05]
            "
            style={{
              fontFamily: "Figtree, sans-serif",
            }}
          >
            <span className="text-[#111111]">
              What Shifts When
            </span>{" "}

            <span className="text-[#FF5A0A]">
              Zepcruit Takes Over
            </span>

          </h2>

        </div>

        {/* MAIN WRAPPER */}
<<<<<<< HEAD
        <div className="shift-slider relative mt-12 max-w-[1000px] mx-auto">
=======
        <div className="relative mt-12 max-w-[1000px] mx-auto">
>>>>>>> 078a62320767f4a6388e8d462a1e1f36fd2756fc

          {/* SHAPES */}
          <img
            src={ellipse4}
            alt=""
            className="
              absolute
              -left-[250px]
              -top-[100px]
              w-[320px]
              z-0
            "
          />

          <img
            src={ellipse5}
            alt=""
            className="
              absolute
              right-[250px]
              -top-[55px]
              w-[90px]
              z-0
            "
          />

          <img
            src={ellipse6}
            alt=""
            className="
              absolute
              -right-[170px]
              bottom-[-40px]
              w-[230px]
              z-0
            "
          />

          {/* LEFT ARROW */}
          <button
            onClick={handleLeft}
            className={`
<<<<<<< HEAD
              shift-left-arrow
=======
>>>>>>> 078a62320767f4a6388e8d462a1e1f36fd2756fc
              absolute
              left-[-22px]
              top-1/2
              -translate-y-1/2
              z-30
              w-[52px]
              h-[52px]
              rounded-full
              flex
              items-center
              justify-center
              text-[24px]
              shadow-lg
              transition-all
              duration-300
              border-2
              border-[#FFFCF5]

              ${
                canScrollLeft
                  ? "bg-[#FF5A0A] text-white"
                  : "bg-white text-black border border-[#D9D9D9]"
              }
            `}
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>

          {/* RIGHT ARROW */}
          <button
            onClick={handleRight}
            className={`
<<<<<<< HEAD
              shift-right-arrow
=======
>>>>>>> 078a62320767f4a6388e8d462a1e1f36fd2756fc
              absolute
              right-[-22px]
              top-1/2
              -translate-y-1/2
              z-30
              w-[52px]
              h-[52px]
              rounded-full
              flex
              items-center
              justify-center
              text-[24px]
              shadow-lg
              transition-all
              duration-300
              border-2
              border-[#FFFCF5]

              ${
                canScrollRight
                  ? "bg-[#FF5A0A] text-white"
                  : "bg-white text-black border border-[#D9D9D9]"
              }
            `}
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>

          {/* BOX */}
          <div
            className="
              relative
              z-10
              border
              border-[#8D8D8D]
              rounded-[28px]
              px-8
              py-14
              bg-[#FFFCF5]
              overflow-hidden
            "
          >

            {/* SLIDER */}
            <div
              className="overflow-hidden"
              onWheel={(e) => {

                e.preventDefault();

                sliderRef.current.scrollLeft +=
                  e.deltaY;

              }}
            >

              <div
  ref={sliderRef}
  className="
    flex
    gap-5
    overflow-x-auto
    scroll-smooth
    pr-[20px]
    pt-[10px]

    [-ms-overflow-style:none]
    [scrollbar-width:none]

    [&::-webkit-scrollbar]:hidden
  "
>

                {cards.map((card, index) => (

                  <div
                    key={index}
                    className="
                      min-w-[255px]
                      bg-white
                      border
                      border-[#FFA77D]
                      rounded-[16px]
                      overflow-hidden
                      shadow-[0_4px_14px_rgba(0,0,0,0.05)]
                      transition-all
                      duration-300
                      hover:-translate-y-2
<<<<<<< HEAD
                      shift-card
=======
>>>>>>> 078a62320767f4a6388e8d462a1e1f36fd2756fc
                    "
                  >

                    {/* TOP BAR */}
                    <div className="h-[7px] bg-[#FF5A0A]" />

                    <div className="px-5 py-5">

                      {/* NUMBER */}
                      <p
                        className="
                          text-[28px]
                          font-black
                          text-black
                          leading-none
                        "
                      >
                        {card.number}
                      </p>

                      {/* SMALL LINE */}
                      <div
                        className="
                          w-[32px]
                          h-[3px]
                          bg-black
                          mt-3
                          mb-5
                        "
                      />

                      {/* TITLE */}
                      <h3
                        className="
                          text-[#FF5A0A]
                          text-[22px]
                          font-black
                          leading-[1.15]
<<<<<<< HEAD
                          min-h-[110px]
                          shift-card-title
=======
                          min-h-[140px]
                      translate-y-[25px]
>>>>>>> 078a62320767f4a6388e8d462a1e1f36fd2756fc
                        "
                        style={{
                          fontFamily: "Figtree, sans-serif",
                        }}
                      >
                        {card.title}
                      </h3>

                      {/* DIVIDER */}
                      <div
                        className="
                          w-full
                          h-[1px]
                          bg-[#D9D9D9]
                         
                          mb-5
                        "
                      />

                      {/* DESCRIPTION */}
                      <p
                        className="
<<<<<<< HEAD
                          shift-card-desc
=======
>>>>>>> 078a62320767f4a6388e8d462a1e1f36fd2756fc
                          text-[18px]
                          leading-[24px]
                          text-[#5E5E5E]
                          font-medium
                        "
                        style={{
                          fontFamily: "Figtree, sans-serif",
                        }}
                      >
                        {card.description}
                      </p>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

        {/* CONTROLS */}
        <div className="flex items-center justify-center gap-10 mt-8">

          {/* PROGRESS BAR */}
          <div
            className="
              relative
              w-[520px]
              h-[5px]
              bg-[#EFE9DB]
              rounded-full
              overflow-hidden
            "
          >

            {/* ORANGE INDICATOR */}
            <div
              className="
                absolute
                top-0
                h-full
                w-[50%]
                bg-[#FF5A0A]
                rounded-full
                transition-all
                duration-500
              "
              style={{
                left: isRightActive
                  ? "50%"
                  : "0%",
              }}
            />

          </div>

        </div>

      </Container>

    </section>
  );
}