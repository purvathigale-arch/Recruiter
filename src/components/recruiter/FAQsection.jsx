import React, { useState } from "react";

/* SVGs */
import faqQuestionSvg from "../../assets/faq-1.svg";
import faqPeopleSvg from "../../assets/faq-2.svg";

/* ICONS */
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const faqs = [
    {
      question: "What is zepcruit and how does it work?",
      answer:
        "Zepcruit is an end-to-end AI-powered hiring platform that automates recruitment from CV sourcing, CV screening to tailored AI video interviews and predictive candidate evaluation. It eliminates manual shortlisting, removes the need for 1–3 preliminary interview rounds, and reduces your hiring cycle from 25–38 days to just 10–15 days - with zero scheduling required for the initial rounds.",
    },

    {
      question: "How does AI Interview process work on Zepcruit?",
      answer:
        "Zepcruit conducts asynchronous AI video interviews - no scheduling, no live interviewer needed. The candidate receives a link via email and WhatsApp, answers AI-generated questions on video at their convenience (anytime, day or night), and a comprehensive interview report is ready in 15–20 minutes - including scores, transcript, video recording, behaviour analysis, Anti cheat proctoring and much more.responses automatically.",
    },

    {
      question:
        "How is Zepcruit different from Naukri, LinkedIn, or a traditional ATS?",
      answer:
        "Naukri and LinkedIn are sourcing platforms - they stop at CVs. A traditional ATS is a tracking tool. Zepcruit is the evaluation layer in between: automated CV ranking, AI video interviews, anti-cheat proctoring, psychometric role-fit assessment, and a Predictive Performance Index. It complements your existing ATS (Zoho Recruit, Darwinbox, Keka, PeopleStrong) rather than replacing it.",
    },

    {
      question:
        "How does AI-powered CV screening and ranking work?",
      answer:
        "Zepcruit's AI CV screening contextually matches every uploaded resume against the Job Description using configurable priority sliders - skills, experience, education, and more. Each CV is ranked with a score and an explainable rationale. You can screen up to 500 CVs per role and receive a ranked shortlist - no manual reading required.",
    },

    {
      question:
        "What is Interview-as-a-Service (IaaS) and who should use it?",
      answer:
        "Interview-as-a-Service allows companies to automate first-round interviews at scale without requiring recruiters to manually schedule or conduct them.",
    },

    {
      question:
        "Can Zepcruit detect cheating during online AI interviews?",
      answer:
        "Yes. Zepcruit's multi-layer proctoring detects tab switching (100% accuracy), second face or voice in frame, and AI-generated answers. Every violation is flagged with a timestamp, question number, and a video clip reference so recruiters can verify instantly. Repeated integrity violations also impact a candidate's Predictive Performance Index over time.",
    },

    {
      question:
        "What is the Psychometric-Based Role Fit Assessment?",
      answer:
        "Not every skilled candidate is the right fit. Zepcruit's psychometric assessment evaluates candidate personality and behavioural traits against the role requirements – and converts it into a Role Fit Score. You get a clear, data-backed signal on whether this person will thrive in the job, before you make the offer.",
    },

    {
      question:
        "What does the AI interview report include?",
      answer:
        "Every Zepcruit report includes: an overall interview score, question-wise scores with evaluation rationale, full video recording, transcript, emotion and communication analysis, anti-cheat flags, and three predictive indexes – Role Fit Score, Performance Predictability Score, and Good to Hire indicator. Recruiters get a complete decision-support package, not just a number.",
    },

    {
      question: "How much does Zepcruit cost?",
      answer:
        "Zepcruit's AI recruitment platform runs on a flexible credit-based pricing model. Purchase from any of the three packages - ₹5,000, ₹50,000, or ₹99,999. The top package includes 5% bonus credits, giving your hiring team more value at scale. Credits work across all features - CV screening, AI interviews, and candidate evaluation etc. Visit our [Pricing Page] for a full breakdown..",
    },

    {
      question: "Is candidate data secure on Zepcruit?",
      answer:
        "Your data is in safe hands. All candidate information on Zepcruit is stored on Microsoft Azure cloud servers - one of the world's most trusted enterprise cloud platforms. Data is encrypted both in transit and at rest, and all connections are secured with SSL. Only authorised users within your organisation can access candidate information.",
    },

    {
      question:
        "Can Zepcruit integrate with our existing ATS?",
      answer:
        "Yes. Zepcruit integrates with your existing ATS through plug-and-play APIs - no complex development required. Whether you use Zoho Recruit, Darwinbox, Keka, PeopleStrong, or any other hiring platform, Zepcruit plugs in as your AI evaluation layer without disrupting your current workflow. Your team keeps working the way they always have - just with significantly smarter hiring decisions.",
    },
  ];

  return (
    <section className="w-full bg-[#FFFFFF] py-[110px] overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-4">

        {/* MAIN BOX */}

        <div
          className="
            relative
            rounded-[4px]
            bg-[#FFFFFF]
            px-[70px]
            py-[55px]
          "
        >

          {/* QUESTION SVG */}

          <img
            src={faqQuestionSvg}
            alt=""
            className="
              absolute
              right-[-60px]
              top-[70px]
              w-[339px]
              h-[424px]
              object-contain
              pointer-events-none
              select-none
            "
          />

          {/* PEOPLE SVG */}

          {showAll && (
            <img
  src={faqPeopleSvg}
  alt=""
  className={`
    absolute
    right-[-60px]
    bottom-[70px]
    w-[350px]
    object-contain
    pointer-events-none
    select-none
    transition-opacity
    duration-300
    h-[225px]
    ${
      showAll
        ? "opacity-100"
        : "opacity-0 invisible"
    }
  `}
/>
          )}

          {/* CONTENT */}

          <div className="relative z-10 w-[72%]">

            {/* TITLE */}

            <h2
              className="
                text-[40px]
                font-black
                text-[#FF580E]
                leading-none
              "
              style={{
                fontFamily: "Figtree, sans-serif",
              }}
            >
              FAQs
            </h2>

            {/* FAQ LIST */}

            <div className="mt-8">

              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                const shouldShow = showAll || index < 4;

                return (
                  <div
                    key={index}
                    className={`
                      overflow-hidden
                      transition-all
                      duration-700
                      ease-in-out
                      ${
                        shouldShow
                          ? "max-h-[500px] opacity-100"
                          : "max-h-0 opacity-0"
                      }
                    `}
                  >

                    <div className="border-b border-[#BFC4CC]">

                      {/* QUESTION */}

                      <button
                        onClick={() =>
                          setOpenIndex(isOpen ? null : index)
                        }
                        className="
                          w-full
                          flex
                          items-start
                          justify-between
                          gap-5
                          py-[18px]
                          text-left
                        "
                      >

                        <div className="flex items-start gap-3">

                          {/* NUMBER */}

                          <div
                            className="
                              min-w-[24px]
                              h-[24px]
                              rounded-full
                              border
                              border-[#BFC4CC]
                              flex
                              items-center
                              justify-center
                              text-[14px]
                              font-semibold
                              text-[#555]
                              mt-[1px]
                            "
                            style={{
                              fontFamily: "Figtree, sans-serif",
                            }}
                          >
                            {index + 1}
                          </div>

                          {/* QUESTION TEXT */}

                          <h3
                            className="
                              text-[18px]
                              font-semibold
                              text-[#161616]
                              leading-[24px]
                            "
                            style={{
                              fontFamily: "Figtree, sans-serif",
                            }}
                          >
                            {faq.question}
                          </h3>

                        </div>

                        {/* ICON */}

                        <div className="mt-[2px] text-[#555]">
                          {isOpen ? (
                            <FiChevronUp size={18} />
                          ) : (
                            <FiChevronDown size={18} />
                          )}
                        </div>

                      </button>

                      {/* ANSWER */}

                      <div
                        className={`
                          grid
                          transition-all
                          duration-500
                          ease-in-out
                          ${
                            isOpen
                              ? "grid-rows-[1fr] opacity-100 pb-5"
                              : "grid-rows-[0fr] opacity-0"
                          }
                        `}
                      >

                        <div className="overflow-hidden">

                          <p
                            className="
                              pl-[38px]
                              pr-8
                              text-[14px]
                              leading-[24px]
                              text-[#666]
                              font-medium
                            "
                            style={{
                              fontFamily: "Figtree, sans-serif",
                            }}
                          >
                            {faq.answer}
                          </p>

                        </div>

                      </div>

                    </div>

                  </div>
                );
              })}

            </div>

            {/* BUTTON */}

            <button
              onClick={() => setShowAll(!showAll)}
              className="
                mt-6
                w-full
                h-[44px]
                rounded-full
                border
                border-[#FF580E]
                bg-transparent
                flex
                items-center
                justify-center
                gap-2
                text-[16px]
                font-bold
                text-[#111]
                transition-all
                duration-300
                hover:bg-[#FF580E]
                hover:text-white
              "
              style={{
                fontFamily: "Figtree, sans-serif",
              }}
            >
              {showAll ? "Show less" : "Show more"}

              {showAll ? (
                <FiChevronUp size={18} />
              ) : (
                <FiChevronDown size={18} />
              )}
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}