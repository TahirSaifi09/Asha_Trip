import { Link, useLocation } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { IoReorderThreeOutline } from "react-icons/io5";

export default function Navbar() {
  const location = useLocation();
  // console.log("location", location)

  return (
    <div className="h-full flex items-center px-10 py-2 bg-[#ECECF2] max-md:px-3 max-xl:px-10 max-md:py-2 max-xl:py-4">
      <div className="flex justify-between max-md:items-center max-xl:w-full ">
        <a href="/" className="w-4/12 max-md:w-3/12 max-xl:w-2/12">
          <img src="logo2.png" alt="logo" className=" "></img>
        </a>
        <IoReorderThreeOutline className="text-blue-600 text-5xl max-md:text-4xl xl:hidden" />
      </div>
      <div className="flex justify-between w-full text-lg font-medium max-xl:hidden">
        <div className="flex gap-10 py-5">
          <div>
            <Link
              to="/"
              className={
                location.pathname === "/" ? "text-blue-600" : "hover:text-blue-600"
              }
            >
              Home
            </Link>
          </div>
          <div>
            <Link
              to="/TripBooking"
              className={
                location.pathname === "/TripBooking"
                  ? "text-blue-600"
                  : "hover:text-blue-600"
              }
            >
              Trip Booking
            </Link>
          </div>
          <div>
            <Link
              to="/Car"
              className={
                location.pathname === "/Car"
                  ? "text-blue-600"
                  : "hover:text-blue-600"
              }
            >
              Car
            </Link>
          </div>
          <div>
            <Link
              to="/TourPackage"
              className={
                location.pathname === "/Tour_Package"
                  ? "text-blue-600"
                  : "hover:text-blue-600"
              }
            >
              Tour Package
            </Link>
          </div>
          <div>
            <Link
              to="/Pages"
              className={
                location.pathname === "/Pages"
                  ? "text-blue-600"
                  : "hover:text-blue-600"
              }
            >
              Pages
            </Link>
          </div>
          <div>
            <Link
              to="/News"
              className={
                location.pathname === "/News"
                  ? "text-blue-600"
                  : "hover:text-blue-600"
              }
            >
              News
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xl">
          <Link to="#">
            <CiSearch className="text-3xl" />
          </Link>
          <a href="/login" className="hover:text-blue-600">
            Login
          </a>
          <p>/</p>
          <Link to="/signup" className="hover:text-blue-600">
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
}
