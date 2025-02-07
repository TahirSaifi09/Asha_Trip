/** @format */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Pages';
import TripBooking from './Pages/TripBooking/index';
import TourPackage from './Pages/TourPackage';
import PrivacyPage from './Pages/Page/PrivacyPage';
import ContactUs from './Pages/Page/contactUs';
import About from './Pages/about/index';
import News_Details from './Pages/news/news_details';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trip_booking" element={<TripBooking />} />
        <Route path="/tour_package" element={<TourPackage />} />
        <Route path="/privacyPage" element={<PrivacyPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<About />} />
        <Route path="/new_details" element={<News_Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
