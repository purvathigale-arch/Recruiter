// FILE NAME: src/components/recruiter/PayOnlySection.jsx


/* TOP ROW ICONS */
import cvUnlockIcon from "../../assets/Slice 1.png";
import cvUnlockAllIcon from "../../assets/Slice 2.png";
import psychometricIcon from "../../assets/Slice 4.png";
import aiInterviewIcon from "../../assets/Slice 3.png";

/* BOTTOM ROW ICONS */
import predictiveIcon from "../../assets/Slice 12.png";
import antiCheatIcon from "../../assets/Slice 6.png";
import behaviouralIcon from "../../assets/Slice 5.png";
import followupIcon from "../../assets/Slice 7.png";

export default function PayOnlySection() {

  const topCards = [
    {
      title: "CV Unlock -\nAll Candidate",
      price: "30",
      icon: cvUnlockIcon,

      description:
        "Unlock individual candidate profiles of the Job applicants from Zepcruit's talent database.",
    },

    {
      title: "CV Unlock All +\nCV Ranking",
      price: "35",
      icon: cvUnlockAllIcon,

      description:
        "Unlock job applicants and rank the pool against the job description in one go.",
    },

    {
      title: "Professional Personality Profile",
      price: "500",
      icon: psychometricIcon,

      description:
        "Add a full psychometric assessment layer revealing professional behaviour.",
    },

    {
      title: "AI Interview +\nBasic Report",
      price: "400",
      icon: aiInterviewIcon,

      description:
        "Conduct one full structured AI video interview and receive a baseline candidate report containing a score and summary of each Q & A.",
    },
  ];

  const bottomCards = [
    {
      title: "Predictive\nAnalysis",
      price: "400",
      icon: predictiveIcon,

      description:
        "Unlock the full Predictive Hiring Engine: Role Fit Score, Performance Predictability Score, and Good to Hire Score for each candidate",
    },

    {
      title: "Anti-Cheat\nProctoring",
      price: "400",
      icon: antiCheatIcon,

      description:
        "Enable full proctoring — flags tab switching, face absence, multiple persons, multiple voice, AI generated answers & other fraud signals throughout the interview.",
    },

    {
      title: "Behavioural\nSignal Analysis",
      price: "400",
      icon: behaviouralIcon,

      description:
        "Add real-time emotional and behavioural signal tracking throughout the AI interview",
    },

    {
      title: "AI Follow Up\nQuestions",
      price: "50",
      icon: followupIcon,

      description:
        "Let Zepcruit AI probe deeper on specific responses - adding an adaptive interview layer for the face to face round.",
    },
  ];

  return (

    <section className="w-full bg-[#FFFFFF] py-18 overflow-hidden">

      <div className="max-w-[1180px] mx-auto px-4">

        {/* HEADING */}

        <div className="text-center">

          <h2
            className="text-[48px] leading-none font-[700] text-black"
            style={{
              fontFamily: "Figtree, sans-serif",
            }}
          >
            Pay Only for What You Use.
          </h2>

          <p
            className="mt-2 text-[22px] text-[#8C8C8C] font-medium"
            style={{
              fontFamily: "Figtree, sans-serif",
            }}
          >
            No annual contracts. No hidden fees. SaaS recruitment pricing that scales with your hiring volume.
          </p>

        </div>

<<<<<<< HEAD
        {/* MOBILE ONLY TEXT BOX */}
<div className="mobile-pay-text md:hidden">

  <div
    className="
      relative
      w-full
      bg-[#FFFDFC]
      border
      border-[#FF580E]
      rounded-[16px]
      px-6
      py-6
      shadow-[0_4px_12px_rgba(0,0,0,0.05)]
      overflow-hidden
      mt-8
    "
  >

    <div className="absolute left-0 top-0 h-full w-[13px] bg-[#FF580E]" />

    <p
      className="
        text-[16px]
        leading-[26px]
        italic
        text-[#6F6F6F]
        font-semibold
        ml-2
      "
      style={{
        fontFamily: "Figtree, sans-serif",
      }}
    >
      Every Zepcruit's purchase comes with Zepcoins - a
      flexible credit system that lets your team allocate
      budget exactly where it's needed.
    </p>

    <p
      className="
        mt-4
        text-[16px]
        leading-[26px]
        italic
        text-[#6F6F6F]
        font-semibold
        ml-2
      "
      style={{
        fontFamily: "Figtree, sans-serif",
      }}
    >
      Only running AI interviews this month? Spend on that.
      Want to add predictive analytics for your senior hires?
      Layer it in. No locked modules, no paying for tools
      you are not using.
    </p>

  </div>

</div>

        {/* TOP SECTION */}

        <div className="pay-top mt-[42px] flex items-start justify-between relative min-h-[520px] md:min-h-0">

          {/* TOP CARDS */}

          <div className="pay-grid flex w-[230px] gap-[36px] space-y-10">
=======
        {/* TOP SECTION */}

        <div className="mt-[42px] flex items-start justify-between relative">

          {/* TOP CARDS */}

          <div className="flex w-[230px] gap-[36px] space-y-10">
>>>>>>> 078a62320767f4a6388e8d462a1e1f36fd2756fc

            {topCards.map((card, index) => (
              <FlipCard key={index} {...card} />
            ))}

          </div>

          {/* BIG Z */}

<<<<<<< HEAD
          <div className="big-z-wrapper relative w-[240px] h-[220px] ml-6">
=======
          <div className="relative w-[240px] h-[220px] ml-6">
>>>>>>> 078a62320767f4a6388e8d462a1e1f36fd2756fc

            {/* BIG SVG */}

            <svg
              width="210"
              height="220"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-0 top-0"
            >
              <path
                d="M3.45277 0L2.57999 4.84407H10.8537L4.61639 10.4996H7.53349L0.792295 16.6101L0.775661 16.6255L0 21H16.3487L17.2212 16.1548H9.18048L15.386 10.4996H12.4689L19.2137 4.35147L19.2243 4.34275L20 0H3.45277Z"
                stroke="#FF580E"
                strokeWidth="0.18"
                fill="transparent"
              />
            </svg>

            {/* SMALL CARD */}
{/* SMALL CARD */}

<div
  className="
<<<<<<< HEAD
    zepcoin-card
    absolute
    left-[50%]
translate-x-[-50%]
top-[255px]
md:left-[-20px]
md:translate-x-0
md:top-[85px]
=======
    absolute
    left-[-20px]
    top-[85px]
>>>>>>> 078a62320767f4a6388e8d462a1e1f36fd2756fc
    bg-white
    rounded-[10px]
    border
    border-[#DFDFDF]
    shadow-[0_4px_12px_rgba(0,0,0,0.07)]
    px-6
    py-4
    flex
    items-center
    gap-3
    overflow-hidden
  "
>

  {/* ORANGE LEFT BAR */}
  <div className="absolute left-0 top-0 h-full w-[13px] bg-[#FF580E]" />

  <div className="flex items-center gap-2 ml-2">

  <p
    className="text-[33px] font-black leading-none text-[#FF580E]"
    style={{
      fontFamily: "Figtree, sans-serif",
    }}
  >
    ₹ 1 =
  </p>

  {/* SMALL SVG */}

  <svg
    width="23"
    height="22"
    viewBox="0 0 20 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.45277 0L2.57999 4.84407H10.8537L4.61639 10.4996H7.53349L0.792295 16.6101L0.775661 16.6255L0 21H16.3487L17.2212 16.1548H9.18048L15.386 10.4996H12.4689L19.2137 4.35147L19.2243 4.34275L20 0H3.45277Z"
      fill="#FF580E"
    />
  </svg>

  <p
    className="text-[33px] font-black leading-none text-[#FF580E]"
    style={{
      fontFamily: "Figtree, sans-serif",
    }}
  >
     1
  </p>

</div>

</div>

          </div>

        </div>

{/* CONNECTOR */}

<<<<<<< HEAD
<div className="connector-wrapper relative h-[180px] md:h-[70px]">

  <div className="absolute left-1/2 -translate-x-1/2 md:left-[595px] md:translate-x-0 top-[510px] md:top-[30px] flex flex-col items-center z-20">
=======
<div className="relative h-[70px]">

  <div className="absolute left-[595px] top-[30px] flex flex-col items-center z-20">

>>>>>>> 078a62320767f4a6388e8d462a1e1f36fd2756fc
    {/* TOP LINE */}
    <div className="w-[2.5px] h-[32px] bg-[#5E2CFF]" />

    {/* LABEL */}
    <div
      className="
        border
        border-[#FF580E]
        bg-white
        rounded-full
        px-[10px]
        py-[2px]
      "
    >

      <p
        className="
          text-[11px]
          font-black
          tracking-[0.2px]
          text-[#FF580E]
          leading-none
          padding-[5px]
          pt-[8px]
          pb-[8px]
        "
        style={{
          fontFamily: "Figtree, sans-serif",
        }}
      >
        UNLOCKS ACCESS TO
      </p>

    </div>

    {/* LOWER LINE */}
    <div className="w-[2.5px] h-[38px] bg-[#5E2CFF]" />

    {/* ARROW */}
    <div
      className="
        w-0
        h-0
        border-l-[6px]
        border-r-[6px]
        border-t-[8px]
        border-l-transparent
        border-r-transparent
        border-t-[#5E2CFF]
        -mt-[1px]
      "
    />

  </div>

</div>

        {/* LOWER SECTION */}

<<<<<<< HEAD
        <div className="pay-lower mt-[12px] flex items-start gap-6">
=======
        <div className="mt-[12px] flex items-start gap-6">
>>>>>>> 078a62320767f4a6388e8d462a1e1f36fd2756fc

          {/* TEXT BOX */}

{/* TEXT BOX */}

<div
  className="
    relative
<<<<<<< HEAD
    hidden md:block
    pay-text-box
    w-full md:w-[275px]
=======
    w-[275px]
>>>>>>> 078a62320767f4a6388e8d462a1e1f36fd2756fc
    min-h-[205px]
    bg-white
    border-2
    border-[#FF580E]
    rounded-[12px]
    px-5
    py-5
<<<<<<< HEAD
    mt-0 md:mt-[5%]
=======
    mt-[5%]
>>>>>>> 078a62320767f4a6388e8d462a1e1f36fd2756fc
    overflow-hidden
  "
>

  {/* ORANGE LEFT BAR */}
  <div className="absolute left-0 top-0 h-full w-[13px] bg-[#FF580E]" />

  <p
    className="
      text-[16px]
      leading-[20px]
      italic
      text-[#6F6F6F]
      font-semibold
      ml-2
    "
    style={{
      fontFamily: "Figtree, sans-serif",
    }}
  >
    Every Zepcruit's purchase comes with Zepcoins - a flexible
    credit system that lets your team allocate budget exactly
    where it's needed.
  </p>

  <p
    className="
      mt-4
      text-[16px]
      leading-[20px]
      italic
      text-[#6F6F6F]
      font-semibold
      ml-2
    "
    style={{
      fontFamily: "Figtree, sans-serif",
    }}
  >
    Only running AI interviews this month? Spend on that.
    Want to add predictive analytics for your senior hires?
    Layer it in. No locked modules, no paying for tools you
    are not using.
  </p>

</div>

          {/* BOTTOM BOX */}

          <div
            className="
              flex-1
              border
              border-[#FF580E]
              rounded-[14px]
              bg-white
              px-12
              py-9
<<<<<<< HEAD
              w-full md:w-auto md:h-[310px]
=======
              width-[1200px]
              h-[310px]
>>>>>>> 078a62320767f4a6388e8d462a1e1f36fd2756fc
              mt-[5%]
            "
          >

<<<<<<< HEAD
            <div className="pay-bottom-grid flex justify-between gap-4">
=======
            <div className="flex justify-between gap-4">
>>>>>>> 078a62320767f4a6388e8d462a1e1f36fd2756fc

              {bottomCards.map((card, index) => (
                <FlipCard key={index} {...card} />
              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

/* FLIP CARD */

function FlipCard({
  title,
  price,
  icon,
  description,
}) {

  return (

    <div className="group [perspective:1200px]">

      <div
        className="
          relative
<<<<<<< HEAD
          w-[145px] md:w-[160px]
=======
          w-[160px]
>>>>>>> 078a62320767f4a6388e8d462a1e1f36fd2756fc
          h-[182px]
          duration-700
          [transform-style:preserve-3d]
          group-hover:[transform:rotateY(180deg)]
        "
      >

        {/* FRONT */}

        <div
          className="
            absolute
            inset-0
            rounded-[16px]
            border
            border-[#D5D5D5]
            bg-white
            shadow-[0_4px_12px_rgba(0,0,0,0.08)]
            px-3
            py-3
            flex
            flex-col
            items-center
            justify-between
            [backface-visibility:hidden]
<<<<<<< HEAD
            h-[220px] md:h-[250px]
=======
            h-[250px]
>>>>>>> 078a62320767f4a6388e8d462a1e1f36fd2756fc
          "
        >

          {/* ICON */}

          <img
            src={icon}
            alt=""
<<<<<<< HEAD
            className="w-[80px] md:w-[115px] h-[70px] md:h-[100px] object-contain mt-1"
=======
            className="w-[115px] h-[100px] object-contain mt-1"
>>>>>>> 078a62320767f4a6388e8d462a1e1f36fd2756fc
          />

          {/* TITLE */}

          <h3
            className="
<<<<<<< HEAD
              text-[14px] md:text-[16px]
              leading-[15px] md:leading-[16px]
=======
              text-[16px]
              leading-[16px]
>>>>>>> 078a62320767f4a6388e8d462a1e1f36fd2756fc
              text-center
              font-bold
              text-[#1B1B1B]
              whitespace-pre-line
            "
            style={{
              fontFamily: "Figtree, sans-serif",
            }}
          >
            {title}
          </h3>

          {/* PRICE */}

          <div
            className="
              w-full
              h-[28px]
              rounded-[8px]
              border
              border-[#FF580E]
              bg-[#FFFDFB]
              flex
              items-center
              justify-center
              gap-1
              mb-2
            "
          >

            <p
              className="
<<<<<<< HEAD
                text-[12px] md:text-[14px]
=======
                text-[14px]
>>>>>>> 078a62320767f4a6388e8d462a1e1f36fd2756fc
                font-black
                leading-none
                text-[#FF580E]
              "
              style={{
                fontFamily: "Figtree, sans-serif",
              }}
            >
              {price}
            </p>

            {/* SMALL SVG */}

            <svg
              width="12"
              height="13"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.45277 0L2.57999 4.84407H10.8537L4.61639 10.4996H7.53349L0.792295 16.6101L0.775661 16.6255L0 21H16.3487L17.2212 16.1548H9.18048L15.386 10.4996H12.4689L19.2137 4.35147L19.2243 4.34275L20 0H3.45277Z"
                fill="#FF580E"
              />
            </svg>

          </div>

        </div>

        {/* BACK */}

        <div
          className="
            absolute
            inset-0
            rounded-[16px]
            bg-[#FF580E]
            px-4
            py-4
            flex
            items-center
            justify-center
            [transform:rotateY(180deg)]
            [backface-visibility:hidden]
            shadow-[0_6px_18px_rgba(255,88,14,0.22)]
<<<<<<< HEAD
            h-[220px] md:h-[250px]
=======
            h-[250px]
>>>>>>> 078a62320767f4a6388e8d462a1e1f36fd2756fc
          "
        >

          <p
            className="
              text-white
              text-[16px]
              leading-[17px]
              text-center
              font-semibold
            "
            style={{
              fontFamily: "Figtree, sans-serif",
            }}
          >
            {description}
          </p>

        </div>

      </div>

    </div>
  );
}