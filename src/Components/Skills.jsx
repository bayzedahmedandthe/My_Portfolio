import html_logo from "../assets/images-removebg-preview.png"
import css_logo from "../assets/download-removebg-preview (1).png"
import js_logo from "../assets/js.png"
import react_logo from "../assets/react.png"
import firebase_logo from "../assets/1_R4c8lHBHuH5qyqOtZb3h-w-removebg-preview.png"
import nodejs_logo from "../assets/download-removebg-preview (3).png"
import mongo_logo from "../assets/mongo.png"
import ex_logo from "../assets/download.png"
import tailwind_logo from "../assets/download-removebg-preview.png"
import { motion } from "motion/react"



const Skills = () => {
    return (
        <div id="skills" className="md:w-[83%] w-[90%] mx-auto my-12">
            <h2 className=" text-center md:text-3xl text-xl font-semibold pt-8 pb-4 text-rose-700">Skills</h2>
            <h4 className="md:text-xl text-lg font-semibold md:py-4 md:pl-0 pl-4  py-2">Frontend skills</h4>
            {/* <Marquee pauseOnHover direction="right"> */}
            <div className="">
                <div
                    className=" md:flex md:items-center md:justify-around">
                    <div className="flex justify-center items-center">
                        <div>
                            <motion.div
                                animate={{ y: [30, 120, 30] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="bg-gradient-to-r from-purple-600 lg:ml-0 md:ml-8 ml-2 to-blue-600 md:my-16 my-2 w-[120px] shadow-blue-500/95 shadow-lg  transition-transform duration-400 transform hover:scale-110 peer">
                                <div className="backdrop-blur-2xl border border-blue-600">
                                    <img className="flex mt-4 h-16 w-16 mx-auto" src={html_logo} alt="" />
                                    <h5 className="md:text-xl text-lg font-semibold py-2 text-center ">HTML</h5>
                                </div>
                            </motion.div>
                            <motion.div
                                animate={{ x: [30, 150, 30] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className=" bg-gradient-to-r from-purple-600 to-100% md:my-16  my-2  shadow-purple-500/95 shadow-lg  w-[120px] transition-transform duration-400 transform hover:scale-110 peer">
                                <div className="backdrop-blur-lg border border-purple-600">
                                    <img className="h-16 w-16 mt-4 flex mx-auto" src={css_logo} alt="" />
                                    <h5 className="md:text-xl text-lg font-semibold py-2 text-center">CSS</h5>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                    <div className="flex items-start justify-start">
                        <div>
                            <motion.div
                                animate={{ y: [30, 120, 30] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className=" bg-gradient-to-r from-purple-600 to-100% md:my-16   shadow-purple-500/95 shadow-lg  w-[120px] transition-transform duration-400 transform hover:scale-110 peer">
                                <div className="backdrop-blur-lg border border-purple-600">
                                    <img className="h-16 w-16 mt-4 flex mx-auto" src={tailwind_logo} alt="" />
                                    <h5 className="md:text-xl text-lg font-semibold py-2 text-center">Tailwind</h5>
                                </div>
                            </motion.div>
                            <motion.div
                                animate={{ x: [30, 150, 30] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="bg-gradient-to-r from-purple-600 to-teal-600 md:my-16  my-2  shadow-teal-500/95 shadow-lg w-[120px] transition-transform duration-400 transform hover:scale-110 peer">
                                <div className="backdrop-blur-lg border border-teal-600">
                                    <img className="h-16 w-16 mt-4 flex mx-auto" src={js_logo} alt="" />
                                    <h5 className="md:text-xl text-lg font-semibold py-2 text-center ">javaScript</h5>
                                </div>
                            </motion.div>

                        </div>
                    </div>
                    <div className="flex items-end justify-end max-w-[68%]">
                        <div>
                            <motion.div
                                animate={{ y: [30, 120, 30] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="bg-gradient-to-r from-purple-600 to-rose-800 md:my-16  my-2  shadow-rose-500/95 shadow-lg w-[120px]  transition-transform duration-400 transform hover:scale-110 peer">
                                <div className="border border-red-500">
                                    <img className="h-16 w-16 flex mt-4 mx-auto" src={react_logo} alt="" />
                                    <h5 className="md:text-xl text-lg font-semibold py-2 text-center ">React</h5>
                                </div>
                            </motion.div>
                            <motion.div
                                animate={{ x: [30, 150, 30] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="bg-gradient-to-r from-purple-600 to-blue-600  md:my-16 w-[120px] shadow-blue-500/95 shadow-lg  transition-transform duration-400 transform hover:scale-110 peer">
                                <div className="border border-blue-600">
                                    <img className="h-16 w-16 mt-4 flex mx-auto" src={firebase_logo} alt="" />
                                    <h5 className="md:text-xl text-lg font-semibold py-2 text-center ">Firebase</h5>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
            <h4 className="md:text-xl text-lg font-semibold md:mt-12 py-4 md:pl-0 pl-4">Backend skills</h4>
            <div className="md:w-[68%] lg:w-[58%] mx-auto">
                <div className="flex justify-center md:gap-10 gap-6">
                    <div className="bg-white  md:my-16 my-4 w-[120px] animate-zoom  shadow-blue-500/95 shadow-lg transition-transform duration-400 transform hover:scale-110 peer">
                        <img className="h-16 w-20  flex mx-auto mt-4" src={nodejs_logo} alt="" />
                        <h5 className="md:text-xl text-lg font-semibold py-2 text-center text-black">Node.js</h5>
                    </div>
                    <div className=" animate-zoom  bg-gradient-to-r from-purple-600 to-blue-600  md:my-16 my-4 w-[120px] shadow-blue-500/95 shadow-lg transition-transform duration-400 transform hover:scale-110 peer">
                        <img className="h-16 w-16 flex mx-auto mt-4 rounded-full" src={mongo_logo} alt="" />
                        <h5 className="md:text-xl text-lg font-semibold py-2 text-center">NongoDB</h5>
                    </div>
                    <div className=" animate-zoom  bg-gradient-to-r from-purple-600 to-rose-800 md:my-16  my-4 shadow-rose-500/95 shadow-lg w-[120px]  transition-transform duration-400 transform hover:scale-110 peer">
                        <img className="h-16 w-16 mt-4 flex mx-auto rounded-full" src={ex_logo} alt="" />
                        <h5 className="md:text-xl text-lg font-semibold py-2 text-center">Express.js</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;