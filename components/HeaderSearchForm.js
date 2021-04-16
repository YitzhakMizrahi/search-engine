import { XIcon } from '@heroicons/react/solid';

function HeaderSearchForm({
  margin,
  microphoneIcon,
  searchIconMobile,
  searchIconDesktop,
  searchInputRef,
  handleChange,
  defaultValue,
  clearSearch,
  search,
}) {
  return (
    <>
      <form
        className={`flex flex-grow px-6 py-3 ${margin} border border-gray-200 rounded-full shadow-lg max-w-3xl items-center`}
      >
        {searchIconMobile}
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
        {microphoneIcon}
        {searchIconDesktop}
        <button hidden type="submit" onClick={search}>
          Search
        </button>
      </form>
    </>
  );
}

export default HeaderSearchForm;
