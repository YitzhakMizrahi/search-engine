import { DebounceInput } from 'react-debounce-input';
import { SearchIcon } from '@heroicons/react/outline';
import { MicrophoneIcon } from '@heroicons/react/solid';

function SearchInput({ searchInputRef, autoSearch, className }) {
  return (
    <div
      className={`${className} flex w-full mt-5 max-w-md border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl `}
    >
      <SearchIcon className="h-5 mr-3 text-gray-500" />
      <DebounceInput
        minLength={1}
        debounceTimeout={400}
        inputRef={searchInputRef}
        onChange={autoSearch}
        type="text"
        className="flex-grow focus:outline-none"
      />
      <MicrophoneIcon className="h-5 text-gray-500" />
    </div>
  );
}

export default SearchInput;
