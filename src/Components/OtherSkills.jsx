

const OtherSkills = () => {
    const skills = [
  { logo: 'https://i.ibb.co/bg9VzknJ/download.png', angle: 0 },
  { logo: 'https://i.ibb.co/5WPn0nzV/download.png', angle: 60 },

];
    return (
        <div className="relative w-[300px] h-[300px] mx-auto my-10">
      <div className="absolute inset-0 animate-[spin_20s_linear_infinite]">
        {skills.map(({ icon, angle }, index) => (
          <div
            key={index}
            className="absolute left-1/2 top-1/2"
            style={{
              transform: `rotate(${angle}deg) translateX(120px) rotate(-${angle}deg)`,
            }}
          >
            <div className="w-10 h-10 flex items-center justify-center text-2xl bg-white rounded-full shadow-md">
             <img src={icon} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
    );
};

export default OtherSkills;