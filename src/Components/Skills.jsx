import html_logo from "../assets/images-removebg-preview.png"
import css_logo from "../assets/download-removebg-preview (1).png"
import js_logo from "../assets/js.png"
import react_logo from "../assets/react.png"
import firebase_logo from "../assets/1_R4c8lHBHuH5qyqOtZb3h-w-removebg-preview.png"
import nextjs_logo from "../assets/download-removebg-preview (2).png"
import nodejs_logo from "../assets/download-removebg-preview (3).png"
import mongo_logo from "../assets/mongo.png"
import ex_logo from "../assets/download.png"
import Marquee from "react-fast-marquee"


const Skills = () => {
    return (
        <div id="skills" className="max-w-[70%] mx-auto my-12">
            <h2 className=" text-center md:text-3xl text-xl font-semibold pt-8 pb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to bg-orange-700">Skills</h2>
            <h4 className="md:text-xl text-lg font-semibold py-4">Frontend skills</h4>
            <Marquee pauseOnHover direction="right">
                <div className="flex items-center gap-10 flex-wrap ">
                    <div className="bg-gradient-to-r from-purple-600 to-blue-600 my-16 w-[120px] shadow-blue-500/95 shadow-lg  transition-transform duration-400 transform hover:scale-110 peer">
                        <div className="backdrop-blur-2xl">
                            <img className="flex mt-4 h-16 w-16 mx-auto" src={html_logo} alt="" />
                            <h5 className="md:text-xl text-lg font-semibold py-2 text-center ">HTML</h5>
                        </div>
                    </div>
                    <div className=" bg-gradient-to-r from-purple-600 to-100% my-16  shadow-purple-500/95 shadow-lg  w-[120px] transition-transform duration-400 transform hover:scale-110 peer">
                        <div className="backdrop-blur-lg ">
                            <img className="h-16 w-16 mt-4 flex mx-auto" src={css_logo} alt="" />
                            <h5 className="md:text-xl text-lg font-semibold py-2 text-center">CSS</h5>
                        </div>
                    </div>
                    <div className="bg-gradient-to-r from-purple-600 to-teal-600 my-16  shadow-teal-500/95 shadow-lg w-[120px] transition-transform duration-400 transform hover:scale-110 peer">
                        <div className="">
                            <img className="h-16 w-16 mt-4 flex mx-auto" src={js_logo} alt="" />
                            <h5 className="md:text-xl text-lg font-semibold py-2 text-center ">javaScript</h5>
                        </div>
                    </div>
                    <div className="bg-gradient-to-r from-purple-600 to-rose-800 my-16  shadow-rose-500/95 shadow-lg w-[120px]  transition-transform duration-400 transform hover:scale-110 peer">
                        <img className="h-16 w-16 flex mt-4 mx-auto" src={react_logo} alt="" />
                        <h5 className="md:text-xl text-lg font-semibold py-2 text-center ">React</h5>
                    </div>
                    <div className="bg-gradient-to-r from-purple-600 to-blue-600  my-16 w-[120px] shadow-blue-500/95 shadow-lg  transition-transform duration-400 transform hover:scale-110 peer">
                        <img className="h-16 w-16 mt-4 flex mx-auto" src={firebase_logo} alt="" />
                        <h5 className="md:text-xl text-lg font-semibold py-2 text-center ">Firebase</h5>
                    </div>
                    <div className="bg-gradient-to-r from-purple-600 to-blue-600  my-16 w-[120px] shadow-blue-500/95 shadow-lg  transition-transform duration-400 transform hover:scale-110 peer">
                        <img className="h-16 w-20 mt-4  flex mx-auto" src={nextjs_logo} alt="" />
                        <h5 className="md:text-xl text-lg font-semibold text-center py-2">Next.js</h5>
                    </div>
                </div>
            </Marquee>
            <h4 className="md:text-xl text-lg font-semibold mt-12 py-4">Backend skills</h4>
            <div className="w-[68%] mx-auto">
                <Marquee pauseOnHover>
                    <div className="flex justify-center gap-10 flex-wrap">
                        <div className="bg-gradient-to-r from-purple-600 to-blue-600  my-16 w-[120px] shadow-blue-500/95 shadow-lg  transition-transform duration-400 transform hover:scale-110 peer">
                            <img className="h-16 w-20 flex mx-auto mt-4" src={nextjs_logo} alt="" />
                            <h5 className="md:text-xl text-lg font-semibold py-2 text-center">Next.js</h5>
                        </div>
                        <div className="bg-white  my-16 w-[120px] shadow-blue-500/95 shadow-lg transition-transform duration-400 transform hover:scale-110 peer">
                            <img className="h-16 w-20 flex mx-auto mt-4" src={nodejs_logo} alt="" />
                            <h5 className="md:text-xl text-lg font-semibold py-2 text-center text-black">Node.js</h5>
                        </div>
                        <div className="bg-gradient-to-r from-purple-600 to-blue-600  my-16 w-[120px] shadow-blue-500/95 shadow-lg transition-transform duration-400 transform hover:scale-110 peer">
                            <img className="h-16 w-16 flex mx-auto mt-4 rounded-full" src={mongo_logo} alt="" />
                            <h5 className="md:text-xl text-lg font-semibold py-2 text-center">NongoDB</h5>
                        </div>
                        <div className="bg-gradient-to-r from-purple-600 to-rose-800 my-16  shadow-rose-500/95 shadow-lg w-[120px]  transition-transform duration-400 transform hover:scale-110 peer">
                            <img className="h-16 w-16 mt-4 flex mx-auto rounded-full" src={ex_logo} alt="" />
                            <h5 className="md:text-xl text-lg font-semibold py-2 text-center">Express.js</h5>
                        </div>
                    </div>
                </Marquee>
            </div>
        </div>
    );
};

export default Skills;