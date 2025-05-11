
import AboutMe from "../Components/AboutMe";
import Banner from "../Components/Banner";
import Contact from "../Components/Contact";
import Navbar from "../Components/Navbar";
import Projects from "../Components/Projects";
import Skills from "../Components/Skills";

const HomePage = () => {
    return (
        <div className="inter">
            <div>
                <Navbar></Navbar>
            </div>
            <div>
                <Banner></Banner>
            </div>
            <div className="bg-radial-[at_50%_75%] from-[#01142c] via-[#02274b] to-[#01142c] to-90%  border-t border-[#012241]">
                <AboutMe></AboutMe>
                <Skills></Skills>
                <Projects></Projects>
                <Contact></Contact>
            </div>
        </div>
        // bg-[#011e30]
    );
};

export default HomePage;