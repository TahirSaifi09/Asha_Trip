import Navbar from "../../Component/home_component/navbar";
import About from "../../Component/aboutCom/firstPage";
import Journey from "../../Component/aboutCom/journey";
import OurHistory from "../../Component/aboutCom/ourHistory";
export default function AboutPage(){
    return(
        <div>
            <Navbar />
            <About />
            <Journey />
            <OurHistory />
        </div>
    )
}