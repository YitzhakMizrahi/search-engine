import { useRef } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Avatar from './Avatar';
import HeaderOptions from './HeaderOptions';
import HeaderSearchFormDesktop from './HeaderSearchFormDesktop';
import HeaderSearchFormMobile from './HeaderSearchFormMobile';
import useWindowSize from '../utils/useWindowSize';

function Header() {
  const searchInputRef = useRef(null);
  const router = useRouter();
  const size = useWindowSize();

  const search = (e) => {
    e.preventDefault();
    const searchTerm = searchInputRef.current.value;

    if (!searchTerm) return;

    router.push(`/search?term=${searchTerm}`);
  };

  return (
    <>
      <header
        className={`${
          size.width <= 550 ? `baseline` : `sticky`
        } top-0 bg-white`}
      >
        <div className="flex w-full p-6 items-center">
          <Image
            src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            height={40}
            width={120}
            onClick={() => router.push('/')}
            className="cursor-pointer"
          />

          {/* Desktop view */}
          {size.width > 550 && (
            <>
              <HeaderSearchFormDesktop
                searchInputRef={searchInputRef}
                defaultValue={router.query.term}
                clearSearch={() => (searchInputRef.current.value = '')}
                search={search}
              />
            </>
          )}

          <Avatar
            className="ml-auto"
            url="https://ssl.gstatic.com/images/branding/product/1x/avatar_circle_blue_512dp.png"
          />
        </div>
        <HeaderOptions
          className={`${size.width <= 550 ? `hidden` : `flex`} `}
        />

        {/* Mobile view */}
        {size.width <= 550 && (
          <>
            <HeaderSearchFormMobile
              searchInputRef={searchInputRef}
              defaultValue={router.query.term}
              clearSearch={() => (searchInputRef.current.value = '')}
              search={search}
            />
            <HeaderOptions />
          </>
        )}
      </header>
    </>
  );
}

export default Header;
