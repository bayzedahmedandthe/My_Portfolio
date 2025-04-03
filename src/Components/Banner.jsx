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
                        <h2 className="animate-pulse md:text-4xl font-semibold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to bg-rose-700">Bayzed Ahmed </h2>
                        <div style={{ overflow: "hidden" }}>
                            <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'MERN stack developer',
                                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                                    'Frontend developer',
                                    1000,
                                    'React.js developer',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={12}
                                style={{ fontSize: '24px', display: 'block' }}
                                repeat={Infinity}
                            />
                        </div>
                        <p className="text-white md:font-medium">I like to create attractive websites</p>
                       
                            <div className="flex md:justify-start justify-center mt-4">
                                <button className='flex items-center gap-1 bg-gradient-to-l md:px-2 px-1 py-1 from-purple-700 to-rose-700 rounded-sm text-xs md:text-lg hover:shadow-purple-500/95 shadow-xl btn'><a href="https://drive.google.com/file/d/1QI0oUih78R1d1m2Y3lUT-nCQonSutkuy/view?usp=sharing">Download Resume</a> <img className='h-6 w-6' src={resume_logo} alt="" /></button>
                            </div>
                            <div className="flex items-center md:justify-start justify-center lg:gap-4 gap-2 mt-4 mb-8">
                                <a href="https://www.facebook.com/afifahomed.akib"><img className="md:h-10 md:w-10 h-6 w-6 rounded-full" src={fb_logo} alt="" /></a>
                                <a href="https://github.com/bayzedahmedandthe"><img className="md:h-10 md:w-10 h-6 w-6 rounded-full" src={github_logo} alt="" /></a>
                                <a href="https://wa.link/ckvcjd"><img className="md:h-10 md:w-10 h-6 w-6" src={whatsapp_logo} alt="" /></a>
                                <a href="https://www.linkedin.com/in/bayzed-ahmed-69914a34b/"><img className="md:h-10 md:w-10 h-6 w-6 rounded-full" src={linkedin_logo} alt="" /></a>
                            </div>
                        
                    </div>
                    {/* img container */}
                    <div data-aos="fade-down" data-aos-duration="3000">
                        <div className="flex items-center justify-center md:pt-2 pt-0">
                            <img className="lg:w-full  w-[70%] h-[70%] border-[#006eff] border rounded-full  shadow-[0_0_20px_#006eff] bg-[#021d3d] lg:h-[350px] " src={bayzed} alt="Bayzed" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;