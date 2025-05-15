import bayzed_Ahmed from "../assets/Bayzed_Ahmed.png"
import fb_logo from "../assets/download.jpg"
import github_logo from "../assets/download (1).png"
import whatsapp_logo from "../assets/download__1_-removebg-preview.png"
import linkedin_logo from "../assets/download (2).png"
import resume_logo from "../assets/icons8-download-64.png"
import { TypeAnimation } from "react-type-animation";
import { useEffect } from "react"
import Aos from "aos"
import { motion } from "motion/react"
import BubbleContainer from "./BubbleContainer"
const Banner = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        Aos.init();
    }, []);
    return (
        <div className="relative bg-gradient-to-tr from-[#01142c] to-[#022146]">
            <div className=" lg:w-10/12 w-[94%] mx-auto md:py-32 py-16 ">
                <div className="md:flex md:items-center md:justify-between ">
                    {/* title and description container */}
                    <div data-aos="fade-up" data-aos-duration="3000" className="md:space-y-3 md:pt-0 pt-16 md:text-start text-center">
                        <h4 className="text-lg md:text-2xl font-semibold text-white">Hello, I am </h4>
                        <h2 className=" md:text-7xl font-semibold text-4xl saira text-transparent bg-clip-text bg-gradient-to-r from-[#39FF14] to-yellow-300">  Bayzed Ahmed </h2>
                        <div style={{ overflow: "hidden" }}>
                            <TypeAnimation
                                sequence={[
                                    'MERN stack developer',
                                    1000,
                                    'Frontend developer',
                                    1000,
                                    'React.js developer',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={12}
                                style={{ fontSize: '32px', display: 'block' }}
                                repeat={Infinity}
                            />
                        </div>
                        <p className="text-white md:font-medium">I like to create attractive websites</p>

                        <div className="button-wrapper mt-4 ">
                            <button className="animated-border-button px-4 py-2  hover:shadow-md hover:shadow-green-500">
                                <a
                                    target="_blank"
                                    href="https://drive.google.com/file/d/1SYLje_VUjM_8x96LXmF2AoFoRhlcPFtK/view?usp=sharing"
                                >
                                    Download Resume
                                </a>
                                <img className="icon" src={resume_logo} alt="Resume" />
                            </button>
                        </div>

                        <div className="flex items-center md:justify-start justify-center lg:gap-4 gap-2 mt-4 mb-8">
                            <a target="_blank" href="https://www.facebook.com/afifahomed.akib"><img className="md:h-8 md:w-8 h-6 w-6 rounded-full" src={fb_logo} alt="" /></a>
                            <a target="_blank" href="https://github.com/bayzedahmedandthe"><img className="md:h-12 md:w-12 h-6 w-6 rounded-full" src={github_logo} alt="" /></a>
                            <a target="_blank" href="https://wa.link/ckvcjd"><img className="md:h-9 md:w-9 h-6 w-6" src={whatsapp_logo} alt="" /></a>
                            <a target="_blank" href="https://www.linkedin.com/in/bayzed-ahmed-69914a34b/"><img className="md:h-8 md:w-8 h-6 w-6 rounded-full" src={linkedin_logo} alt="" /></a>
                        </div>

                    </div>
                    {/* img container */}
                    <motion.div
                        animate={{ y: [20, 90, 20] }}
                        transition={{ duration: 5, repeat: Infinity }}
                        data-aos="fade-down" data-aos-duration="1000">
                        <div className="flex md:items-center md:justify-end justify-center pl-4 mb-20">
                            <img className="lg:w-[60%] lg:h-[50%] mb-12 transition-transform duration-400 transform hover:scale-110 w-[80%] h-[80%] border-[#39FF14] border rounded-full shadow-[0_0_20px_#39FF14] bg-[#021d3d] " src={bayzed_Ahmed} alt="Bayzed" />
                        </div>
                    </motion.div>
                </div>
                <div className="absolute top-36 left-[700px]">
                    <BubbleContainer></BubbleContainer>
                </div>
            </div>
        </div>
    );
};

export default Banner;