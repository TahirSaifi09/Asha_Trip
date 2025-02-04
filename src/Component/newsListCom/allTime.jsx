import { CiUser } from "react-icons/ci";
import { LuCalendarDays } from "react-icons/lu";
import { Link } from "react-router-dom";
export default function AllTime() {
  const list = [
    {
      photo: "blog-1.png",
      userIcon: <CiUser />,
      userName: "Malisa John",
      calendarIcon: <LuCalendarDays />,
      date: "08 Aug, 2023",
      roamingText:
        "Roaming with Purpose: Traveling Responsibly and Sustainably",
      para: "Lorem ipsum dolor sit amet consectetur. Feugiat sit eleifend tortor lectus adipiscing aliquam.",
    },
    {
      photo: "blog-2.png",
      userIcon: <CiUser />,
      userName: "Malisa John",
      calendarIcon: <LuCalendarDays />,
      date: "08 Aug, 2023",
      roamingText:
        "Roaming with Purpose: Traveling Responsibly and Sustainably",
      para: "Lorem ipsum dolor sit amet consectetur. Feugiat sit eleifend tortor lectus adipiscing aliquam.",
    },
    {
      photo: "blog-3.png",
      userIcon: <CiUser />,
      userName: "Malisa John",
      calendarIcon: <LuCalendarDays />,
      date: "08 Aug, 2023",
      roamingText:
        "Roaming with Purpose: Traveling Responsibly and Sustainably",
      para: "Lorem ipsum dolor sit amet consectetur. Feugiat sit eleifend tortor lectus adipiscing aliquam.",
    },
    {
      photo: "blog-4.png",
      userIcon: <CiUser />,
      userName: "Malisa John",
      calendarIcon: <LuCalendarDays />,
      date: "08 Aug, 2023",
      roamingText:
        "Roaming with Purpose: Traveling Responsibly and Sustainably",
      para: "Lorem ipsum dolor sit amet consectetur. Feugiat sit eleifend tortor lectus adipiscing aliquam.",
    },
    {
      photo: "blog-5.png",
      userIcon: <CiUser />,
      userName: "Malisa John",
      calendarIcon: <LuCalendarDays />,
      date: "08 Aug, 2023",
      roamingText:
        "Roaming with Purpose: Traveling Responsibly and Sustainably",
      para: "Lorem ipsum dolor sit amet consectetur. Feugiat sit eleifend tortor lectus adipiscing aliquam.",
    },
    {
      photo: "blog-6.png",
      userIcon: <CiUser />,
      userName: "Malisa John",
      calendarIcon: <LuCalendarDays />,
      date: "08 Aug, 2023",
      roamingText:
        "Roaming with Purpose: Traveling Responsibly and Sustainably",
      para: "Lorem ipsum dolor sit amet consectetur. Feugiat sit eleifend tortor lectus adipiscing aliquam.",
    },
  ];

  return (
    <div className="bg-gray-200 py-4">
      <div className="px-72">
        <div className="text-3xl font-medium my-4 flex justify-center bg-white rounded-xl w-full items-center">
          <button className="bg-blue-600 px-8 py-4 p-2 rounded-lg text-white hover:bg-white hover:text-black duration-700 shadow-md">
            All Time
          </button>
          |
          <button className="hover:bg-blue-600 px-7 py-4 hover:text-white duration-700">
            Today
          </button>
          |
          <hr className="border-l-2 " />
          <button className="hover:bg-blue-600 px-8 py-4 hover:text-white duration-700">
            This Week
          </button>
          |
          <button className="hover:bg-blue-600 px-7 py-4 hover:text-white duration-700">
            This Month
          </button>
          |
          <button className="hover:bg-blue-600 rounded-lg px-7 py-4 hover:text-white duration-700">
            This Year
          </button>
        </div>
      </div>

      <div className=" flex items-center justify-start gap-6  flex-wrap  mt-6 px-24 mx-auto">
        {list.map((item, index) => (
          <div
            key={index}
            className="p-4 mt-4 w-[32%] rounded-xl h-full bg-white"
          >
            <img src={item.photo} alt="blogs" className="rounded-xl" />
            <div className="flex items-center gap-6 text-xl text-gray-500 py-3">
              <div className="flex items-center gap-2">
                {item.userIcon} {item.userName}
              </div>
              <div className="font-m text-3xl">|</div>

              <div className="flex items-center gap-2">
                {item.calendarIcon} {item.date}
              </div>
            </div>
            <Link
              to="/news_Listing"
              className="text-xl hover:text-blue-500 duration-500 font-medium pr-20 py-3"
            >
              {item.roamingText}
            </Link>
            <div className="py-2">{item.para}</div>
          </div>
        ))}
        <div></div>
      </div>
    </div>
  );
}
