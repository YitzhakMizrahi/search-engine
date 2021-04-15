function PaginationGoogleIndicator({ pageNumber }) {
  return (
    <div className="w-full flex max-w-lg justify-center text-4xl font-semibold mt-[3rem]">
      <span className="text-blue-500">G</span>
      <span
        className={`${pageNumber === 0 ? 'text-red-500' : 'text-yellow-300'}`}
      >
        o
      </span>
      <span
        className={`${pageNumber === 1 ? 'text-red-500' : 'text-yellow-300'}`}
      >
        o
      </span>
      <span
        className={`${pageNumber === 2 ? 'text-red-500' : 'text-yellow-300'}`}
      >
        o
      </span>
      <span
        className={`${pageNumber === 3 ? 'text-red-500' : 'text-yellow-300'}`}
      >
        o
      </span>
      <span
        className={`${pageNumber === 4 ? 'text-red-500' : 'text-yellow-300'}`}
      >
        o
      </span>
      <span
        className={`${
          pageNumber === 5 || pageNumber >= 10
            ? 'text-red-500'
            : 'text-yellow-300'
        }`}
      >
        o
      </span>
      <span
        className={`${pageNumber === 6 ? 'text-red-500' : 'text-yellow-300'}`}
      >
        o
      </span>
      <span
        className={`${pageNumber === 7 ? 'text-red-500' : 'text-yellow-300'}`}
      >
        o
      </span>
      <span
        className={`${pageNumber === 8 ? 'text-red-500' : 'text-yellow-300'}`}
      >
        o
      </span>
      <span
        className={`${pageNumber === 9 ? 'text-red-500' : 'text-yellow-300'}`}
      >
        o
      </span>
      <span className="text-blue-500">g</span>
      <span className="text-green-700">l</span>
      <span className="text-red-500">e</span>
    </div>
  );
}

export default PaginationGoogleIndicator;
