/** @format */

export default function Search() {
  return (
    <div
      className="flex w-80   h-14 items-center mt-4 justify-between rounded-2xl max-xl:w-3/4 max-md:w-full"
      style={{ backgroundColor: 'rgba(77, 115, 252, 0.1)' }}
    >
      <input
        type="text"
        placeholder="search"
        className="outline-none w-full h-full p-2  "
        style={{ backgroundColor: 'rgba(77, 115, 252, 0.1)' }}
      />
      <div className="h-full flex">
        <button
          type="submit"
          className="h-full p-2  text-lg "
          style={{ backgroundColor: 'rgba(77, 115, 252, 0.1)' }}
        >
          Search
        </button>
      </div>
    </div>
  );
}
