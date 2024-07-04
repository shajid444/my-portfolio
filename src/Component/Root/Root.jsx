import About from "../About/About";
import Banner from "../Banner/Banner";
import Education from "../Education/Education";
import Projects from "../Projects/Projects";
import Skill from "../Skill/Skill";


const Root = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Skill></Skill>
            <Education></Education>
            <Projects></Projects>
        </div>
    );
};

export default Root;