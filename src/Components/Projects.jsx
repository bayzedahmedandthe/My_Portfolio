// import { Link } from "react-scroll";

import resturant from "../assets/side-view-shawarma-with-fried-potatoes-board-cookware.jpg"
import job from "../assets/2895265.jpg"
import review from "../assets/5384700.jpg"
import { Link } from "react-router-dom";
// import resturant from "../assets/side-view-shawarma-with-fried-potatoes-board-cookware.jpg"

const Projects = () => {
    return (
        <div id="projects" className=" lg:w-10/12 w-[90%] mx-auto my-8">
            <h2 className="md:text-2xl font-semibold text-lg py-8">Some of the projects I have done</h2>
            <div className="md:flex items-center justify-between  ">
                <div className=" flex justify-center items-end">
                    <div className="bg-slate-800  rounded-sm">
                        <div className="flex items-center justify-center p-2">
                            <img className="md:h-[200px] md:w-[260px] rounded-sm" src={resturant} alt="" />
                        </div>
                        <h2 className=" md:text-2xl text-xl font-semibold p-2">Bistro boss resturant</h2>
                        <Link to="/bostroBoss">
                            <div className="flex justify-end">
                                <button className="m-2  md:text-xl text-lg  bg-gradient-to-l px-2 py-1 from-purple-700 to-orange-700 rounded-sm hover:shadow-purple-500/95 shadow-xl ">View More</button>
                            </div>
                        </Link>

                    </div>
                </div>
                <div className=" flex justify-center items-end">
                    <div className="bg-slate-800  rounded-sm">
                        <div className="flex items-center justify-center p-2">
                            <img className="md:h-[200px] md:w-[260px] rounded-sm" src={job} alt="" />
                        </div>
                        <h2 className=" md:text-2xl text-xl font-semibold p-2">Job Portal</h2>
                        <Link to="/jobPortal">
                            <div className="flex justify-end">
                                <button className="m-2  md:text-xl text-lg  bg-gradient-to-l px-2 py-1 from-purple-700 to-orange-700 rounded-sm hover:shadow-purple-500/95 shadow-xl ">View More</button>
                            </div>
                        </Link>

                    </div>
                </div>
                <div className=" flex justify-center items-center">
                    <div className="bg-slate-800  rounded-sm">
                        <div className="flex items-center justify-center p-2">
                            <img className="md:h-[200px] md:w-[260px] rounded-sm" src={review} alt="" />
                        </div>
                        <h2 className=" md:text-2xl text-xl font-semibold p-2">Service Review</h2>
                        <Link to="/serviceReview">
                            <div className="flex justify-end ">
                                <button className="m-2 md:text-xl text-lg  bg-gradient-to-l px-2 py-1 from-purple-700 to-orange-700 rounded-sm hover:shadow-purple-500/95 shadow-xl ">View More</button>
                            </div>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;