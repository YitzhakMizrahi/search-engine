import { ViewGridIcon } from '@heroicons/react/solid';
import Avatar from '../components/Avatar';

function IndexHeader() {
  return (
    <>
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
    </>
  );
}

export default IndexHeader;
