import { PiCarProfileLight } from "react-icons/pi";
import { RiHotelFill } from "react-icons/ri";
import { FaCalendarDays } from "react-icons/fa6";
import { AiOutlineComment } from "react-icons/ai";

export default function OurHistory() {
  const history = [
    {
      icon: <PiCarProfileLight className="text-6xl p-2 text-blue-600 " />,
      dis: "Extensive Selection of Luxury Cars",
    },
    {
      icon: <RiHotelFill className="text-6xl p-2 text-blue-600" />,
      dis: "Well-Maintained & Luxury Hotels",
    },
    {
      icon: <FaCalendarDays className="text-6xl p-2 text-blue-600" />,
      dis: "Easy and Intuitive Booking Process",
    },
    {
      icon: <AiOutlineComment className="text-6xl p-2 text-blue-600" />,
      dis: "Exceptional Customer Service",
    },
  ];

  const photos=[
    {
        photo:"since-1.png",
    },
    {
        photo:"since-2.png",
    },
    {
        photo:"since-3.png",
    },
    {
        photo:"since-4.png",
    }
  ]

  return (
    <div className="bg-[#ECECF2] px-20 py-5 pb-32 flex w-full gap-8">
      <div className="bg-gray-50 p-5 w-1/2 font-medium rounded-2xl">
        <h2 className="text-4xl font-medium ">Our History</h2>
        <h5 className="text-blue-600 text-xl font-medium py-2">Since 1998</h5>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur. Nibh vivamus quis risus augue
          odio eget donec leo phasellus. Auctor est aliquam commodo enim auctor
          libero. Cras sed sagittis id in ridiculus amet vel euismod. Eu nunc
          lacus dui natoque. Consequat aenean tristique accumsan dictum augue.
        </p>
        <div className="w-full flex flex-wrap items-center justify-between gap-6 mt-8">
          {history.map((item, index) => (
            <div
              className="w-[48%] bg-gray-200 text-2xl p-4 rounded-2xl"
              key={index}
            >
              {item.icon}
              <p>{item.dis}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-1/2">
        <div className="flex flex-wrap justify-between gap-6">
            {photos.map((item)=>(
              <div key = {item} className="w-[48%] ">
                <img src={item.photo} alt="" className="rounded-2xl"/>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
