import fb_logo from "../assets/download.jpg"
import github_logo from "../assets/download (1).png"
import whatsapp_logo from "../assets/download__1_-removebg-preview.png"
import linkedin_logo from "../assets/download (2).png"
import { Link } from "react-router-dom";

const Footer = () => {

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div
            className="bg-radial-[at_50%_75%] from-[#01142c] via-[#02274b] to-[#01142c]">
            <div className="lg:w-10/12 w-[94%] mx-auto md:pt-32 py-16 ">
                <div className="md:flex items-center justify-between">
                    {/* Bayzed's section */}
                    <div className="md:mb-14 mb-6">
                        <h2 className="text-2xl font-semibold text-[#39FF14] ">
                            Bayzed Ahmed
                        </h2>
                        <p className="text-gray-300 md:w-[350px] pt-3">Passionate web developer skilled in React.js, Next.js, Node.js, and MongoDB. Focused on building high-performance, scalable, and user-friendly web applications.</p>
                    </div>
                    {/* quick links section */}
                    <div>
                        <h2 className="text-2xl font-semibold text-[#39FF14] pb-3 ">
                            Quick Links
                        </h2>
                        <ul className="text-lg text-gray-300">
                            <Link to="/"><li className='cursor-pointer border-b-2 border-transparent hover:text-[#39FF14] transition-colors duration-400 transform  hover:border-[#39FF14]'>Home</li></Link>
                            <li className="cursor-pointer  border-b-2 border-transparent hover:text-[#39FF14] transition-colors duration-500 transform  hover:border-[#39FF14]" onClick={() => scrollToSection("aboutMe")}>About Me</li>
                            <li className="cursor-pointer border-b-2 border-transparent hover:text-[#39FF14] transition-colors duration-500 transform  hover:border-[#39FF14]" onClick={() => scrollToSection("skills")}>Skills</li>
                            <li className="cursor-pointer border-b-2 border-transparent hover:text-[#39FF14] transition-colors duration-500 transform  hover:border-[#39FF14]" onClick={() => scrollToSection("projects")}>Projects</li>
                            <li className="cursor-pointer border-b-2 border-transparent hover:text-[#39FF14] transition-colors duration-500 transform  hover:border-[#39FF14]" onClick={() => scrollToSection("contact")}>Contact Me</li>
                        </ul>
                    </div>
                    {/* Contact me section */}
                    <div>
                        <h2 className="text-2xl font-semibold text-[#39FF14] mb-8 md:mt-0 mt-6">
                            Contact with me
                        </h2>
                        <div className="flex items-center gap-3 pb-20">
                            <a href="https://www.facebook.com/afifahomed.akib"><img className="md:h-8 md:w-8 h-6 w-6 rounded-full" src={fb_logo} alt="" /></a>
                            <a href="https://github.com/bayzedahmedandthe"><img className="md:h-12 md:w-12 h-6 w-6 rounded-full" src={github_logo} alt="" /></a>
                            <a href="https://wa.link/ckvcjd"><img className="md:h-8 md:w-8 h-6 w-6" src={whatsapp_logo} alt="" /></a>
                            <a href="https://www.linkedin.com/in/bayzed-ahmed-69914a34b/"><img className="md:h-8 md:w-8 h-6 w-6 rounded-full" src={linkedin_logo} alt="" /></a>
                        </div>
                    </div>
                </div>

                <h4 className="text-center md:text-xl text-lg pt-12">Building Modern & Efficient Websites</h4>
            </div>
        </div>
    );
};

export default Footer;