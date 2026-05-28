import Container from "../common/Container";

import featureImage from "../../assets/feature-image.svg";

export default function Features() {
  return (
    <section className="bg-[#FFFFFF] py-20 overflow-hidden">
      <Container>

        {/* TOP HEADING */}
        <div className="text-center">

          <h2
            className="text-[52px] font-black tracking-[-2px] leading-[1.05]"
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

        {/* TOP BOX */}
        <div className="relative mt-12 max-w-[980px] mx-auto">

          {/* LEFT CIRCLE */}
          <div className="absolute -left-[140px] -top-[90px] w-[280px] h-[280px] bg-[#E9E5D7] rounded-full z-0" />

          {/* RIGHT CIRCLE */}
          <div className="absolute -right-[110px] bottom-[-20px] w-[150px] h-[150px] bg-[#E9E5D7] rounded-full z-0" />

          {/* MAIN CONTAINER */}
          <div className="relative z-10 border border-[#8A8A8A] rounded-[24px] px-6 py-10 bg-[#FFFCF5]">

<<<<<<< HEAD
            <div className="feature-grid grid grid-cols-4 gap-4">
=======
            <div className="grid grid-cols-4 gap-4">
>>>>>>> 078a62320767f4a6388e8d462a1e1f36fd2756fc

              {/* CARD 1 */}
              <div className="bg-white border border-[#FFB18A] rounded-[12px] overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.04)]">

                <div className="h-[8px] bg-[#FF5A0A]" />

                <div className="px-4 py-4">

                  <p className="text-[28px] font-black text-[#111111] leading-none">
                    01
                  </p>

                  <div className="w-[32px] h-[2px] bg-black mt-3 mb-4" />

                  <h3
                    className="text-[#FF5A0A] text-[20px] font-black leading-[1.1]"
                    style={{
                      fontFamily: "Figtree, sans-serif",
                    }}
                  >
                    Measurable reduction in
                    mis-hires and attrition
                  </h3>

                  <div className="w-full h-[1px] bg-[#D9D9D9] my-4" />

                  <p className="text-[14px] leading-[20px] text-[#5E5E5E] font-medium">
                    Backed by a full audit trail your leadership team can see and act on
                  </p>

                </div>
              </div>

              {/* CARD 2 */}
              <div className="bg-white border border-[#FFB18A] rounded-[12px] overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.04)]">

                <div className="h-[8px] bg-[#FF5A0A]" />

                <div className="px-4 py-4">

                  <p className="text-[28px] font-black text-[#111111] leading-none">
                    02
                  </p>

                  <div className="w-[32px] h-[2px] bg-black mt-3 mb-4" />

                  <h3
                    className="text-[#FF5A0A] text-[20px] font-black leading-[1.1]"
                    style={{
                      fontFamily: "Figtree, sans-serif",
                    }}
                  >
                    60–70% reduction in
                    screening time
                  </h3>

                  <div className="w-full h-[1px] bg-[#D9D9D9] my-4" />

                  <p className="text-[14px] leading-[20px] text-[#5E5E5E] font-medium">
                    Zepcruit processes your applicant pool in hours
                  </p>

                </div>
              </div>

              {/* CARD 3 */}
              <div className="bg-white border border-[#FFB18A] rounded-[12px] overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.04)]">

                <div className="h-[8px] bg-[#FF5A0A]" />

                <div className="px-4 py-4">

                  <p className="text-[28px] font-black text-[#111111] leading-none">
                    03
                  </p>

                  <div className="w-[32px] h-[2px] bg-black mt-3 mb-4" />

                  <h3
                    className="text-[#FF5A0A] text-[20px] font-black leading-[1.1]"
                    style={{
                      fontFamily: "Figtree, sans-serif",
                    }}
                  >
                    50–70% cost savings per
                    hire
                  </h3>

                  <div className="w-full h-[1px] bg-[#D9D9D9] my-4" />

                  <p className="text-[14px] leading-[20px] text-[#5E5E5E] font-medium">
                    Fewer rounds, fewer wrong decisions, faster closures and the numbers compound fast
                  </p>

                </div>
              </div>

              {/* CARD 4 */}
              <div className="bg-white border border-[#FFB18A] rounded-[12px] overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.04)]">

                <div className="h-[8px] bg-[#FF5A0A]" />

                <div className="px-4 py-4">

                  <p className="text-[28px] font-black text-[#111111] leading-none">
                    04
                  </p>

                  <div className="w-[32px] h-[2px] bg-black mt-3 mb-4" />

                  <h3
                    className="text-[#FF5A0A] text-[20px] font-black leading-[1.1]"
                    style={{
                      fontFamily: "Figtree, sans-serif",
                    }}
                  >
                    Hiring cycle cut from
                    days to under 15
                  </h3>

                  <div className="w-full h-[1px] bg-[#D9D9D9] my-4" />

                  <p className="text-[14px] leading-[20px] text-[#5E5E5E] font-medium">
                    Automates with intelligent candidate reports and gives your TA edge of team
                  </p>

                </div>
              </div>

            </div>
          </div>
        </div>

        {/* SLIDER */}
        <div className="flex items-center justify-center gap-10 mt-8">

          {/* LINE */}
          <div className="w-[520px] h-[6px] bg-[#EFE9DB] rounded-full overflow-hidden">

            <div className="w-[70%] h-full bg-[#FF5A0A] rounded-full" />

          </div>

          {/* ARROWS */}
          <div className="flex items-center gap-4">

            <button className="w-[34px] h-[34px] rounded-full border border-[#A0A0A0] flex items-center justify-center text-[#8B8B8B] text-[18px]">
              ←
            </button>

            <button className="w-[34px] h-[34px] rounded-full bg-[#FF5A0A] flex items-center justify-center text-white text-[18px]">
              →
            </button>

          </div>
        </div>

        {/* SECOND SECTION */}
        <div className="relative mt-24 max-w-[1150px] mx-auto">

          {/* BG CIRCLE */}
          <div className="absolute right-[40px] bottom-[20px] w-[280px] h-[280px] bg-[#E9E5D7] rounded-full z-0" />

          {/* HEADING */}
          <div className="relative z-10 text-center">

            <h2
              className="text-[50px] font-black tracking-[-2px] leading-[1.05]"
              style={{
                fontFamily: "Figtree, sans-serif",
              }}
            >
              <span className="text-[#111111]">
                You Set the Bar. Zepcruit Finds
              </span>{" "}

              <span className="text-[#FF5A0A]">
                Who Clears It.
              </span>
            </h2>

            <p className="mt-4 text-[20px] italic text-[#8A8A8A] font-medium">
              From sourcing to offer letter. One platform. No switching between tools.
            </p>
          </div>

          {/* CONTENT */}
          <div className="relative z-10 grid grid-cols-[1.1fr_0.9fr] gap-10 mt-16">

            {/* LEFT */}
            <div>

              {/* ITEM 1 */}
              <div>
                <h3 className="text-[#FF5A0A] text-[32px] font-black">
                  1. Source
                </h3>

                <p className="mt-3 text-[18px] leading-[31px] text-[#111111] font-medium max-w-[760px]">
                  Zepcruit gives you two ways in. Use our growing talent database
                  of candidates sourced across India, or upload your own applicant
                  pool directly. Either way, the platform adapts to how your team
                  already works — no ramp-up, no process change.
                </p>
              </div>

              {/* ITEM 2 */}
              <div className="mt-12">

                <h3 className="text-[#FF5A0A] text-[32px] font-black">
                  2. CV Screen — AI-Powered & Contextual
                </h3>

                <p className="mt-3 text-[18px] leading-[31px] text-[#111111] font-medium max-w-[760px]">
                  Our AI reads every CV the way a senior recruiter would —
                  matching it contextually against your job description,
                  more than just scanning for keywords. Every candidate receives
                  a ranking and a rationale. No applicant tracking system
                  bottlenecks. No unconscious bias. Every shortlist is defensible.
                </p>

              </div>

              {/* ITEM 3 */}
              <div className="mt-12">

                <h3 className="text-[#FF5A0A] text-[32px] font-black">
                  3. Tailored AI Interview — with Culture evaluation
                </h3>

                <p className="mt-3 text-[18px] leading-[31px] text-[#111111] font-medium max-w-[760px]">
                  Every shortlisted candidate goes through a structured,
                  role-specific video interview conducted entirely by Zepcruit's AI —
                  automatically, simultaneously, without anyone from your team needing
                  to be present. Interviews are built around the role, not a generic
                  template. Each session includes behavioural questions, skill probing,
                  and real-time proctoring to ensure every candidate completes it
                  at their own time — keeping the process fair and consistent.
                </p>

              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-end items-end">

              <img
                src={featureImage}
                alt="AI workflow illustration"
                className="w-[420px] object-contain"
              />

            </div>
          </div>
        </div>

      </Container>
    </section>
  );
}