import { useRef, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import IndexHeader from '../components/IndexHeader';
import SearchInput from '../components/SearchInput';
import AutoSearchResults from '../components/AutoSearchResults';
import SearchButtons from '../components//SearchButtons';
import Footer from '../components/Footer';
import { USE_DUMMY_DATA } from '../keys';
import useWindowSize from '../utils/useWindowSize';

export default function Home() {
  const [results, setResults] = useState({});
  const [input, setInput] = useState(null);
  const searchInputRef = useRef(null);
  const router = useRouter();
  const size = useWindowSize();
  const [hasFocus, setFocus] = useState(false);

  const autoSearch = async (e) => {
    const searchTerm = searchInputRef.current.value;

    // Clear input with backspace
    setInput(searchTerm);

    if (!searchTerm) return;

    // const url = USE_DUMMY_DATA
    //   ? 'http://localhost:3000'
    //   : 'https://search-engine-khaki.vercel.app';

    const url = 'https://search-engine-khaki.vercel.app';

    const data = await fetch(`${url}/api/search?query=${searchTerm}`)
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
      <IndexHeader screenSizeWidth={size.width} />

      {/* Body */}
      <form
        className={`flex flex-col items-center flex-grow w-4/5 ${
          size.width <= 414 ? `mt-20` : `mt-44`
        }`}
      >
        <div className="logo">
          <img src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" />
        </div>

        {/* Render AutoSearchResults on desktop view and only when there is an input */}
        {input && size.width > 414 && size.height > 736 && hasFocus ? (
          <>
            <SearchInput
              searchInputRef={searchInputRef}
              autoSearch={autoSearch}
              className={'rounded-3xl rounded-b-none'}
              onFocus={() => setFocus(true)}
              onBlur={() => setFocus(false)}
            />
            <AutoSearchResults
              input={input}
              results={results}
              search={search}
            />
          </>
        ) : (
          <>
            <SearchInput
              searchInputRef={searchInputRef}
              autoSearch={autoSearch}
              className={'rounded-full hover:shadow-lg focus-within:shadow-lg'}
              onFocus={() => setFocus(true)}
              onBlur={() => setFocus(false)}
            />
            <SearchButtons search={search} width={'w-1/2'} />
          </>
        )}
      </form>

      {/* Footer */}
      <Footer />
    </div>
  );
}
