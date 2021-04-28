import Avatar from '../components/Avatar';
import Apps from '../components/Apps';

function IndexHeader({ screenSizeWidth }) {
  return (
    <>
      {/* Header */}
      <header
        className={`${
          screenSizeWidth <= 414 && `mt-1`
        } flex w-full p-5 justify-between text-sm text-gray-700`}
      >
        {/* Left */}
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>

        {/* Right */}
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>

          <Apps />

          <Avatar url="https://ssl.gstatic.com/images/branding/product/1x/avatar_circle_blue_512dp.png" />
        </div>
      </header>
    </>
  );
}

export default IndexHeader;
