// FILE NAME: src/components/recruiters/Navbar.jsx

import Container from "../common/Container";
import logo from "../../assets/Zepcruit-logo.png";

export default function Navbar() {

  return (

    <header className="pt-[22px] bg-[#FFFFFF]">

      <Container>

        <nav
          className="
<<<<<<< HEAD
            custom-navbar
=======
>>>>>>> 078a62320767f4a6388e8d462a1e1f36fd2756fc
            bg-[#FFFFFF]
            border
            border-[#D9D9D9]
            rounded-full
            h-[52px]
            px-[30px]
            flex
            items-center
            justify-between
            shadow-[0_4px_12px_rgba(0,0,0,0.08)]
            w-[80%] ml-[10%]
          "
        >

          {/* LOGO */}
          <div className="flex items-center">

            <img
              src={logo}
              alt="Zepcruit Logo"
<<<<<<< HEAD
              className="navbar-logo w-[138px] object-contain"
=======
              className="w-[138px] object-contain"
>>>>>>> 078a62320767f4a6388e8d462a1e1f36fd2756fc
            />

          </div>

          {/* CENTER LINKS */}
          <ul
            className="
<<<<<<< HEAD
              navbar-links
=======
>>>>>>> 078a62320767f4a6388e8d462a1e1f36fd2756fc
              hidden
              lg:flex
              items-center
              gap-[33px]
            "
            style={{
              fontFamily: "Figtree, sans-serif",
            }}
          >

            {[
              "About",
              "Pricing",
              "Solutions",
              "Teams",
              "White Label",
            ].map((item, index) => (

              <li
                key={index}
                className={`
                  text-[17px]
                  transition-all
                  duration-300
                  cursor-pointer
                  hover:text-black
                `}
              >
                {item}
              </li>

            ))}

          </ul>

          {/* RIGHT BUTTON */}
          <button
            className="
<<<<<<< HEAD
              navbar-btn
=======
>>>>>>> 078a62320767f4a6388e8d462a1e1f36fd2756fc
              border
              border-[#2A2A2A]
              rounded-full
              h-[25px]
              px-[24px]
              text-[16px]
              font-medium
              text-[#2A2A2A]
              hover:bg-black
              hover:text-white
              transition-all
              duration-300
              w-[135px]
            "
            style={{
              fontFamily: "Figtree, sans-serif",
            }}
          >
            Sign In / Up
          </button>

        </nav>

      </Container>

    </header>
  );
}