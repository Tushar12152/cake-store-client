import { Helmet } from "react-helmet-async";
import AboutUs from "../Components/AboutUs";
import Banner from "../Components/Banner";
import Contact from "../Components/ContactUs";
import OurCakes from "../Components/OurCakes";

const Home = () => {
    return (
        <div>

<Helmet>
     <title>Nazme,s shop || Home</title>
</Helmet>

             <Banner></Banner>
             <OurCakes></OurCakes>
             <AboutUs/>
             <Contact/>
        </div>
    );
};

export default Home;