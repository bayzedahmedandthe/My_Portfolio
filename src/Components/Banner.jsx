import bayzed from "../assets/Bayzed.png"
import fb_logo from "../assets/download.jpg"
import github_logo from "../assets/download (1).png"
import whatsapp_logo from "../assets/download__1_-removebg-preview.png"
import linkedin_logo from "../assets/download (2).png"
import resume_logo from "../assets/icons8-download-64.png"
import { TypeAnimation } from "react-type-animation";
import { useEffect } from "react"
import Aos from "aos"
const Banner = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        Aos.init();
    }, []);
    return (
        <div className="bg-[url(https://i.ibb.co/zT1jN9CT/944cf495-2f5a-49c0-a973-79630bca05c9.jpg)] bg-cover drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
            <div className=" lg:w-10/12 w-[94%] mx-auto md:py-32 py-16 ">
                <div className="md:flex md:items-center md:justify-between ">
                    {/* title and description container */}
                    <div data-aos="fade-up" data-aos-duration="3000" className="md:space-y-3 md:pt-0 pt-16 md:text-start text-center">
                        <h4 className="text-lg md:text-2xl font-semibold text-white">Hello, I am </h4>
                        <h2 className=" md:text-7xl font-semibold text-4xl saira text-[#39FF14]">Bayzed Ahmed </h2>
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
                                style={{ fontSize: '34px', display: 'block' }}
                                repeat={Infinity}
                            />
                        </div>
                        <p className="text-white md:font-medium">I like to create attractive websites</p>

                        <div className="flex md:justify-start justify-center mt-4">
                            <button className='flex items-center my-2 gap-1 bg-[#01142c] md:px-4 px-1 py-1 border-[#39FF14] rounded-full text-xs md:text-lg hover:shadow-green-500/95 shadow-lg btn'><a target="_blank" href="https://drive.google.com/file/d/1SYLje_VUjM_8x96LXmF2AoFoRhlcPFtK/view?usp=sharing">Download Resume</a> <img className='h-6 w-6' src={resume_logo} alt="" /></button>
                        </div>
                        <div className="flex items-center md:justify-start justify-center lg:gap-4 gap-2 mt-4 mb-8">
                            <a target="_blank" href="https://www.facebook.com/afifahomed.akib"><img className="md:h-10 md:w-10 h-6 w-6 rounded-full" src={fb_logo} alt="" /></a>
                            <a target="_blank" href="https://github.com/bayzedahmedandthe"><img className="md:h-10 md:w-10 h-6 w-6 rounded-full" src={github_logo} alt="" /></a>
                            <a target="_blank" href="https://wa.link/ckvcjd"><img className="md:h-10 md:w-10 h-6 w-6" src={whatsapp_logo} alt="" /></a>
                            <a target="_blank" href="https://www.linkedin.com/in/bayzed-ahmed-69914a34b/"><img className="md:h-10 md:w-10 h-6 w-6 rounded-full" src={linkedin_logo} alt="" /></a>
                        </div>

                    </div>
                    {/* img container */}
                    <div data-aos="fade-down" data-aos-duration="3000">
                        <div className="flex items-center justify-center md:pt-2 pt-0">
                            <img className="lg:w-full transition-transform duration-400 transform hover:scale-110 pee  w-[80%] h-[80%] border-[#39FF14] border rounded-full  shadow-[0_0_20px_#39FF14] bg-[#021d3d] lg:h-[350px] " src={bayzed} alt="Bayzed" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;