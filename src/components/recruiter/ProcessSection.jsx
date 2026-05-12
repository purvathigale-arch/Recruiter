import Container from "../common/Container";

import processImage from "../../assets/DeskGirlVector.svg";

export default function ProcessSection() {
  return (
    <section className="bg-[#FFFFFF] py-24 overflow-hidden">
      <Container>

        {/* HEADING */}
        <div className="text-center">

          <h2
            className="text-[48px] font-black tracking-[-2px] leading-[1.05]"
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

          {/* SUBTEXT */}
          <p
            className="mt-4 text-[22px] text-[#9A9A9A] font-medium"
            style={{
              fontFamily: "Figtree, sans-serif",
            }}
          >
            From sourcing to final shortlists. One platform. No switching between tools.
          </p>

        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-[1.05fr_0.95fr] gap-8 mt-16 items-start max-w-[1180px] mx-auto">

          {/* LEFT SIDE */}
          <div>

            {/* ITEM 1 */}
            <div>

              <h3
                className="text-[#FF5A0A] text-[32px] font-black tracking-[-0.5px]"
                style={{
                  fontFamily: "Figtree, sans-serif",
                }}
              >
                1. Source
              </h3>

              <p
                className="mt-1 text-[21px] leading-[25px] text-[#111111] font-medium max-w-[720px]"
                style={{
                  fontFamily: "Figtree, sans-serif",
                }}
              >
              
 Pull from Zepcruit's pan-India talent database or upload your own applicant pool. Either way, the platform works around your process – not the other way around.
              </p>

            </div>

            {/* ITEM 2 */}
            <div className="mt-6">

              <h3
                className="text-[#FF5A0A] text-[32px] font-black tracking-[-0.5px]"
                style={{
                  fontFamily: "Figtree, sans-serif",
                }}
              >
                2. CV Screen AI Powered & Contextual
              </h3>

              <p
                className="mt-1 text-[21px] leading-[25px] text-[#111111] font-medium max-w-[720px]"
                style={{
                  fontFamily: "Figtree, sans-serif",
                }}
              >
               
This is not keyword matching. Zepcruit's AI reads every CV contextually, the way a sharp senior recruiter would – against your job description. Each candidate gets a ranking and a rationale. No ATS backlogs. No gut calls. Every shortlist you see is one you can defend..
              </p>

            </div>

            {/* ITEM 3 */}
            <div className="mt-6">

              <h3
                className="text-[#FF5A0A] text-[32px] font-black tracking-[-0.5px]"
                style={{
                  fontFamily: "Figtree, sans-serif",
                }}
              >
                3. Tailored AI Interview with Culture evaluation
              </h3>

              <p
                className="mt-1 text-[21px] leading-[25px] text-[#111111] font-medium max-w-[720px]"
                style={{
                  fontFamily: "Figtree, sans-serif",
                }}
              >
                Your shortlisted candidates get interviewed – by Zepcruit's AI, on their own time, without anyone from your team needing to show up. Every interview is tailored for the role. Behavioural questions, skill probing, real-time proctoring. Candidates are not rushed or inconvenienced by an intimidating AI bot. Thus, you get authentic candidate responses. Everyone wins.
              </p>

            </div>

            {/* ITEM 4 */}
            <div className="mt-6">

              <h3
                className="text-[#FF5A0A] text-[32px] font-black tracking-[-0.5px]"
                style={{
                  fontFamily: "Figtree, sans-serif",
                }}
              >
                4. Predictive Hiring Report : Zepcruit's Crown Jewel
              </h3>

              <p
                className="mt-1 text-[21px] leading-[25px] text-[#111111] font-medium max-w-[720px]"
                style={{
                  fontFamily: "Figtree, sans-serif",
                }}
              >
             This is where it gets interesting. After every AI interview, you get a full hiring intelligence report – role fit, performance prediction, psychometric personality profile, behavioural signals, and a hire recommendation. All of it backed by data. You are not just seeing how someone interviewed but also how they will actually perform in the role.
              </p>

            </div>

            {/* ITEM 5 */}
            <div className="mt-6">

              <h3
                className="text-[#FF5A0A] text-[32px] font-black tracking-[-0.5px]"
                style={{
                  fontFamily: "Figtree, sans-serif",
                }}
              >
                5. Final Round
              </h3>

              <p
                className="mt-1 text-[21px] leading-[25px] text-[#111111] font-medium max-w-[720px]"
                style={{
                  fontFamily: "Figtree, sans-serif",
                }}
              >
                By the time you meet a candidate, You are not starting from scratch. You know how they think, how they work, where they will shine. The final interview becomes a conversation, not an interrogation. that is predictive hiring done right..
              </p>

            </div>

            {/* BUTTON */}
            <div className="mt-10">

              <button
                className="bg-[#FF5A0A] hover:bg-[#ea4f00] transition-all duration-300 text-white text-[16px] font-bold px-8 py-4 rounded-full tracking-[0.3px]"
                style={{
                  fontFamily: "Figtree, sans-serif",
                }}
              >
                HIRE NOW
              </button>

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-end">


            <img
              src={processImage}
              alt="AI hiring process illustration"
              className="relative z-10 w-[692px] h-[746px] object-contain mt-50"
            />

          </div>

        </div>

      </Container>
    </section>
  );
}