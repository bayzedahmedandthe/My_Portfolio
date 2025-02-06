import AboutMe from "../Components/AboutMe";
import Banner from "../Components/Banner";
import Navbar from "../Components/Navbar";
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
        </div>
    );
};

export default HomePage;