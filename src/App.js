import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, } from "./Pages";
import Login from "./app/Login/Login";
import Signup from "./app/Login/Signup";
import TripBooking from "./Pages/TripBooking/index";
import TourPackage from "./Pages/TourPackage";
import PrivacyPage from "./Pages/Page/PrivacyPage";
import ContactUs from "./Pages/Page/contactUs";
import About from "./Pages/about/index";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/TripBooking" element={<TripBooking />}/>
        <Route path="/TourPackage" element={<TourPackage/>}/>
        <Route path="/privacyPage" element={<PrivacyPage/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/about" element={<About />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
