import { XIcon } from '@heroicons/react/solid';
import { SearchIcon } from '@heroicons/react/outline';

function HeaderSearchFormMobile({
  searchInputRef,
  handleChange,
  defaultValue,
  clearSearch,
  search,
}) {
  return (
    <>
      <form
        className={`flex flex-grow px-6 py-3 ml-4 mr-4 mb-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center`}
      >
        <SearchIcon className="h-5 mr-3 text-gray-500" />
        <input
          ref={searchInputRef}
          onChange={handleChange}
          className="flex-grow w-full focus:outline-none"
          defaultValue={defaultValue}
          type="text"
        />
        <XIcon
          className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
          onClick={clearSearch}
        />
        <button hidden type="submit" onClick={search}>
          Search
        </button>
      </form>
    </>
  );
}

export default HeaderSearchFormMobile;
