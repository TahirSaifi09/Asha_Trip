import Navbar from "../../Component/home_component/navbar";
import AllTime from "../../Component/newsListCom/allTime";
import Hero from "../../Component/newsListCom/hero";


export default function NewsListing(){
    return(
        <div>
            <Navbar />
            <Hero />
            <AllTime />
        </div>
    )
}