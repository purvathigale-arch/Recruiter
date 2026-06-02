import Container from "../common/Container";
import problemImage from "../../assets/problem-image.svg";
import icon1 from "../../assets/icon-1.svg";
import icon2 from "../../assets/icon-2.svg";
import icon3 from "../../assets/icon-3.svg";
import icon4 from "../../assets/icon-4.svg";
import HiringCalculator from "./HiringCalculator";
import { useState } from "react";

export default function Problem() {
  const [showCalculator, setShowCalculator] = useState(false);

  return (
    <section className="bg-[#FFFFFF] py-4">
      <Container>

        {/* HEADING */}
        <div className="max-w-[1100px] mx-auto text-center">

          <h2
            className="font-[700] text-[#111111] tracking-[-2px] leading-[1.05]"
            style={{
              fontFamily: "Figtree, sans-serif",
            }}
          >

            {/* LINE 1 */}
           <div className="text-[30px] sm:text-[40px] lg:text-[48px]">
              Every Wrong Hire is not Just a Budget Line.
            </div>

            {/* LINE 2 */}
          <div className="text-[30px] sm:text-[40px] lg:text-[48px] mt-[4px]">

              It's Six Months of{" "}

              <span className="text-[#FF5A0A] ">
                Someone Else Not Getting the Job.
              </span>

            </div>

          </h2>

          {/* SUBTEXT */}
          <p
            className="mt-5 text-[16px] sm:text-[18px] lg:text-[20px] leading-[24px] text-[#8A8A8A] font-medium max-w-[1280px] mx-auto"
            style={{
              fontFamily: "Figtree, sans-serif",
            }}
          >
            Traditional hiring system is broken in a way that is costing organisations
            more than they realise. Not in ways that show up in one meeting but
            cumulatively, in attrition reports, in re-hiring cycles, in TA team burnout,
            and in roles sitting empty while revenue waits.
          </p>
        </div>

        {/* STATS GRID */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-7 mt-12 max-w-[1500px] mx-auto">

  {/* CARD 1 */}
  <div className="bg-[#F8F7EC] min-h-[180px] h-auto rounded-[18px] px-5 py-5 lg:px-8 lg:py-8 shadow-[0_4px_12px_rgba(0,0,0,0.08)] border border-[#ECE7DA] flex items-start gap-5">

    {/* ICON */}
    <div className="shrink-0 mt-[2px]">
      <img
        src={icon1}
        alt="Calendar icon"
        className="w-[42px] h-[42px] object-contain"
      />
    </div>

    {/* CONTENT */}
    <div>

      <h3
        className="text-[#FF5A0A] text-[30px] sm:text-[36px] lg:text-[42px] font-[600] leading-none tracking-[-1.2px]"
        style={{
          fontFamily: "Figtree, sans-serif",
        }}
      >
        38 Days
      </h3>

      <p
        className="text-[16px] sm:text-[18px] lg:text-[20px] font-[500] text-[#111111] leading-[1.15] mt-[2px] tracking-[-0.3px]"
        style={{
          fontFamily: "Figtree, sans-serif",
        }}
      >
        Average Time-To-Hire In India
      </p>

      <p
        className="text-[14px] sm:text-[16px] lg:text-[18px] leading-[20px] text-[#8B8B8B] mt-3 max-w-[460px] font-[500]"
        style={{
          fontFamily: "Figtree, sans-serif",
        }}
      >
        Most of those days disappear into CV screening – which needs Focus, & Focus consumes time
      </p>

    </div>
  </div>

  {/* CARD 2 */}
  <div className="bg-[#F8F7EC] h-[180px] rounded-[18px] px-8 py-8 shadow-[0_4px_12px_rgba(0,0,0,0.08)] border border-[#ECE7DA] flex items-start gap-5">

    {/* ICON */}
    <div className="shrink-0 mt-[2px]">
      <img
        src={icon4}
        alt="Money icon"
        className="w-[42px] h-[42px] object-contain"
      />
    </div>

    {/* CONTENT */}
    <div>

      <h3
        className="text-[#FF5A0A] text-[42px] font-[600] leading-none tracking-[-1.2px]"
        style={{
          fontFamily: "Figtree, sans-serif",
        }}
      >
        ₹60,000
      </h3>

      <p
        className="text-[20px] font-[500] text-[#111111] leading-[1.15] mt-[2px] tracking-[-0.3px]"
        style={{
          fontFamily: "Figtree, sans-serif",
        }}
      >
        Average Cost Per Hire
      </p>

      <p
        className="text-[18px] sm:text-[20px] lg:text-[22px] leading-[24px] text-[#8B8B8B] mt-3 max-w-[460px] font-[500]"
        style={{
          fontFamily: "Figtree, sans-serif",
        }}
      >
        A bad hire costs 3x more. Multiply that across a year.
      </p>

    </div>
  </div>

  {/* CARD 3 */}
  <div className="bg-[#F8F7EC] h-[180px] rounded-[18px] px-8 py-8 shadow-[0_4px_12px_rgba(0,0,0,0.08)] border border-[#ECE7DA] flex items-start gap-5">

    {/* ICON */}
    <div className="shrink-0 mt-[2px]">
      <img
        src={icon2}
        alt="Mail icon"
        className="w-[42px] h-[42px] object-contain"
      />
    </div>

    {/* CONTENT */}
    <div>

      <h3
        className="text-[#FF5A0A] text-[42px] font-[600] leading-none tracking-[-1.2px]"
        style={{
          fontFamily: "Figtree, sans-serif",
        }}
      >
        50-70%
      </h3>

      <p
        className="text-[20px] font-[500] text-[#111111] leading-[1.15] mt-[2px] tracking-[-0.3px]"
        style={{
          fontFamily: "Figtree, sans-serif",
        }}
      >
        Of Annual Salary
      </p>

      <p
        className="text-[14px] sm:text-[16px] lg:text-[18px] leading-[20px] text-[#8B8B8B] mt-3 max-w-[460px] font-[500]"
        style={{
          fontFamily: "Figtree, sans-serif",
        }}
      >
        Lost when a wrong hire leave within 6-12 months.
        The cost leadership never sees on slide.
      </p>

    </div>
  </div>

  {/* CARD 4 */}
  <div className="bg-[#F8F7EC] h-[180px] rounded-[18px] px-8 py-8 shadow-[0_4px_12px_rgba(0,0,0,0.08)] border border-[#ECE7DA] flex items-start gap-5">

    {/* ICON */}
    <div className="shrink-0 mt-[2px]">
      <img
        src={icon3}
        alt="Clock icon"
        className="w-[42px] h-[42px] object-contain"
      />
    </div>

    {/* CONTENT */}
    <div>

      <h3
        className="text-[#FF5A0A] text-[42px] font-[600] leading-none tracking-[-1.2px]"
        style={{
          fontFamily: "Figtree, sans-serif",
        }}
      >
        70%
      </h3>

      <p
        className="text-[20px] font-[500] text-[#111111] leading-[1.15] mt-[2px] tracking-[-0.3px]"
        style={{
          fontFamily: "Figtree, sans-serif",
        }}
      >
        Of Recruiter Time
      </p>

      <p
        className="text-[14px] sm:text-[16px] lg:text-[18px] leading-[20px] text-[#8B8B8B] mt-3 max-w-[480px] font-[500]"
        style={{
          fontFamily: "Figtree, sans-serif",
        }}
      >
        Spent on work that require “little to none” human judgement - creating burnout and bottlenecks.
      </p>

    </div>
  </div>

</div>

        {/* BOTTOM SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.55fr_1.45fr] gap-8 items-center mt-14 max-w-[1536px] mx-auto">
          {/* IMAGE */}
          <div className="flex justify-center items-end">

            <img
              src={problemImage}
              alt="Business analytics illustration"
            className="w-[220px] sm:w-[280px] lg:w-[350px] mt-2 object-contain"
            />

          </div>

          {/* RIGHT BOX */}
       {/* RIGHT BOX */}
<div className="border border-[#C6AE63] rounded-[30px] px-5 py-6 lg:px-10 lg:py-10 min-h-[350px] h-auto">

  <h3
    className="text-[24px] sm:text-[28px] lg:text-[32px] font-[700] tracking-[-1px] leading-[1.12]"
    style={{
      fontFamily: "Figtree, sans-serif",
    }}
  >
    <span className="text-[#FF5A0A]">
      For CHROs:
    </span>{" "}
    <span className="text-[#111111]">
      What this means at the leadership level
    </span>
  </h3>

  <p className="mt-5 text-[16px] sm:text-[18px] lg:text-[20px] leading-[24px] lg:leading-[28px] text-[#7A7A7A] font-medium">
    Industry attrition averages 17.1% across sectors. At that rate,
    a 500-person organisation replaces 85 people annually.

    If even 30% of those are wrong hires, the compounding cost -
    in re-hiring, lost productivity, and team disruption -
    exceeds ₹2–3 crore a year.
  </p>

  <button
    className="
      bg-[#FF5A0A]
      hover:bg-[#eb4f00]
      transition-all
      duration-300
      text-white
      font-bold
      text-[14px]
      lg:text-[16px]
      px-5
      lg:px-6
      py-3
      rounded-full
      tracking-[0.3px]
      w-full
      sm:w-auto
    "
    onClick={() => setShowCalculator(true)}
  >
    CHECK HOW MUCH YOU ARE LOSING
  </button>

  <p className="text-[16px] text-[#8B8B8B] italic mt-3">
    In 30 seconds.
  </p>

</div>
          </div>
      

      </Container>

      {showCalculator && <HiringCalculator onClose={() => setShowCalculator(false)} />}
    </section>
  );
}