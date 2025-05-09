/** @format */

import Footer from '../../Component/home_component/footer';
import Navbar from '../../Component/home_component/navbar';
import Hero from '../../Component/news/hero';
import News_body from '../../Component/news/news_details';
import Silde_details from '../../Component/news/sild';

export default function News_Details() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="flex gap-6 max-sm:m-4 m-12 max-xl:flex-col">
        <News_body />
        <Silde_details />
      </div>
      <Footer />
    </div>
  );
}
