// FILE NAME: src/components/recruiters/EstimatedCostSection.jsx

export default function EstimatedCostSection() {
  return (
   
    <section className="bg-[#FFFFFF] py-[45px]">

      <div className="relative z-10 w-full px-[160px]">

        {/* TITLE — centered across full width, no ml offset */}
        <h2
          className="
            text-center
            text-[32px]
            leading-none
            ml-[450px]
            tracking-[-1px]
            font-[700]
            text-[#000000]
          "
          style={{ fontFamily: "Figtree, sans-serif" }}
        >
          Estimated Cost to Fill One Role
        </h2>

        {/* TOP SECTION */}
        <div className="mt-[20px] flex items-start gap-[70px]">

          {/* LEFT SIDE — Assumptions */}
       <div className="w-[320px] flex-shrink-0 mt-[-8px] pt-[10px]">

            <h3
              className="text-[32px] italic font-650 text-black leading-none"
              style={{ fontFamily: "Figtree, sans-serif" }}
            >
              Assumptions:
            </h3>

         <div className="mt-[42px] space-y-[14px]" >
              {[
                "1 Open role",
                "100 Applications/CV screened",
                "10 AI interviews conducted",
                "3 Psychometric assessments",
                "3 Proctoring enabled",
                "5 Predictive analytics of top candidates",
              ].map((item, index) => (
             <div className="flex items-start gap-5">
               <div className="w-[18px] h-[18px] bg-[#FFFFF] rotate-45 mt-[10px] flex-shrink-0" />
                 <p
  className="text-[20px] italic leading-[25px] text-[#1D1D1D] py-1"
  style={{ fontFamily: "Figtree, sans-serif" }}
  dangerouslySetInnerHTML={{
    __html: item
      .replace("Applications/CV", "<span class='font-black'>Applications/CV</span>")
      .replace("AI interviews", "<span class='font-black'>AI interviews</span>")
      .replace("Psychometric", "<span class='font-black'>Psychometric</span>")
      .replace("Proctoring", "<span class='font-black'>Proctoring</span>")
      .replace("Predictive analytics", "<span class='font-black'>Predictive analytics</span>")
  }}
/>
                </div>
              ))}
            </div>

          </div>

          {/* TABLE — fixed width, pushed to the right */}
          <div className="w-[700px] ml-auto">

            <div className="border border-[#B8B8B8] bg-white rounded-[6px] overflow-hidden">

              {/* HEADER */}
              <div className="grid grid-cols-3 bg-[#FF5A0A]">
                {["Features", "Quantity", "Zepcoins"].map((head, index) => (
                  <div
                    key={index}
                    className="border-r last:border-r-0 border-[#E24E00] py-[8px]"
                  >
                    <p
                      className="text-center text-white text-[22px] font-black"
                      style={{ fontFamily: "Figtree, sans-serif" }}
                    >
                      {head}
                    </p>
                  </div>
                ))}
              </div>

              {/* ROWS */}
              {[
                ["CV Unlock All + CV Ranking", "1", "1,500"],
                ["AI Interview + Basic Report", "10", "5,000"],
                ["Psychometric Analysis", "3", "1,500"],
                ["Behavioural Signal Analysis", "3", "300"],
                ["Anti Cheat Proctoring", "10", "5,000"],
                ["AI Follow Up Questions", "10", "500"],
                ["Predictive Analytics", "5", "2,500"],
              ].map((row, index) => (
                <div
                  key={index}
                  className="grid grid-cols-3 border-t border-[#D6D6D6]"
                >
                  {row.map((cell, i) => (
                    <div
                      key={i}
                      className="border-r last:border-r-0 border-[#D6D6D6] px-4 py-[9px]"
                    >
                      <p
                        className={`text-[20px] leading-[21px] text-[#2D2D2D] font-medium ${
                          i === 0 ? "text-left" : "text-center"
                        }`}
                        style={{ fontFamily: "Figtree, sans-serif" }}
                      >
                        {cell}
                      </p>
                    </div>
                  ))}
                </div>
              ))}

              {/* TOTAL ROW */}
              <div className="grid grid-cols-3 border-t border-[#D6D6D6]">
                <div className="border-r border-[#D6D6D6] py-[8px]" />
                <div className="border-r border-[#D6D6D6] py-[8px]">
                  <p
                    className="text-center text-[17px] font-black text-[#FF5A0A]"
                    style={{ fontFamily: "Figtree, sans-serif" }}
                  >
                    Total
                  </p>
                </div>
                <div className="py-[8px] flex items-center justify-center gap-1">
                  <p
                    className="text-[17px] font-black text-[#FF5A0A]"
                    style={{ fontFamily: "Figtree, sans-serif" }}
                  >
                    16,300
                  </p>
                  <svg width="13" height="14" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M3.45277 0L2.57999 4.84407H10.8537L4.61639 10.4996H7.53349L0.792295 16.6101L0.775661 16.6255L0 21H16.3487L17.2212 16.1548H9.18048L15.386 10.4996H12.4689L19.2137 4.35147L19.2243 4.34275L20 0H3.45277Z"
                      fill="#FF580E"
                    />
                  </svg>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* LOWER CONTENT */}
        <div className="mt-[24px] flex justify-between items-end gap-8">
          <p
            className="max-w-[620px] text-[20px] leading-[22px] text-[#383838] font-medium leading-[32px]"
            style={{ fontFamily: "Figtree, sans-serif" }}
          >
            Estimated cost with Zepcruit's full automation stack:
            <span className="font-black"> ₹5,000 to ₹15,000 per role</span>
            {" "}— compared to
            <span className="font-black"> ₹60,000 average cost per hire</span>
            {" "}through traditional methods, and 8–12% of salary through recruitment agencies.
          </p>

          <div className="flex flex-col gap-3">
            <button
              className="bg-[#FF5A0A] text-white rounded-full px-6 py-[10px] text-[16px] font-bold transition-all hover:scale-[1.03]"
              style={{ fontFamily: "Figtree, sans-serif" }}
            >
              START WITH ONE ROLE <i className="fa-solid fa-arrow-right ml-2"></i>
            </button>
            <button
              className="border border-[#FF5A0A] text-[#FF5A0A] rounded-full bg-white px-6 py-[10px] text-[16px] font-bold hover:bg-[#FFF2EB] transition-all"
              style={{ fontFamily: "Figtree, sans-serif" }}
            >
              DOWNLOAD ROI COMPARISON SHEET <i className="fa-solid fa-arrow-right ml-2"></i>
            </button>
          </div>
        </div>

       

      </div>

   </section>

  );
}