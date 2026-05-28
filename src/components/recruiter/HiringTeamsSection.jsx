// import Container from "../common/Container";
import hiringTeamImage from "../../assets/OnePlatformVector.svg";

export default function HiringTeamsSection() {
  return (
    <section className="bg-[#FFFFFF] py-18 overflow-hidden">

      <div className="w-full px-4 md:px-[200px]">
        <div className="hiring-grid grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

          {/* LEFT SIDE */}
          <div className="flex flex-col">

            {/* HEADING */}
            <div>
              <h2
                className="text-[34px] md:text-[48px] hiring-title leading-[1.1] tracking-[-1px] font-[700] text-left"
                style={{ fontFamily: "Figtree, sans-serif" }}
              >
                <span className="text-[#111111]">One Platform.</span>
                <br />
                <span className="text-[#111111]">Built for</span>{" "}
                <span className="text-[#FF5A0A]">Every Hiring Team.</span>
              </h2>
              <p
                className="mt-2 text-[18px] hiring-subtitle text-[#6B6B6B] font-medium text-left"
                style={{ fontFamily: "Figtree, sans-serif" }}
              >
                Tailored outcomes for leadership, recruiters, and agencies.
              </p>
            </div>

            {/* PURPLE CARD — flex-1 makes it fill remaining height */}
           <div className="mt-10 flex-1 bg-white border-[2px] border-[#631FEE] rounded-[28px] px-6 md:px-12 py-8 md:py-14 md:min-h-[700px] shadow-[6px_8px_0px_#6D28FF] flex flex-col justify-center">

              <h3
                className="text-[32px] leading-[1.1] font-[600] text-[#111111]"
                style={{ fontFamily: "Figtree, sans-serif" }}
              >
                For CHROs and Corporate HR Leadership
              </h3>

              <p
                className="hiring-card-text mt-5 text-[16px] leading-[30px] text-[#6B6B6B] font-medium"
                style={{ fontFamily: "Figtree, sans-serif" }}
              >
                Zepcruit gives leadership the hiring visibility that most
                organisations never have. Every decision is backed by a data
                trail. Every score is explainable to the board. Attrition
                becomes a metric you manage proactively.
              </p>

              <div className="mt-8 ">
                {[
                  "Reduce annual attrition costs with predictive role fit data before the hire is made",
                  "Show leadership where every hiring rupee goes - with ROI reports that speak the CFO's language",
                  "Build a hiring process that scales with your business without scaling your TA headcount",
                  "Protect employer brand with a candidate experience that is structured, fair, and professionally handled",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-[22px] h-[22px] rounded-full bg-[#7B35FF] flex items-center justify-center text-white text-[12px] shrink-0 mt-[2px]">
                      ✓
                    </div>
                    <p
                      className="text-[15px] leading-[28px] text-[#555555] font-medium"
                      style={{ fontFamily: "Figtree, sans-serif" }}
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              {/* Button pushed to bottom */}
              <div className="mt-auto pt-10">
                <button
                  className="hiring-btn w-full md:w-auto bg-[#6D28FF] hover:bg-[#5d1ef0] transition-all duration-300 text-white px-6 py-3 rounded-full text-[16px] mt-3 font-bold tracking-[0.3px] shadow-[0_6px_16px_rgba(109,40,255,0.35)]"
                  style={{ fontFamily: "Figtree, sans-serif" }}
                  onClick={() => window.open("https://zepcruit.zohobookings.in/#/300603000000133050", "_blank")}
                >
                  BOOK A DEMO <i className="fa-solid fa-arrow-right ml-2"></i>
                </button>
              </div>

            </div>

            {/* IMAGE */}
            <div className="mt-8 md:mt-16 flex justify-center">
              <img
                src={hiringTeamImage}
                alt="Hiring partnership illustration"
                className="w-full max-w-[220px] md:max-w-[360px] object-contain"
              />
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-10">

            {/* CARD 1 */}
           <div className="bg-white border-[2px] hiring-card border-[#FF5A0A] rounded-[28px] px-6 md:px-8 py-6 md:py-8 md:h-[700px] shadow-[6px_8px_0px_#FF5A0A]">
              <h3
                className="text-[32px] hiring-card-title leading-[1.1] font-[600] text-[#111111]"
                style={{ fontFamily: "Figtree, sans-serif" }}
              >
                For Talent Acquisition Heads and Recruiting Teams
              </h3>
              <p
                className="hiring-card-text mt-5 text-[16px] leading-[28px] text-[#6B6B6B] font-medium"
                style={{ fontFamily: "Figtree, sans-serif" }}
              >
                Zepcruit is the TA team's force multiplier. It handles everything
                your team Should not have to spend time on - so your energy goes
                into the conversations that actually close great hires.
              </p>
              <div className="mt-8 space-y-2">
                {[
                  "Process the entire applicant pool in hours - not days of manual CV review",
                  "Meet only fully pre-vetted candidates in your final rounds - no more wasted interview slots",
                  "Review video profiles and behavioural insights before scheduling a single human interview",
                  "Fill critical roles up to 4x faster - without sacrificing quality of assessment",
                  "Share candidate intelligence reports instantly with every stakeholder in the decision",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-[22px] h-[22px] rounded-full bg-[#FF5A0A] flex items-center justify-center text-white text-[12px] shrink-0 mt-[2px]">
                      ✓
                    </div>
                    <p
                      className="text-[15px] leading-[28px] text-[#555555] font-medium"
                      style={{ fontFamily: "Figtree, sans-serif" }}
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-10 hiring-card">
                <button
                  className="hiring-btn w-full md:w-auto bg-[#FF5A0A] hover:bg-[#EB5200] transition-all duration-300 text-white px-8 py-3 rounded-full text-[16px] font-bold tracking-[0.3px] shadow-[0_6px_16px_rgba(255,90,10,0.35)]"
                  style={{ fontFamily: "Figtree, sans-serif" }}
                >
                  HIRE NOW <i className="fa-solid fa-arrow-right ml-2"></i>
                </button>
              </div>
            </div>

            {/* CARD 2 */}
           <div className="bg-white border-[2px] hiring-card border-[#FF5A0A] rounded-[28px] px-6 md:px-12 pt-[50px] pb-[50px] md:min-h-[760px] shadow-[6px_8px_0px_#FF5A0A] flex flex-col justify-center">
              <h3
                className="text-[24px] md:text-[32px] hiring-card-title leading-[1.1] font-[600] text-[#111111]"
                style={{ fontFamily: "Figtree, sans-serif" }}
              >
                For Recruitment Agencies - White-Label
              </h3>
              <p
                className="hiring-card-text mt-5 text-[16px] leading-[30px] text-[#6B6B6B] font-medium"
                style={{ fontFamily: "Figtree, sans-serif" }}
              >
                Zepcruit is available as a white-label AI recruitment platform
                for agencies who want to offer enterprise-grade hiring intelligence
                to their clients — under your own brand. Deploy Zepcruit's full
                stack as your proprietary technology. Deliver candidate intelligence
                reports that no competitor can match.
              </p>
              <div className="mt-8 space-y-3">
                {[
                  "Rebrand Zepcruit as your agency's proprietary AI hiring technology",
                  "Offer AI-powered screening, structured interviews, and predictive analytics to your clients",
                  "Deliver candidate reports that give your agency an unfair advantage over manual recruiters",
                  "Reduce time-to-placement dramatically - and make that number part of your agency's pitch",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-[22px] h-[22px] rounded-full bg-[#FF5A0A] flex items-center justify-center text-white text-[12px] shrink-0 mt-[2px]">
                      ✓
                    </div>
                    <p
                      className="text-[15px] leading-[28px] text-[#555555] font-medium"
                      style={{ fontFamily: "Figtree, sans-serif" }}
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <button
                  className="hiring-btn w-full md:w-auto bg-[#FF5A0A] hover:bg-[#EB5200] transition-all duration-300 text-white px-8 py-3 rounded-full text-[16px] font-bold tracking-[0.3px] shadow-[0_6px_16px_rgba(255,90,10,0.35)]"
                  style={{ fontFamily: "Figtree, sans-serif" }}
                  onClick={() => window.open("https://forms.zohopublic.in/rohitzepc1/form/WhiteLabelPartnerForm/formperma/lUXM6ZpThL-FwG_-469gVJq5OeO3xv4uLnFjPY3DSw8", "_blank")}
                >
                  ENQUIRE ABOUT WHITE LABEL LICENSING <i className="fa-solid fa-arrow-right ml-2"></i>
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}