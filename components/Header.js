import { useRef } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { MicrophoneIcon, SearchIcon, XIcon } from '@heroicons/react/solid';
import Avatar from './Avatar';
import HeaderOptions from './HeaderOptions';
import useWindowSize from '../utils/useWindowSize';

function Header() {
  const router = useRouter();
  const searchInputRef = useRef(null);
  const size = useWindowSize();

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <>
      <header className="sticky top-0 bg-white">
        <div className="flex w-full p-6 items-center">
          <Image
            src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            height={40}
            width={120}
            onClick={() => router.push('/')}
            className="cursor-pointer"
          />
          <form
            className={`${
              size.width <= 550 ? `hidden` : `flex`
            } flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center desktop`}
          >
            <input
              ref={searchInputRef}
              className="flex-grow w-full focus:outline-none"
              defaultValue={router.query.term}
              type="text"
            />
            <XIcon
              className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
              onClick={() => (searchInputRef.current.value = '')}
            />
            <MicrophoneIcon className="mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />
            <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex" />
            <button hidden type="submit" onClick={search}>
              Search
            </button>
          </form>
          <Avatar
            className="ml-auto"
            url="https://ssl.gstatic.com/images/branding/product/1x/avatar_circle_blue_512dp.png"
          />
        </div>
        <HeaderOptions
          className={`${size.width <= 550 ? `hidden` : `flex`} `}
        />

        <form
          className={`${
            size.width <= 550 ? `flex` : `hidden`
          } flex-grow px-6 py-3 ml-4 mr-4 mb-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center`}
        >
          <input
            ref={searchInputRef}
            className="flex-grow w-full focus:outline-none"
            defaultValue={router.query.term}
            type="text"
          />
          <XIcon
            className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
            onClick={() => (searchInputRef.current.value = '')}
          />
          <MicrophoneIcon className="mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />
          <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex" />
          <button hidden type="submit" onClick={search}>
            Search
          </button>
        </form>
        <HeaderOptions className={`${size.width <= 550 ? `flex` : `hidden`}`} />
      </header>
    </>
  );
}

export default Header;
