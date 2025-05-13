import VS_Code from "../assets/VS_Code.png";
import figma from "../assets/figma.png";
import pixso from "../assets/pixso.png";
import github from "../assets/github.png";
import router from "../assets/router.png";

const OtherSkills = () => {
  const skills = [VS_Code, figma, pixso, github, router];

  return (
    <div className="relative w-[300px] h-[300px] mx-auto my-10">

      {/* Fixed Center Ball */}
      <div className="absolute left-1/2 top-1/2 w-6 h-6 bg-red-600 rounded-full -translate-x-1/2 -translate-y-1/2 z-10" />

      {/* Each logo has its own rotating orbit */}
      {skills.map((logo, index) => {
        const angle = index * (360 / skills.length); // 0, 72, 144, etc.
        return (
          <div
            key={index}
            className="absolute left-1/2 top-1/2 w-0 h-0"
            style={{
              transform: `rotate(${angle}deg)`,
            }}
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
                  transform: `translateX(120px) rotate(-${angle}deg)`,
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
  );
};

export default OtherSkills;
