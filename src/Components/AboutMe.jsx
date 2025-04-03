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
        <div  id="aboutMe" className="lg:w-10/12 max-w-[90%]  mx-auto my-12">
            <div className="md:flex items-center justify-between gap-20 border-b ">
                <div data-aos="fade-down" data-aos-duration="3000" className="flex justify-center items-center">
                    <Lottie options={options} height={320} width={320} />
                </div>
                <div data-aos="fade-up" data-aos-duration="3000" className="md:w-[70%]">
                    <h2 className="md:text-3xl text-center text-xl font-semibold pt-8 pb-4  text-rose-700">About me</h2>
                    <p className="text-white">
                        Hello! I am a passionate  frontend developer who loves creating beautiful and interactive web experiences. My coding journey started with a curiosity for web design, which gradually turned into a deep passion. I enjoy working with HTML, CSS, JavaScript, React, Firebase, and other modern web technologies. My goal is to build high-performance, responsive web applications. Outside of coding, I enjoy to travel. Learning new technologies and creating innovative solutions is what drives me!
                    </p>
                </div>

            </div>
        </div>
    );
};

export default AboutMe;