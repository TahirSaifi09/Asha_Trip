/** @format */
import { FaRegUser } from 'react-icons/fa';
import { FaRegCalendarAlt } from 'react-icons/fa';

export default function News_hero() {
  return (
    <div className="flex gap-4 p-2 bg-white shadow-2xl items-center w-3/5 justify-center  flex-wrap   max-md:w-full">
      <div className="flex gap-2 text-lg flex-wrap">
        <FaRegUser />
        <span> Author:</span>
        <span className="font-light text-gray-400">Mathew Drake</span>
      </div>
      <div className="flex gap-2 text-lg flex-wrap">
        <FaRegCalendarAlt />
        <span> Published Date:</span>
        <span className="font-light text-gray-400"> 30th NOV, 2023</span>
      </div>
    </div>
  );
}
