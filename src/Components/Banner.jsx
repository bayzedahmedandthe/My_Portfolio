import bayzed from "../assets/Bayzed.png"
const Banner = () => {
    return (
        <div className=" bg-[url('https://i.ibb.co/1JZ2Jn84/gvfde-4-5.png')] bg-cover ">
            <div className="md:flex items-center justify-around   backdrop-blur-xl">
                {/* title and description container */}
                <div className="md:space-y-3">
                <h4 className="md:text-3xl font-semibold text-xl text-white">Hello, I am </h4>
                <h2 className="md:text-5xl font-semibold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to bg-orange-500"><span className="">Bayzed</span> Ahmed </h2>
                <h3 className="text-lg md:text-2xl font-semibold mt-2 text-white">Frontend developer</h3>
                <p className="text-white font-medium">I like to create attractive websites</p>
                <div className="flex justify-end mt-6 ">
                    <button className="btn border-none text-lg md:font-semibold bg-blue-800 text-white">Download resume</button>
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