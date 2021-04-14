import { useRef, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { DebounceInput } from 'react-debounce-input';
import { MicrophoneIcon, ViewGridIcon, XIcon } from '@heroicons/react/solid';
import { SearchIcon } from '@heroicons/react/outline';
import Avatar from '../components/Avatar';
import Footer from '../components/Footer';

export default function Home() {
  const [results, setResults] = useState({});
  const [input, setInput] = useState(null);
  const searchInputRef = useRef(null);
  const router = useRouter();

  const autoSearch = async (e) => {
    const searchTerm = searchInputRef.current.value;
  
    setInput(searchTerm);

    if (!searchTerm) return;

    const data = await fetch(
      `https://search-engine-yitzhakmizrahi.vercel.app/api/search?query=${searchTerm}`
    )
      .then((response) => response.json())
      .catch((err) => console.log(err));

    // Pass back the results
    setResults(data);
  };

  const search = (e) => {
    e.preventDefault();
    const searchTerm = searchInputRef.current.value;

    if (!searchTerm) return;

    router.push(`/search?term=${searchTerm}`);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        {/* Left */}
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>

        {/* Right */}
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>

          {/* Icon */}
          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />

          <Avatar url="https://ssl.gstatic.com/images/branding/product/1x/avatar_circle_blue_512dp.png" />
        </div>
      </header>

      {/* Body */}
      <form className="flex flex-col items-center mt-44 flex-grow w-4/5">
        <Image
          src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          height={100}
          width={300}
        />
        {input ? (
          <>
            <div className="flex w-full mt-5  max-w-md rounded-3xl rounded-b-none border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
              <SearchIcon className="h-5 mr-3 text-gray-500" />
              <DebounceInput
                minLength={1}
                debounceTimeout={400}
                inputRef={searchInputRef}
                onChange={autoSearch}
                type="text"
                className="flex-grow focus:outline-none"
              />
              <XIcon
                className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
                onClick={() => {
                  setInput(null);
                  searchInputRef.current.value = '';
                }}
              />
              <MicrophoneIcon className="h-5 text-gray-500" />
            </div>
            <div className="w-full rounded-3xl focus-within:shadow-lg rounded-t-none border border-gray-200 px-5 py-3 max-w-md shadow-lg sm:max-w-xl lg:max-w-2xl items-center">
              {results.data?.items?.map((result) => (
                <div key={result.link} className="mb-5 hover:bg-gray-50">
                  <div className="group flex items-center">
                    <SearchIcon className="h-4 mr-2" />
                    <a
                      onClick={() =>
                        router.push(`/search?term=${result.title}`)
                      }
                    >
                      <h2 className="">{result.title}</h2>
                    </a>
                  </div>
                </div>
              ))}
              <div className="flex flex-col space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
                <button onClick={search} className={`btn`}>
                  Google Search
                </button>
                <button onClick={search} className={`btn`}>
                  I'm Feeling Lucky
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
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
            <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
              <button onClick={search} className={`btn`}>
                Google Search
              </button>
              <button onClick={search} className={`btn`}>
                I'm Feeling Lucky
              </button>
            </div>
          </>
        )}
      </form>

      {/* Footer */}
      <Footer />
    </div>
  );
}
