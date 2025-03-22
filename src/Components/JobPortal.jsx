import react_logo from "../assets/react.png"
import firebase_logo from "../assets/1_R4c8lHBHuH5qyqOtZb3h-w-removebg-preview.png"
import tailwind_logo from "../assets/download-removebg-preview.png"
import nodejs_logo from "../assets/download-removebg-preview (3).png"
import mongo_logo from "../assets/mongo.png"
import { Link } from "react-router-dom"


const JobPortal = () => {
    return (
        <div className=" min-h-screen text-white py-44 bg-[#011420]">
            <div className="md:w-[40%] w-[90%]  mx-auto">
                <h2 className="md:text-2xl text-lg font-semibold">Job portal</h2>
                <p className="py-4">This is a wonderful website. This website is beautiful. It will take your mind away. If you want, You can apply for a job and post a job from this websites</p>
                <h3 className="md:text-2xl text-lg font-semibold">Technologies Used:</h3>
                <div className="flex flex-wrap gap-6 mt-6">
                    <div className=" bg-gradient-to-r from-purple-600 to-100%  shadow-purple-500/95 shadow-lg md:w-[120px] transition-transform duration-400 transform hover:scale-110 peer">
                        <div className="backdrop-blur-lg ">
                            <img className="h-16 w-16 mt-4 flex mx-auto" src={tailwind_logo} alt="" />
                            <h5 className="md:text-xl text-lg font-semibold py-2 md:px-0 px-2 text-center">Tailwind</h5>
                        </div>
                    </div>
                    <div className="bg-gradient-to-r from-purple-600 to-rose-800  shadow-rose-500/95 shadow-lgmd:w-[120px] transition-transform duration-400 transform hover:scale-110 peer">
                        <img className="h-16 w-16 flex mt-4 mx-auto" src={react_logo} alt="" />
                        <h5 className="md:text-xl text-lg font-semibold py-2 md:px-0 px-2 text-center ">React</h5>
                    </div>
                    <div className="bg-gradient-to-r from-purple-600 to-blue-600  md:w-[120px] shadow-blue-500/95 shadow-lg  transition-transform duration-400 transform hover:scale-110 peer">
                        <img className="h-16 w-16 mt-4 flex mx-auto" src={firebase_logo} alt="" />
                        <h5 className="md:text-xl text-lg font-semibold py-2 md:px-0 px-2 text-center ">Firebase</h5>
                    </div>
                    <div className="bg-white  md:w-[120px] shadow-blue-500/95 shadow-lg transition-transform duration-400 transform hover:scale-110 peer">
                        <img className="h-16 w-20 flex mx-auto mt-4" src={nodejs_logo} alt="" />
                        <h5 className="md:text-xl text-lg font-semibold py-2 md:px-0 px-2 text-center text-black">Node.js</h5>
                    </div>
                    <div className="bg-gradient-to-r from-purple-600 to-blue-600  md:w-[120px] shadow-blue-500/95 shadow-lg transition-transform duration-400 transform hover:scale-110 peer">
                        <img className="h-16 w-16 flex mx-auto mt-4 rounded-full" src={mongo_logo} alt="" />
                        <h5 className="md:text-xl text-lg font-semibold py-2 md:px-0 px-2 text-center">NongoDB</h5>
                    </div>
                </div>
                <div className="flex lg:justify-end md:gap-6 gap-4 lg:mt-0  mt-10">
                    <Link to="https://job-portal-512fe.web.app/">
                        <button className='flex items-center gap-1 bg-gradient-to-l px-2 py-1 from-purple-700 to-orange-700 rounded-sm text-lg hover:shadow-purple-500/95 shadow-xl'>Live Demo</button>
                    </Link>
                    <Link to="https://github.com/bayzedahmedandthe/Job-portal?tab=readme-ov-file">
                        <button className='flex items-center gap-1 bg-gradient-to-l px-2 py-1 from-slate-700 to-gray-700 rounded-sm text-lg'>Cient Code</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default JobPortal;