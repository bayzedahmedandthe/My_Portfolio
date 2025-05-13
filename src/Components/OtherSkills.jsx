import VS_Code from "../assets/VS_Code.png";
import figma from "../assets/figma.png";
import pixso from "../assets/pixso.png";
import github from "../assets/github.png";
import router from "../assets/router.png";

const OtherSkills = () => {
  const skills = [VS_Code, figma, pixso, github, router];

  return (
    <div className="my-10">
      {/* Orbit Container */}
      <div className="relative w-[380px] h-[380px] mx-auto">
        
        {/* Orbit Border */}
        <div className="absolute inset-0 border border-[#39FF14]  shadow-[0_0_20px_#39FF14]  rounded-full" />

        {/* Center Content instead of red dot */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-center px-2">
          <h2 className="text-xl font-bold text-gray-100">Other Skills</h2>
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
                    transform: `translateX(145px) rotate(-${angle}deg)`,
                  }}
                >
                  <div className="w-14 h-14 lg:w-20 lg:h-20 bg-white rounded-full shadow-md flex items-center justify-center">
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

        {/* Animation Keyframes */}
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
