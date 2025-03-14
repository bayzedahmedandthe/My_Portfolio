import { Link } from "react-scroll";
import bayzed from "../assets/Bayzed.png"
import fb_logo from "../assets/download.jpg"
import github_logo from "../assets/download (1).png"
import whatsapp_logo from "../assets/download__1_-removebg-preview.png"
import linkedin_logo from "../assets/download (2).png"
import resume_logo from "../assets/icons8-download-64.png"
import { TypeAnimation } from "react-type-animation";
const Banner = () => {
    return (
        <div className=" bg-[url('https://i.ibb.co.com/fd8fqj7Q/6434-removebg-preview.png')] bg-cover md:w-full w-[94%] mx-auto">
            <div className="md:flex md:items-center md:justify-around backdrop-blur-xl">
                {/* title and description container */}
                <div className="md:space-y-3 md:pt-28 lg:pt-28 pt-28">
                    <h4 className="text-lg md:text-2xl font-semibold text-white">Hello, I am </h4>
                    <h2 className="md:text-5xl font-semibold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to bg-orange-500"><span className="">Bayzed</span> Ahmed </h2>
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'MERN stack developer',
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            'Frontend developer',
                            1000,
                        ]}
                        wrapper="span"
                        speed={16}
                        style={{ fontSize: '2em', display: 'inline-block' }}
                        repeat={Infinity}
                    />
                    <p className="text-white md:font-medium">I like to create attractive websites</p>
                    <div className="flex justify-start mt-4">
                        <button className='flex items-center gap-1 bg-gradient-to-l md:px-2 px-1 py-1 from-purple-700 to-orange-700 rounded-sm text-xs md:text-lg hover:bg-gradient-to-l hover:from-slate-500 hover:to-black btn'><a href="https://drive.google.com/file/d/1QI0oUih78R1d1m2Y3lUT-nCQonSutkuy/view?usp=sharing">Download Resume</a> <img className='h-6 w-6' src={resume_logo} alt="" /></button>
                    </div>
                    <div className="flex items-center lg:gap-4 gap-2 mt-4">
                        <a href="https://www.facebook.com/afifahomed.akib"><img className="md:h-10 md:w-10 h-6 w-6 rounded-full" src={fb_logo} alt="" /></a>
                        <a href="https://github.com/bayzedahmedandthe"><img className="md:h-10 md:w-10 h-6 w-6 rounded-full" src={github_logo} alt="" /></a>
                        <a href="https://wa.link/ckvcjd"><img className="md:h-10 md:w-10 h-6 w-6" src={whatsapp_logo} alt="" /></a>
                        <a href="https://www.linkedin.com/in/bayzed-ahmed-69914a34b/"><img className="md:h-10 md:w-10 h-6 w-6 rounded-full" src={linkedin_logo} alt="" /></a>
                    </div>
                </div>
                {/* img container */}
                <div>
                    <img className="md:w-full md:h-full " src={bayzed} alt="Bayzed" />
                </div>
            </div>
        </div>
    );
};

export default Banner;