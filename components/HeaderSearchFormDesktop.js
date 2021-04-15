import { MicrophoneIcon, XIcon } from '@heroicons/react/solid';
import { SearchIcon } from '@heroicons/react/outline';

function HeaderSearchFormDesktop({
  searchInputRef,
  handleChange,
  defaultValue,
  clearSearch,
  search,
}) {
  return (
    <>
      <form
        className={`flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center`}
      >
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
        <MicrophoneIcon className="mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />
        <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex" />
        <button hidden type="submit" onClick={search}>
          Search
        </button>
      </form>
    </>
  );
}

export default HeaderSearchFormDesktop;
