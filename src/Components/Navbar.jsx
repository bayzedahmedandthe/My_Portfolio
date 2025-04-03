
import hello from "../assets/icons8-hello-100.png"
import resume_logo from "../assets/icons8-download-64.png"
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Aos from "aos";

const Navbar = () => {
    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <div>
            <div data-aos="zoom-in" data-aos-duration="3000" className="navbar text backdrop-blur-3xl fixed text-white z-20">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2  bg-[#01142c] text-center space-y-2">
                            <Link to="/"><li className='cursor-pointer border-b-2 border-transparent hover:text-[#6ba6ff] transition-colors duration-400 transform  hover:border-blue-500'>Home</li></Link>
                            <li className="cursor-pointer  border-b-2 border-transparent hover:text-[#6ba6ff] transition-colors duration-500 transform  hover:border-blue-400" onClick={() => scrollToSection("aboutMe")}>About Me</li>
                            <li className="cursor-pointer border-b-2 border-transparent hover:text-[#6ba6ff] transition-colors duration-500 transform  hover:border-blue-400" onClick={() => scrollToSection("skills")}>Skills</li>
                            <li className="cursor-pointer border-b-2 border-transparent hover:text-[#6ba6ff] transition-colors duration-500 transform  hover:border-blue-400" onClick={() => scrollToSection("projects")}>Projects</li>
                            <li className="cursor-pointer border-b-2 border-transparent hover:text-[#6ba6ff] transition-colors duration-500 transform  hover:border-blue-400" onClick={() => scrollToSection("contact")}>Contact Me</li>
                            <button className='flex items-center gap-1 bg-gradient-to-l from-purple-700 to-rose-700 rounded-sm hover:shadow-purple-500/95 shadow-xl btn'><a href="https://drive.google.com/file/d/1QI0oUih78R1d1m2Y3lUT-nCQonSutkuy/view?usp=sharing"> Resume</a> <img className='h-6 w-6' src={resume_logo} alt="" /></button>
                        </ul>
                    </div>
                    <img className='h-16' src={hello} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">

                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="flex items-center gap-4 text-lg">
                        <Link to="/"><li className='cursor-pointer border-b-2 border-transparent hover:text-[#6ba6ff] transition-colors duration-400 transform  hover:border-blue-500'>Home</li></Link>
                        <li className="cursor-pointer  border-b-2 border-transparent hover:text-[#6ba6ff] transition-colors duration-500 transform  hover:border-blue-400" onClick={() => scrollToSection("aboutMe")}>About Me</li>
                        <li className="cursor-pointer border-b-2 border-transparent hover:text-[#6ba6ff] transition-colors duration-500 transform  hover:border-blue-400" onClick={() => scrollToSection("skills")}>Skills</li>
                        <li className="cursor-pointer border-b-2 border-transparent hover:text-[#6ba6ff] transition-colors duration-500 transform  hover:border-blue-400" onClick={() => scrollToSection("projects")}>Projects</li>
                        <li className="cursor-pointer border-b-2 border-transparent hover:text-[#6ba6ff] transition-colors duration-500 transform  hover:border-blue-400" onClick={() => scrollToSection("contact")}>Contact Me</li>
                        <button className='flex items-center gap-1 bg-gradient-to-l from-purple-700 to-rose-700 rounded-sm hover:shadow-purple-500/95 shadow-xl btn'><a href="https://drive.google.com/file/d/1QI0oUih78R1d1m2Y3lUT-nCQonSutkuy/view?usp=sharing"> Resume</a> <img className='h-6 w-6' src={resume_logo} alt="" /></button>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;