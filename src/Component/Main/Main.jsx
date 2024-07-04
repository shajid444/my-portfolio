import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Banner from "../Banner/Banner";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import Skill from "../Skill/Skill";
import Education from "../Education/Education";
import Root from "../Root/Root";
import Header from "../Header/Header";



const Main = () => {
    return (
        <div>

            <Navbar></Navbar>
            {/* <Header></Header> */}
            {/* <Root></Root>
             */}
             <Root></Root>
            <Outlet>
                
            </Outlet>
            <Contact></Contact>

            <Footer></Footer>
        </div>
    );
};

export default Main;