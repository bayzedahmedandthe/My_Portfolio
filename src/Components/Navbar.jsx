// import { Link } from "react-router-dom";
import { Link, animateScroll as scroll } from 'react-scroll';
import hello from "../assets/icons8-hello-100.png"
import resume_logo from "../assets/icons8-download-64.png"

const Navbar = () => {
    return (
        <div>
            <div className="navbar text backdrop-blur-3xl fixed text-white z-20">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow bg-blue-700">
                            <li><a>Item 1</a></li>
                            <li><a>Item 3</a></li>
                            <li><a>Download</a></li>
                        </ul>
                    </div>
                    <img className='h-16' src={hello} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">

                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="flex items-center gap-4 text-lg">
                        <Link to="aboutMe" smooth={true} duration={500}><li className='cursor-pointer'>About me</li></Link>
                        <Link to="skills" smooth={true} duration={500}><li className='cursor-pointer'>Skills</li></Link>
                        <Link>
                            <button className='flex items-center gap-1 bg-gradient-to-l px-2 py-1 from-purple-700 to-orange-700 rounded-sm'>Resume <img className='h-6 w-6' src={resume_logo} alt="" /></button>
                        </Link>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Navbar;