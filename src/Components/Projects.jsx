import { Link } from "react-scroll";
import resturant from "../assets/side-view-shawarma-with-fried-potatoes-board-cookware.jpg"
// import resturant from "../assets/side-view-shawarma-with-fried-potatoes-board-cookware.jpg"
// import resturant from "../assets/side-view-shawarma-with-fried-potatoes-board-cookware.jpg"

const Projects = () => {
    return (
        <div className="w-[90%] mx-auto my-8">
            <h2 className="md:text-2xl font-semibold text-lg py-8">Some of the projects I have done</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-2 gap-4">
                <div className="">
                    <div className="relative">
                        <img className="brightness-50 " src={resturant} alt="" />
                    </div>
                    <h2 className="relative bottom-28 left-20 md:text-2xl text-xl font-semibold">Bistro boss resturant</h2>
                    <Link>
                        <button className="  md:text-xl text-lg relative bottom-24 -right-36 bg-gradient-to-l px-2 py-1 from-purple-700 to-orange-700 rounded-sm hover:shadow-purple-500/95 shadow-lg ">View More</button>
                    </Link>
                </div>
                <div className="">
                    <div className="relative">
                        <img className="brightness-50 " src={resturant} alt="" />
                    </div>
                    <h2 className="relative bottom-28 left-20 md:text-2xl text-xl font-semibold">Bistro boss resturant</h2>
                    <Link>
                        <button className="  md:text-xl text-lg relative bottom-24 -right-36 bg-gradient-to-l px-2 py-1 from-purple-700 to-orange-700 rounded-sm hover:shadow-purple-500/95 shadow-lg ">View More</button>
                    </Link>
                </div>
                <div className="">
                    <div className="relative">
                        <img className="brightness-50 " src={resturant} alt="" />
                    </div>
                    <h2 className="relative bottom-28 left-20 md:text-2xl text-xl font-semibold">Bistro boss resturant</h2>
                    <Link>
                        <button className="  md:text-xl text-lg relative bottom-24 -right-36 bg-gradient-to-l px-2 py-1 from-purple-700 to-orange-700 rounded-sm hover:shadow-purple-500/95 shadow-lg ">View More</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Projects;