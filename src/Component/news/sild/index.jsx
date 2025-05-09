/** @format */

import Cart from './cart';
import Categories from './categories';
import Search from './search';

export default function Silde_details() {
  return (
    <div className=" flex flex-col w-1/4 max-xl:w-3/4 max-md:w-full p gap-8 m-6 max-sm:m-0">
      <Search />
      <Categories />
      <Cart />
    </div>
  );
}
