import fb_logo from "../assets/download.jpg"
import github_logo from "../assets/download (1).png"
import whatsapp_logo from "../assets/download__1_-removebg-preview.png"
import linkedin_logo from "../assets/download (2).png"

const Footer = () => {
    return (
        <div  className="bg-radial-[at_50%_75%] from-[#01142c] via-[#02274b] to-[#01142c]">
            <div className="lg:w-10/12 w-[94%] mx-auto md:pt-32 py-16 ">
                <div className="flex items-center  justify-center lg:gap-4 gap-2 mt-4 pb-20 border-b border-[#3588ee] ">
                    <a href="https://www.facebook.com/afifahomed.akib"><img className="md:h-10 md:w-10 h-6 w-6 rounded-full" src={fb_logo} alt="" /></a>
                    <a href="https://github.com/bayzedahmedandthe"><img className="md:h-10 md:w-10 h-6 w-6 rounded-full" src={github_logo} alt="" /></a>
                    <a href="https://wa.link/ckvcjd"><img className="md:h-10 md:w-10 h-6 w-6" src={whatsapp_logo} alt="" /></a>
                    <a href="https://www.linkedin.com/in/bayzed-ahmed-69914a34b/"><img className="md:h-10 md:w-10 h-6 w-6 rounded-full" src={linkedin_logo} alt="" /></a>
                </div>
                
                <h4 className="text-center md:text-xl text-lg pt-12">Building Modern & Efficient Websites</h4>
            </div>
        </div>
    );
};

export default Footer;