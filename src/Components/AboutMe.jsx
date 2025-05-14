// import laptop_image from "../assets/971-removebg-preview.png"
import Lottie from 'react-lottie';
import animationData from '../assets/Animation - 1742667434052.json';
import { useEffect } from 'react';
import Aos from 'aos';
const AboutMe = () => {
    const options = {
        animationData: animationData,
        loop: true,
        autoplay: true,
    };
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <div id="aboutMe" className="lg:w-10/12 max-w-[90%]  mx-auto my-12">
            <div className="md:flex items-center justify-between gap-20 border-b-[#39FF14] border-b ">
                <div data-aos="fade-down" data-aos-duration="1000" className="flex justify-center items-center">
                    <Lottie options={options} height={320} width={320} />
                </div>
                <div data-aos="fade-up" data-aos-duration="1000" className="md:w-[70%]">
                    <h2 className="md:text-3xl text-xl font-semibold pt-8 pb-4  text-white">About me</h2>
                    <p className="text-white">
                        Hello! I am a MERN Stack Developer (MongoDB, Express.js, React.js, Node.js) focused on building high-performance and user-friendly web applications. I believe that the proper use of modern technologies can help any company move forward digitally.
                        As a developer, I don't just build features—I deliver solutions that enhance productivity, improve user experience, and support business growth. I am skilled in responsive design, writing clean code, and collaborating effectively within a team.
                        Learning new technologies, solving problems, and working on innovative projects are what drive me. My goal is to develop web applications that align with a company’s values while meeting users' needs.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default AboutMe;