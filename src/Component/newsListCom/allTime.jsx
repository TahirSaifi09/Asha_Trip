import { CiUser } from "react-icons/ci";
import { LuCalendarDays } from "react-icons/lu";

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
  ];

  return (
    <div className="bg-gray-200">
      <div className="text-3xl font-medium flex justify-center gap-4 mt-4 bg-white w-2/3 items-center">
        <button className="bg-blue-600 px-8 py-4 text-white hover:bg-white hover:text-black duration-700 shadow-md">
          All Time
        </button>
        <button className="hover:bg-blue-600 px-8 py-4 hover:text-white duration-700">
          Today
        </button>
        <hr className="border-2 " />
        <button className="hover:bg-blue-600 px-8 py-4 hover:text-white duration-700">
          This Week
        </button>
        <button className="hover:bg-blue-600 px-8 py-4 hover:text-white duration-700">
          This Month
        </button>
        <button className="hover:bg-blue-600 px-8 py-4 hover:text-white duration-700">
          This Year
        </button>
      </div>

      <div>
        <img src="blog-2.png" alt="blog2" />
        <div></div>
      </div>

      <div className="bg-white w-1/3 flex flex-wrap">
        {list.map((item, index) => (
          <div key={item} className="p-4">
            <img src={item.photo} alt="blogs" className="rounded-xl" />
            <div className="flex items-center gap-4 text-xl py-3">
              {item.userIcon} {item.userName} | {item.calendarIcon} {item.date}
            </div>
            <div className="text-xl font-medium pr-20 py-3">
            {item.roamingText}
            </div>
            {item.para}
          </div>
        ))}
        <div></div>
      </div>
    </div>
  );
}
