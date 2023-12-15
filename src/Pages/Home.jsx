import AboutUs from "../Components/AboutUs";
import Banner from "../Components/Banner";
import Contact from "../Components/ContactUs";
import OurCakes from "../Components/OurCakes";

const Home = () => {
    return (
        <div>
             <Banner></Banner>
             <OurCakes></OurCakes>
             <AboutUs/>
             <Contact/>
        </div>
    );
};

export default Home;