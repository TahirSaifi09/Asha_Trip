/** @format */

import { Link } from 'react-router-dom';

export default function Categories() {
  const List = [
    {
      name: 'Anime',
      key: 1,
    },
    {
      name: 'Mango',
      key: 2,
    },
    {
      name: 'Cosplay',
      key: 3,
    },
    {
      name: 'Light Noval',
      key: 4,
    },
  ];
  return (
    <div className="flex gap-4 max-xl:w-3/4 flex-wrap">
      <h2 className="font-semibold text-xl">Categories</h2>
      <ul className="flex gap-4 flex-wrap ">
        {List.map((itm) => (
          <li
            key={itm.key}
            className="px-5 py-2 text-center rounded-lg hover:text-blue-500"
            style={{ backgroundColor: 'rgba(77, 115, 252, 0.1)' }}
          >
            <Link>{itm.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
