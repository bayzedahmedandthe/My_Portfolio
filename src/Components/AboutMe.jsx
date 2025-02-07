import laptop_image from "../assets/971-removebg-preview.png"

const AboutMe = () => {
    return (
        <div id="aboutMe" className="max-w-[90%] mx-auto my-12">

            <div className="md:flex md:items-center md:justify-between border-b ">
                <div className="md:w-[70%]">
                <h2 className="md:text-3xl text-xl font-semibold pt-8 pb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to bg-orange-700">About me</h2>
                    <p className="text-white">
                        Hello! I am a passionate  frontend developer who loves creating beautiful and interactive web experiences. My coding journey started with a curiosity for web design, which gradually turned into a deep passion. I enjoy working with HTML, CSS, JavaScript, React, Firebase, and other modern web technologies. My goal is to build high-performance, responsive web applications. Outside of coding, I enjoy to travel. Learning new technologies and creating innovative solutions is what drives me!
                    </p>
                </div>
                <div >
                    <img className="h-[200px]" src={laptop_image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AboutMe;