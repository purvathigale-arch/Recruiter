import Container from "../common/Container";
import heroImage from "../../assets/HeroImage.png";

export default function Hero() {

  return (
    <section className="pt-10 pb-20 bg-[#FFFFFF]">
      <Container>

        {/* Breadcrumb */}
        <p className="text-[16px] mb-8 font-medium tracking-[0.2px]">
          <span className="text-[#FF5A0A]">Services</span>
          <span className="mx-1 text-[#B1B1B1]">/</span>
          <span className="text-black">For Recruiters</span>
        </p>

        {/* HERO SECTION */}
        <div className="hero-grid grid grid-cols-[1.2fr_0.8fr] items-center gap-2">

          {/* LEFT SIDE */}
          <div className="max-w-[920px]">

            {/* MAIN HEADING */}
<h1
  className="
    hero-heading
    max-w-[820px]
    text-[#111111]
    font-[800]
    tracking-[-2px]
    leading-[0.8]
    text-[64px]
  "
  style={{
    fontFamily: "Figtree, sans-serif",
  }}
>

  {/* LINE 1 */}
  <div className="text-[64px]">
    <span className="text-[#FF5A0A]">
      AI Recruitment Software
    </span>
  </div>

  {/* LINE 2 */}
  <div className="text-[64px] mt-[16px]">
    That Predicts Who Will
  </div>

{/* LINE 3 */}
<div className="text-[64px] mt-[16px]">
  <span className="text-[#FF5A0A]">Perform</span>
  <span className="text-black"> - Not Just Who</span>
</div>

{/* LINE 4 */}
<div className="text-[64px] mt-[15px]">
  <span className="text-black">Applied</span>
</div>
</h1>

            {/* PARAGRAPH 1 */}
            <p className="mt-9 text-[18px] leading-[24px] text-[#6E6E6E] max-w-[690px] font-medium">
              Every year, organisations lose thousands of hiring hours and crores in
              mis-hire costs. Not entirely from lack of effort but from lack of the
              right intelligence at the right moment.
            </p>

            {/* PARAGRAPH 2 */}
            <p className="mt-5 text-[18px] leading-[24px] text-[#6E6E6E] max-w-[700px] font-medium">
              <span className="font-extrabold text-[#444444]">
                Zepcruit
              </span>{" "}
              is India’s
              <span className="font-extrabold text-[#444444]">
                {" "}AI-powered candidate assessment and hiring intelligence platform
              </span>,
              built to give Talent Acquisition teams and CHROs the one thing
              traditional hiring never could: confidence before the offer letter.
            </p>

          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-end items-center pr-2">

            <img
              src={heroImage}
              alt="AI recruitment illustration"
              className="w-[500px] object-contain"
            />

          </div>
        </div>

        {/* WHAT YOU GET */}
        <div className="mt-8">

          {/* TITLE */}
          <h2 className="text-center text-[36px] font-black text-black mb-8 tracking-[-1px]">
            What you get
          </h2>

           {/* CARDS */}
<div className="feature-grid grid grid-cols-3 gap-8 max-w-[1200px] mx-auto">

  {/* CARD 1 */}
  <div
    className="
    feature-card
  bg-[#FF5A0A]
  rounded-[8px]
  h-[204px]
  px-[34px]
  py-[26px]
  flex
  items-center
  justify-center
  shadow-[0_2px_10px_rgba(0,0,0,0.04)]
  transition-all
  duration-300
  hover:scale-[1.04]
  hover:shadow-[0_12px_30px_rgba(255,90,10,0.25)]
  cursor-pointer
"
  >

    <p
      className="
        feature-card-text
        text-white
        text-[20px]
        leading-[1.18]
        font-[500]
        text-center
        tracking-[-0.4px]
        max-w-[310px]
      "
      style={{
        fontFamily: "Figtree, sans-serif",
      }}
    >
      AI-powered candidate screening, structured video interviews,
      and deep psychometric-based role fit assessment in one platform
    </p>

  </div>

  {/* CARD 2 */}
  <div
    className="
    feature-card
  bg-[#FF5A0A]
  rounded-[8px]
  h-[204px]
  px-[34px]
  py-[26px]
  flex
  items-center
  justify-center
  shadow-[0_2px_10px_rgba(0,0,0,0.04)]
  transition-all
  duration-300
  hover:scale-[1.04]
  hover:shadow-[0_12px_30px_rgba(255,90,10,0.25)]
  cursor-pointer
"
  >

    <p
      className="
        feature-card-text
        text-white
        text-[20px]
        leading-[1.18]
        font-[500]
        text-center
        tracking-[-0.4px]
        max-w-[310px]
      "
      style={{
        fontFamily: "Figtree, sans-serif",
      }}
    >
      A Predictive Hiring Engine that scores every candidate on role
      alignment, performance likelihood, and hiring confidence
    </p>

  </div>

  {/* CARD 3 */}
  <div
    className="
      feature-card
      bg-[#FF5A0A]
      rounded-[8px]
      h-[204px]
      px-[30px]
      py-[24px]
      flex
      items-center
      justify-center
      shadow-[0_2px_10px_rgba(0,0,0,0.04)]
      transition-all
      duration-300
      hover:scale-[1.04]
      hover:shadow-[0_12px_30px_rgba(255,90,10,0.25)]
      cursor-pointer
    "
  >

    <p
      className="
        feature-card-text
        text-white
        text-[20px]
        leading-[1.18]
        font-[500]
        text-center
        tracking-[-0.4px]
        max-w-[310px]
      "
      style={{
        fontFamily: "Figtree, sans-serif",
      }}
    >
      Automated AI interview technology that runs simultaneously for
      5 or 500 candidates with zero extra effort from your team
    </p>

  </div>

</div>

          {/* CTA */}
          <div className="flex flex-col items-center mt-8">

           <button
  className="
    bg-black
    text-white
    px-8
    py-[10px]
    rounded-full
    text-[16px]
    font-bold
    tracking-[0.5px]
    hover:scale-105
    transition
    duration-300
  "
  onClick={() =>
    window.open(
      "https://zepcruit.zohobookings.in/#/300603000000133050",
      "_blank"
    )
  }
>
  BOOK A DEMO
</button>

            <p className="mt-3 text-[18px] text-[#7A7A7A] italic font-medium">
              No commitment. 30 minutes. Walk away with a sample candidate report.
            </p>

          </div>
        </div>

      </Container>
    </section>
  );
}