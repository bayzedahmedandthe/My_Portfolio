import AboutMe from "../Components/AboutMe";
import Banner from "../Components/Banner";
import Navbar from "../Components/Navbar";
import Projects from "../Components/Projects";
import Skills from "../Components/Skills";

const HomePage = () => {
    return (
        <div>
            <div className="">
                <Navbar></Navbar>
            </div>
            <div className="">
                <Banner></Banner>
            </div>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <Projects></Projects>
        </div>
    );
};

export default HomePage;