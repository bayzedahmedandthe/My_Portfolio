// import { Link } from "react-scroll";
import bayzed from "../assets/Bayzed.png"
import fb_logo from "../assets/download.jpg"
import github_logo from "../assets/download (1).png"
import whatsapp_logo from "../assets/download__1_-removebg-preview.png"
import linkedin_logo from "../assets/download (2).png"
import resume_logo from "../assets/icons8-download-64.png"
import { TypeAnimation } from "react-type-animation";
import { BsHexagon } from "react-icons/bs";
import { useEffect } from "react"
const Banner = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className=" lg:w-10/12 w-[94%] mx-auto ">
            <div className="md:flex md:items-center md:justify-between backdrop-blur-xl">
                {/* title and description container */}
                <div className="md:space-y-3 md:pt-28 lg:pt-28 pt-28">
                    <h4 className="text-lg md:text-2xl font-semibold text-white">Hello, I am </h4>
                    <h2 className="animate-pulse md:text-4xl font-semibold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to bg-orange-500">Bayzed Ahmed </h2>
                    <div style={{ overflow: "hidden" }}>
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'MERN stack developer',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                'Frontend developer',
                                1000,
                            ]}
                            wrapper="span"
                            speed={12}
                            style={{ fontSize: '24px', display: 'block' }}
                            repeat={Infinity}
                        />
                    </div>
                    <p className="text-white md:font-medium">I like to create attractive websites</p>
                    <div className="flex justify-start mt-4">
                        <button className='flex items-center gap-1 bg-gradient-to-l md:px-2 px-1 py-1 from-purple-700 to-orange-700 rounded-sm text-xs md:text-lg hover:shadow-purple-500/95 shadow-xl btn'><a href="https://drive.google.com/file/d/1QI0oUih78R1d1m2Y3lUT-nCQonSutkuy/view?usp=sharing">Download Resume</a> <img className='h-6 w-6' src={resume_logo} alt="" /></button>
                    </div>
                    <div className="flex items-center lg:gap-4 gap-2 mt-4">
                        <a href="https://www.facebook.com/afifahomed.akib"><img className="md:h-10 md:w-10 h-6 w-6 rounded-full" src={fb_logo} alt="" /></a>
                        <a href="https://github.com/bayzedahmedandthe"><img className="md:h-10 md:w-10 h-6 w-6 rounded-full" src={github_logo} alt="" /></a>
                        <a href="https://wa.link/ckvcjd"><img className="md:h-10 md:w-10 h-6 w-6" src={whatsapp_logo} alt="" /></a>
                        <a href="https://www.linkedin.com/in/bayzed-ahmed-69914a34b/"><img className="md:h-10 md:w-10 h-6 w-6 rounded-full" src={linkedin_logo} alt="" /></a>
                    </div>
                </div>
                {/* img container */}
                <div className="h-full flex justify-center items-end">
                    <div>
                        <img className="lg:w-full  lg:h-full " src={bayzed} alt="Bayzed" />
                    </div>
                    <div className="absolute -z-10 justify-center items-end animate-pulse">
                        <BsHexagon className="md:h-[80%] h-[60%] min-h-[450px] md:w-auto w-[90%] blur-xs mx-auto text-purple-600  animate-[spin_20s_linear_infinite]" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;