import resturant from "../assets/side-view-shawarma-with-fried-potatoes-board-cookware.jpg"
import job from "../assets/2895265.jpg"
import review from "../assets/5384700.jpg"
import react_logo from "../assets/react.png"
import firebase_logo from "../assets/1_R4c8lHBHuH5qyqOtZb3h-w-removebg-preview.png"
import tailwind_logo from "../assets/download-removebg-preview.png"
import nodejs_logo from "../assets/download-removebg-preview (3).png"
import mongo_logo from "../assets/mongo.png"
import { Link } from "react-router-dom"

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
                        <div className="flex justify-end">
                            <button onClick={() => document.getElementById('my_modal_5').showModal()} className="m-2  md:text-xl text-lg  bg-gradient-to-l px-2 py-1 from-purple-700 to-orange-700 rounded-sm hover:shadow-purple-500/95 shadow-xl ">View More</button>
                        </div>
                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">
                                <div className=" text-white py-20 bg-[#011420]">
                                    <div className="w-[90%] mx-auto">
                                        <h2 className="md:text-2xl text-lg font-semibold">Bistro Boss Resturant</h2>
                                        <p className="py-4">My this site  is the best for ordering your favorite food. Here you can order any type of food you like. The beautiful design of this website is bound to capture your attention</p>
                                        <h3 className="md:text-2xl text-lg font-semibold">Technologies Used:</h3>
                                        <div className="flex flex-wrap gap-6 mt-6">
                                            <div className=" bg-gradient-to-r from-purple-600 to-100%  shadow-purple-500/95 shadow-lg  md:w-[120px] transition-transform duration-400 transform hover:scale-110 peer">
                                                <div className="backdrop-blur-lg ">
                                                    <img className="h-16 w-16 mt-4 flex mx-auto" src={tailwind_logo} alt="" />
                                                    <h5 className="md:text-xl text-lg font-semibold py-2 md:px-0 px-2  text-center">Tailwind</h5>
                                                </div>
                                            </div>
                                            <div className="bg-gradient-to-r from-purple-600 to-rose-800  shadow-rose-500/95 shadow-lg md:w-[120px]  transition-transform duration-400 transform hover:scale-110 peer">
                                                <img className="h-16 w-16 flex mt-4 mx-auto" src={react_logo} alt="" />
                                                <h5 className="md:text-xl text-lg font-semibold py-2 md:px-0 px-2  text-center ">React</h5>
                                            </div>
                                            <div className="bg-gradient-to-r from-purple-600 to-blue-600 md:w-[120px] shadow-blue-500/95 shadow-lg  transition-transform duration-400 transform hover:scale-110 peer">
                                                <img className="h-16 w-16 mt-4 flex mx-auto" src={firebase_logo} alt="" />
                                                <h5 className="md:text-xl text-lg font-semibold py-2 md:px-0 px-2  text-center ">Firebase</h5>
                                            </div>
                                            <div className="bg-white md:w-[120px] shadow-blue-500/95 shadow-lg transition-transform duration-400 transform hover:scale-110 peer">
                                                <img className="h-16 w-20 flex mx-auto mt-4" src={nodejs_logo} alt="" />
                                                <h5 className="md:text-xl text-lg font-semibold py-2 md:px-0 px-2  text-center text-black">Node.js</h5>
                                            </div>
                                            <div className="bg-gradient-to-r from-purple-600 to-blue-600   md:w-[120px] shadow-blue-500/95 shadow-lg transition-transform duration-400 transform hover:scale-110 peer">
                                                <img className="h-16 w-16 flex mx-auto mt-4 rounded-full" src={mongo_logo} alt="" />
                                                <h5 className="md:text-xl text-lg font-semibold py-2 md:px-0 px-2 text-center">NongoDB</h5>
                                            </div>
                                        </div>
                                        <div className="flex lg:justify-end md:gap-6 gap-4 lg:mt-0  mt-10">
                                            <Link to="https://bistro-boss-3bc7d.web.app/">
                                                <button className='flex items-center gap-1 bg-gradient-to-l px-2 py-1 from-purple-700 to-orange-700 rounded-sm text-lg hover:shadow-purple-500/95 shadow-xl'>Live Demo</button>
                                            </Link>
                                            <Link to="https://github.com/bayzedahmedandthe/bistro-boss-client-site">
                                                <button className='flex items-center gap-1 bg-gradient-to-l px-2 py-1 from-slate-700 to-gray-700 rounded-sm text-lg'>Cient Code</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-action">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn">Close</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>

                    </div>
                </div>
                <div className=" flex justify-center items-end">
                    <div className="bg-slate-800  rounded-sm">
                        <div className="flex items-center justify-center p-2">
                            <img className="md:h-[200px] md:w-[260px] rounded-sm" src={job} alt="" />
                        </div>
                        <h2 className=" md:text-2xl text-xl font-semibold p-2">Job Portal</h2>
                        <div className="flex justify-end">
                            <button onClick={() => document.getElementById('my_modal_6').showModal()} className="m-2  md:text-xl text-lg  bg-gradient-to-l px-2 py-1 from-purple-700 to-orange-700 rounded-sm hover:shadow-purple-500/95 shadow-xl ">View More</button>
                        </div>
                        <dialog id="my_modal_6" className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">
                                <div className=" min-h-screen text-white py-20 bg-[#011420]">
                                    <div className=" w-[90%] mx-auto">
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
                                            <div className="bg-gradient-to-r from-purple-600 to-rose-800  shadow-rose-500/95 shadow-lg md:w-[120px] transition-transform duration-400 transform hover:scale-110 peer">
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
                                <div className="modal-action">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn">Close</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                    </div>
                </div>
                <div className=" flex justify-center items-center">
                    <div className="bg-slate-800  rounded-sm">
                        <div className="flex items-center justify-center p-2">
                            <img className="md:h-[200px] md:w-[260px] rounded-sm" src={review} alt="" />
                        </div>
                        <h2 className=" md:text-2xl text-xl font-semibold p-2">Service Review</h2>

                        <div className="flex justify-end ">
                            <button onClick={() => document.getElementById('my_modal_7').showModal()} className="m-2 md:text-xl text-lg  bg-gradient-to-l px-2 py-1 from-purple-700 to-orange-700 rounded-sm hover:shadow-purple-500/95 shadow-xl ">View More</button>
                        </div>
                        <dialog id="my_modal_7" className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">
                                <div className=" min-h-screen text-white py-20 bg-[#011420]">
                                    <div className=" w-[90%] mx-auto">
                                        <h2 className="md:text-2xl text-lg font-semibold">Service Review</h2>
                                        <p className="py-4">This is a Service review related website. You can review the service posts onthis website if you want. You can add, delete, and update services if you want</p>
                                        <h3 className="md:text-2xl text-lg font-semibold">Technologies Used:</h3>
                                        <div className="flex flex-wrap gap-6 mt-6">
                                            <div className=" bg-gradient-to-r from-purple-600 to-100%  shadow-purple-500/95 shadow-lg  md:w-[120px] transition-transform duration-400 transform hover:scale-110 peer">
                                                <div className="backdrop-blur-lg ">
                                                    <img className="h-16 w-16 mt-4 flex mx-auto" src={tailwind_logo} alt="" />
                                                    <h5 className="md:text-xl text-lg font-semibold py-2 md:px-0 px-2 text-center">Tailwind</h5>
                                                </div>
                                            </div>
                                            <div className="bg-gradient-to-r from-purple-600 to-rose-800  shadow-rose-500/95 shadow-lg md:w-[120px] transition-transform duration-400 transform hover:scale-110 peer">
                                                <img className="h-16 w-16 flex mt-4 mx-auto" src={react_logo} alt="" />
                                                <h5 className="md:text-xl text-lg font-semibold py-2 md:px-0 px-2 text-center ">React</h5>
                                            </div>
                                            <div className="bg-gradient-to-r from-purple-600 to-blue-600  md:w-[120px] shadow-blue-500/95 shadow-lg  transition-transform duration-400 transform hover:scale-110 peer">
                                                <img className="h-16 w-16 mt-4 flex mx-auto" src={firebase_logo} alt="" />
                                                <h5 className="md:text-xl text-lg font-semibold py-2 md:px-0 px-2 text-center ">Firebase</h5>
                                            </div>
                                            <div className="bg-white md:w-[120px] shadow-blue-500/95 shadow-lg transition-transform duration-400 transform hover:scale-110 peer">
                                                <img className="h-16 w-20 flex mx-auto mt-4" src={nodejs_logo} alt="" />
                                                <h5 className="md:text-xl text-lg font-semibold py-2 md:px-0 px-2 text-center text-black">Node.js</h5>
                                            </div>
                                            <div className="bg-gradient-to-r from-purple-600 to-blue-600   md:w-[120px] shadow-blue-500/95 shadow-lg transition-transform duration-400 transform hover:scale-110 peer">
                                                <img className="h-16 w-16 flex mx-auto mt-4 rounded-full" src={mongo_logo} alt="" />
                                                <h5 className="md:text-xl text-lg font-semibold py-2 md:px-0 px-2 text-center">NongoDB</h5>
                                            </div>
                                        </div>
                                        <div className="flex lg:justify-end md:gap-6 gap-4 lg:mt-0  mt-10">
                                            <Link to="https://assaignment-11-5c7ac.web.app/">
                                                <button className='flex items-center gap-1 bg-gradient-to-l px-2 py-1 from-purple-700 to-orange-700 rounded-sm text-lg hover:shadow-purple-500/95 shadow-xl'>Live Demo</button>
                                            </Link>
                                            <Link to="https://github.com/bayzedahmedandthe/Service-review?tab=readme-ov-file">
                                                <button className='flex items-center gap-1 bg-gradient-to-l px-2 py-1 from-slate-700 to-gray-700 rounded-sm text-lg'>Cient Code</button>
                                            </Link>

                                        </div>
                                    </div>
                                </div>
                                <div className="modal-action">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn">Close</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;