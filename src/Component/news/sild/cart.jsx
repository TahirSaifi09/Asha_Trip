/** @format */

import { MdKeyboardArrowRight } from 'react-icons/md';

const Cart = () => {
  const List = [
    {
      photo:
        'https://uiparadox.co.uk/templates/flynow/v2/assets/media/blog/blog-side-1.png',
      name: 'Urban Explorations: Navigating Cities and',
      key: 1,
    },

    {
      photo:
        'https://uiparadox.co.uk/templates/flynow/v2/assets/media/blog/blog-side-2.png',
      name: 'Horizons Beyond Borders: Expanding ',
      key: 2,
    },
    {
      photo:
        'https://uiparadox.co.uk/templates/flynow/v2/assets/media/blog/blog-side-3.png',
      name: 'Wings of Adventure: Exploring the World by ',
      key: 3,
    },
  ];

  return (
    <div>
      <h2 className="font-semibold text-xl">Popular Blogs</h2>
      <ul className="flex flex-col gap-6 ">
        {List.map((itm) => (
          <li
            key={itm.key}
            className="flex gap-4 max-xl:w-3/4 max-md:w-full  relative overflow-hidden group rounded-xl  items-center w-full p-2"
            style={{ backgroundColor: 'rgba(77, 115, 252, 0.1)' }}
          >
            <div className="w-1/2 rounded-xl overflow-hidden">
              <img
                src={itm.photo}
                alt={itm.name}
                className=" w-full  object-cover rounded-xl shadow-lg group-hover:scale-110 ease-in-out duration-1000 h-auto"
              />
            </div>
            <div className="w-1/2 flex flex-col justify-center">
              <p className="font-semibold line-clamp-2 hover:text-blue-600 duration-1000">
                {itm.name}
              </p>
              <button className="flex items-center mt-2 text-blue-600 ">
                Read More
                <MdKeyboardArrowRight className="ml-2" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
