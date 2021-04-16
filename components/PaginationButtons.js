import { useRouter } from 'next/router';
import { useState } from 'react';
import ReactPaginate from 'react-paginate-next';
import PaginationGoogleIndicator from './PaginationGoogleIndicator';

function PaginationButtons({ results }) {
  const router = useRouter();
  const [pageNumber, setpageNumber] = useState(null);

  // const startIndex = Number(router.query.start) || 0;
  const totalResults = Number(results.queries.nextPage[0].totalResults);

  const handlePageClick = (data) => {
    const selected = data.selected * 10;
    setpageNumber(selected);
    console.log(pageNumber);
    router.push(`/search?term=${router.query.term}&start=${selected}`);
  };

  return (
    <>
      <PaginationGoogleIndicator pageNumber={pageNumber / 10} />

      <div
        className={`flex justify-center max-w-lg text-blue-700 ${
          pageNumber === null || pageNumber === 0
            ? 'ml-[1.5rem] sm:ml-[0.3rem]'
            : 'ml-[-2rem] sm:ml-[-1.5rem]'
        }  mt-[0.5rem] mb-[3rem]`}
      >
        <div className="chevron">
          <ReactPaginate
            previousLabel={pageNumber > 0 && 'Previous'}
            nextLabel={'Next'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={totalResults / 10}
            marginPagesDisplayed={0}
            pageRangeDisplayed={9}
            onPageChange={handlePageClick}
            containerClassName={'pagination'}
            subContainerClassName={'pages pagination'}
            activeClassName={'active'}
          />
        </div>
      </div>
    </>
  );
}

export default PaginationButtons;
