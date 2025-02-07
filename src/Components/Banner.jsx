import { Link } from "react-scroll";
import bayzed from "../assets/Bayzed.png"
import fb_logo from "../assets/download.jpg"
import github_logo from "../assets/download (1).png"
import whatsapp_logo from "../assets/download__1_-removebg-preview.png"
import linkedin_logo from "../assets/download (2).png"
import resume_logo from "../assets/icons8-download-64.png"
const Banner = () => {
    return (
        <div className=" bg-[url('https://i.ibb.co.com/fd8fqj7Q/6434-removebg-preview.png')] bg-cover">
            <div className="md:flex items-center justify-around backdrop-blur-xl">
                {/* title and description container */}
                <div className="md:space-y-3">
                    <h4 className="md:text-3xl font-semibold text-xl text-white">Hello, I am </h4>
                    <h2 className="md:text-5xl font-semibold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to bg-orange-500"><span className="">Bayzed</span> Ahmed </h2>
                    <h3 className="text-lg md:text-2xl font-semibold mt-2 text-white">Frontend developer</h3>
                    <p className="text-white font-medium">I like to create attractive websites</p>
                    <div className="flex justify-end mt-12 ">
                        <button className='flex items-center gap-1 bg-gradient-to-l px-2 py-1 from-purple-700 to-orange-700 rounded-sm text-lg'>Download Resume <img className='h-6 w-6' src={resume_logo} alt="" /></button>
                    </div>
                    <div className="flex items-center justify-center gap-4 mt-12">
                        <Link to="https://www.facebook.com/afifahomed.akib/">
                            <img className="md:h-10 md:w-10 h-6 w-6 rounded-full" src={fb_logo} alt="" />
                        </Link>
                        <Link to="https://github.com/bayzedahmedandthe">
                            <img className="md:h-10 md:w-10 h-6 w-6 rounded-full" src={github_logo} alt="" />
                        </Link>
                        <Link to="https://wa.link/ckvcjd">
                            <img className="md:h-10 md:w-10 h-6 w-6" src={whatsapp_logo} alt="" />
                        </Link>
                        <Link to="https://www.linkedin.com/in/bayzed-ahmed-69914a34b/">
                            <img className="md:h-10 md:w-10 h-6 w-6 rounded-full" src={linkedin_logo} alt="" />
                        </Link>

                    </div>
                </div>
                {/* img container */}
                <div>
                    <img src={bayzed} alt="Bayzed" />
                </div>
            </div>
        </div>
    );
};

export default Banner;