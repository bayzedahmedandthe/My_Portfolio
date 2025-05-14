import resturant from "../assets/bistro_boss.webp"
import reviews from "../assets/reviews.png"
import react_logo from "../assets/react.png"
import firebase_logo from "../assets/1_R4c8lHBHuH5qyqOtZb3h-w-removebg-preview.png"
import tailwind_logo from "../assets/download-removebg-preview.png"
import nodejs_logo from "../assets/download-removebg-preview (3).png"
import mongo_logo from "../assets/mongo.png"
import { useEffect } from "react"
import Aos from "aos"

const Projects = () => {
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <div id="projects" className=" lg:w-10/12 w-[90%] mx-auto my-8">
            <h2 className="md:text-2xl font-semibold text-lg py-8">Some of the projects I have done</h2>
            {/* Bistro Boss */}
            <div className="md:flex md:gap-8 pb-8">
                {/* Img Container */}
                <div data-aos="fade-down" data-aos-duration="1000"
                 className="flex items-center justify-center p-2">
                    <img className="md:h-[285px] md:w-[460px] rounded-sm transition-transform duration-400 transform hover:scale-110" src={resturant} alt="" />
                </div>
                {/* Text Container */}
                <div data-aos="fade-up" data-aos-duration="1000"
                className="flex-1">
                    <h3 className="text-xl text-gray-100 ">Bistro Boss Restaurant</h3>
                    <p className="text-gray-300 py-3">This web application allows users to order food easily and securely, while providing admins with an efficient order management dashboard.
                    </p>
                    <p className="text-gray-300 ">
                        Responsive UI ,Role-based Dashboards, Secure Payments, Secure Login, Form Validation, Admin
                        moderation Tools, Privet routes, JWT authentication
                    </p>
                    <h5 className="py-2">Used Technologies</h5>
                    {/* Logo container */}
                    <div className="flex items-center gap-6 pb-2 pt-1">
                        <img className="md:h-8 md:w-8 h-6 w-6 transition-transform duration-400 transform hover:scale-125" src={react_logo} alt="" />
                        <img className="md:h-10 md:w-10 h-8 w-8 transition-transform duration-400 transform hover:scale-125" src={tailwind_logo} alt="" />
                        <img className="md:h-8 md:w-8 h-6 w-6 transition-transform duration-400 transform hover:scale-125" src={firebase_logo} alt="" />
                        <img className="md:h-8 md:w-8 h-6 w-6 bg-white transition-transform duration-400 transform hover:scale-125" src={nodejs_logo} alt="" />
                        <img className="md:h-10 md:w-10 h-8 w-8 transition-transform duration-400 transform hover:scale-125" src={mongo_logo} alt="" />
                    </div>
                    {/* btn container */}
                    <div className="flex items-center gap-6 pt-4">

                        <div className="button-wrapper hover:shadow-md hover:shadow-green-500">
                            <button className='animated-border-button px-4 py-1'><a target="_blank" href="https://bistro-boss-3bc7d.web.app/"> Live Demo </a></button>
                        </div>
                        <div className="button-wrapper hover:shadow-md hover:shadow-green-500">
                            <button className='animated-border-button px-4 py-1'><a target="_blank" href="https://github.com/bayzedahmedandthe/bistro-boss-client-site"> Client code</a></button>
                        </div>

                        <div className="button-wrapper hover:shadow-md hover:shadow-green-500">
                            <button className='animated-border-button px-4 py-1'><a target="_blank" href="https://github.com/bayzedahmedandthe/bistro-boss-server"> Backend code </a></button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Service review */}
            <div className="md:flex md:gap-8 py-8 border-t border-green-400">
                {/* Text Container */}
                <div data-aos="fade-up" data-aos-duration="1000"
                 className="flex-1">
                    <h3 className="text-xl text-gray-100 pt-2">Service Review</h3>
                    <p className="text-gray-300 py-3">Service Review is a modern and user-friendly website where users can share opinions and reviews about various services. It facilitates transparent and informed decision-making
                    </p>
                    <p className="text-gray-300 ">
                        Responsive UI, Add service, Delete service, Add reviews, Service card, Search service, Privet routes
                    </p>
                    <h5 className="py-2">Used Technologies</h5>
                    {/* Logo container */}
                    <div className="flex items-center gap-6 pb-2 pt-1">
                        <img className="md:h-8 md:w-8 h-6 w-6 transition-transform duration-400 transform hover:scale-125" src={react_logo} alt="" />
                        <img className="md:h-10 md:w-10 h-8 w-8 transition-transform duration-400 transform hover:scale-125" src={tailwind_logo} alt="" />
                        <img className="md:h-8 md:w-8 h-6 w-6 transition-transform duration-400 transform hover:scale-125" src={firebase_logo} alt="" />
                        <img className="md:h-8 md:w-8 h-6 w-6 bg-white transition-transform duration-400 transform hover:scale-125" src={nodejs_logo} alt="" />
                        <img className="md:h-10 md:w-10 h-8 w-8 transition-transform duration-400 transform hover:scale-125" src={mongo_logo} alt="" />
                    </div>
                    {/* btn container */}
                    <div className="flex items-center gap-6 pt-4">

                        <div className="button-wrapper hover:shadow-md hover:shadow-green-500">
                            <button className='animated-border-button px-4 py-1'><a target="_blank" href="https://assaignment-11-5c7ac.web.app/"> Live Demo </a></button>
                        </div>
                        <div className="button-wrapper hover:shadow-md hover:shadow-green-500">
                            <button className='animated-border-button px-4 py-1'><a target="_blank" href="https://github.com/bayzedahmedandthe/Service-Review"> Client code</a></button>
                        </div>

                        <div className="button-wrapper hover:shadow-md hover:shadow-green-500">
                            <button className='animated-border-button px-4 py-1'><a target="_blank" href="https://github.com/bayzedahmedandthe/Service-Review-Server"> Backend code </a></button>
                        </div>
                    </div>
                </div>
                {/* Img Container */}
                <div data-aos="fade-down" data-aos-duration="1000"
                 className="flex items-center justify-center p-2 md:pt-0 pt-8">
                    <img className="md:h-[300px] md:w-[460px] rounded-sm transition-transform duration-400 transform hover:scale-110" src={reviews} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Projects;