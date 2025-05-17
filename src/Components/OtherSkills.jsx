import { useState, useEffect } from "react";
import VS_Code from "../assets/VS_Code.png";
import figma from "../assets/figma.png";
import pixso from "../assets/pixso.png";
import github from "../assets/github.png";
import router from "../assets/router.png";
import Aos from "aos";

const OtherSkills = () => {
  const skills = [VS_Code, figma, pixso, github, router];

  const [orbitDistance, setOrbitDistance] = useState(145);
   useEffect(() => {
        Aos.init();
    }, [])
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setOrbitDistance(100); // ছোট স্ক্রিনে কম দূরত্বে orbit
      } else {
        setOrbitDistance(145); // বড় স্ক্রিনে আগের মতো
      }
    };

    handleResize(); // শুরুতেই চেক করো
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="my-6">
      {/* Orbit Container */}
      <div
      data-aos="zoom-in" data-aos-duration="2000"
      className="relative lg:w-[380px] lg:h-[380px] w-[265px] h-[265px] mx-auto">

        {/* Orbit Border */}
        <div className="absolute inset-0 border border-[#39FF14] shadow-[0_0_10px_#39FF14] rounded-full" />

        {/* Center Title & Description */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-center px-2">
          <h2 className="text-xl font-bold text-gray-100">Others</h2>
          <p className="text-xs text-gray-200">
            Tools I use for design, version control, and more.
          </p>
        </div>

        {/* Rotating Logos */}
        {skills.map((logo, index) => {
          const angle = index * (360 / skills.length);
          return (
            <div
              key={index}
              className="absolute left-1/2 top-1/2 w-0 h-0"
              style={{ transform: `rotate(${angle}deg)` }}
            >
              <div
                className="absolute"
                style={{
                  transformOrigin: "0 0",
                  animation: "orbit 10s linear infinite",
                }}
              >
                <div
                  style={{
                    transform: `translateX(${orbitDistance}px) rotate(-${angle}deg)`,
                  }}
                >
                  <div className="w-14 h-14 lg:w-20 lg:h-20 bg-white rounded-full shadow-md flex items-center justify-center ">
                    <img
                      src={logo}
                      alt=""
                      className="w-3/4 h-3/4 object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Orbit Animation Keyframes */}
        <style>{`
          @keyframes orbit {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default OtherSkills;
