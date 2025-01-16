/** @format */
import Nav from "../../Component/home_component/navbar";
import Page1 from "../../Component/TourPackage/page1";
import Privacy from "../../Component/Privacy/privacy";
import Blog from "../../Component/Privacy/blog";
import Footer from "../../Component/home_component/footer";

export default function PrivacyPage() {
  return (
    <div>
      <Nav />
      <Page1 />
      <div className="flex m-10 px-10 max-lg:flex-col">
        <Privacy />
        <Blog />
      </div>
      <Footer />
    </div>
  );
}
