function SearchButtons({ search, width }) {
  return (
    <div className={`flex flex-col ${width} space-y-2 justify-center mt-8 mb-4 sm:space-y-0 sm:flex-row sm:space-x-4`}>
      <button onMouseDown={search} className={`btn`}>
        Google Search
      </button>
      <button onMouseDown={search} className={`btn`}>
        I'm Feeling Lucky
      </button>
    </div>
  );
}

export default SearchButtons;
