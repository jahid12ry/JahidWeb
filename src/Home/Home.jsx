import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import MyProject from "../Pages/MyProject/MyProject";
import MySkills from "../Pages/Myskils/MySkills";
import Banner from "./Banner";
 
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <MySkills></MySkills>
            <MyProject></MyProject>
            <Contact></Contact>
        </div>
    );
};

export default Home;