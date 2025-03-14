// import { Link } from "react-scroll";

import resturant from "../assets/side-view-shawarma-with-fried-potatoes-board-cookware.jpg"
import job from "../assets/2895265.jpg"
import review from "../assets/5384700.jpg"
import { Link } from "react-router-dom";
// import resturant from "../assets/side-view-shawarma-with-fried-potatoes-board-cookware.jpg"

const Projects = () => {
    return (
        <div id="projects" className="w-[90%] mx-auto my-8">
            <h2 className="md:text-2xl font-semibold text-lg py-8">Some of the projects I have done</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-2 md:gap-12 gap-4">
                <div className="bg-[url(https://i.ibb.co.com/VW4Zbkp8/side-view-shawarma-with-fried-potatoes-board-cookware.jpg)] bg-cover flex justify-center items-end">
                    <div className="flex  justify-center py-auto ">
                        <div className="">
                            <h2 className=" md:text-2xl text-xl font-semibold ">Bistro boss resturant</h2>
                            <Link to="/bostroBoss">
                                <button className="  md:text-xl text-lg  bg-gradient-to-l px-2 py-1 from-purple-700 to-orange-700 rounded-sm hover:shadow-purple-500/95 shadow-lg ">View More</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="relative">
                        <img className="brightness-50" src={job} alt="" />
                    </div>
                    <h2 className="relative md:bottom-28 bottom-24 lg:left-20 left-10 md:left-36 lg:text-2xl text-xl font-semibold">Job Portal</h2>
                    <Link to="/jobPortal">
                        <button className="  md:text-xl text-lg relative md:bottom-24 bottom-20 lg:-right-36 md:-right-32 -right-10 bg-gradient-to-l px-2 py-1 from-purple-700 to-orange-700 rounded-sm hover:shadow-purple-500/95 shadow-lg ">View More</button>
                    </Link>
                </div>
                <div className="">
                    <div className="relative">
                        <img className="brightness-50 " src={review} alt="" />
                    </div>
                    <h2 className="relative md:bottom-28 bottom-24 lg:left-20 md:left-24 left-6 md:text-2xl text-xl font-semibold">Service Review</h2>
                    <Link to="/serviceReview">
                        <button className="  md:text-xl text-lg relative bottom-20 md:bottom-24 lg:-right-36 md:-right-32 -right-8 bg-gradient-to-l px-2 py-1 from-purple-700 to-orange-700 rounded-sm hover:shadow-purple-500/95 shadow-lg ">View More</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Projects;